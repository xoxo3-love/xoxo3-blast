const Xoxo3 = artifacts.require("Xoxo3")

module.exports = function (deployer) {
  deployer.deploy(Xoxo3, "Xoxo3.love Token", "XOXO3")
}
