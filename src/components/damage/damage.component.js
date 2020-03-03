import template from "damage.html";
import controller from "./damage.controller";

let damageComponent = {
  template,
  bindings: {
    item: "<"
  },
  controller,
  controllerAs: "vm"
};

export default damageComponent;
