import template from "abilities.html";
import controller from "./abilities.controller";

let abilitiesComponent = {
  template,
  bindings: {
    item: "<"
  },
  controller,
  controllerAs: "vm"
};

export default abilitiesComponent;
