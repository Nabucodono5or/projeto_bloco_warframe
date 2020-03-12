import template from "dropmod.html";
import controller from "./dropmod.controller";

let dropmodComponent = {
  template,
  bindings: {
    item: "<"
  },
  controller,
  controllerAs: "vm"
};

export default dropmodComponent;
