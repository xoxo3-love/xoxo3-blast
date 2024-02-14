import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export type TRouteRetBean<T extends object> = {
  path: string;
  param: T;
  push: (param: { [key: string]: any }) => void;
  replace: (param: { [key: string]: any }) => void;
};

export function useRouterHelper<T extends { [key: string]: string | number | string[] }, O extends object>(
  defaultParam: T,
  otherParam?: O,
): TRouteRetBean<T & O> {
  const router = useRouter();
  const params = useParams();

  let getParams = () => {
    let retParam = Object.assign({}, defaultParam);

    for (let k in defaultParam) {
      let defaultValue = defaultParam[k];
      //取得数组
      let tempValue = params[k];
      let array: string[] = [];
      if (!tempValue) {
        if (typeof defaultValue == "string") {
          array = [defaultValue];
        } else if (typeof defaultValue == "number") {
          array = [defaultValue + ""];
        } else {
          // @ts-ignore
          array = defaultValue;
        }
      } else if (typeof tempValue == "string") {
        array = [tempValue];
      } else if (tempValue instanceof Array) {
        array = tempValue;
      }

      //合并值
      if (typeof defaultValue == "string") {
        // @ts-ignore
        retParam[k] = array[0];
      } else if (typeof defaultValue == "number") {
        // @ts-ignore
        retParam[k] = parseFloat(array[0]);
      } else {
        // @ts-ignore
        retParam[k] = array;
      }
    }

    return {
      param: Object.assign({}, retParam, otherParam),
      path: router.pathname,
      push: (param: { [key: string]: any }) => {
        router.push({
          pathname: router.pathname + "",
          query: Object.assign({}, router.query, param),
        });
      },
      replace: (param: { [key: string]: any }) => {
        router.replace({
          pathname: router.pathname + "",
          query: Object.assign({}, router.query, param),
        });
      },
    };
  };
  const [retState, setRetState] = useState<TRouteRetBean<T & O>>(getParams());

  useEffect(() => {
    let newObj = getParams();
    // console.log("新路由", newObj);
    setRetState(newObj);
  }, [router]);

  return retState;
}

export function useRouterPage<T extends { [key: string]: string | number | string[] }, O extends object>(
  defaultParam: T,
  otherParam?: O,
): TRouteRetBean<
  T &
    O & {
      currentPage: number;
      pageSize: number;
    }
> {
  let retState = useRouterHelper(
    Object.assign(
      {},
      {
        currentPage: 1,
        pageSize: 2,
      },
      defaultParam,
    ),
    otherParam,
  );
  return retState;
}
