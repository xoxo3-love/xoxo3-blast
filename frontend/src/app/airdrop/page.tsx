"use client";
import PageWrap from "@/layout/base/PageWrap";
import { useState } from "react";

export default function Home(props: {}) {
  const [reloadAt, setReloadAt] = useState(0);
  return (
    <PageWrap className="">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScSiwRac5-46MoiUaz_-3vdaz30u_VxrJUt_yKJndjK8A3h3A/viewform?embedded=true"
        width="100%"
        height="1088"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        正在加载…
      </iframe>
    </PageWrap>
  );
}
