import template from "drops.html";
import controller from "./drops.controller";

let dropsComponent = {
  template,
  bindings: {
    componentes: "<"
  },
  controller,
  controllerAs: "vm"
};

export default dropsComponent;
