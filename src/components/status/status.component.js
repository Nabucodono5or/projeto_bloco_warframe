import template from "status.html";
import controller from "./status.controller";

let statusComponent = {
  template,
  bindings: {
    item: "<"
  },
  controller,
  controllerAs: "vm"
};

export default statusComponent;
