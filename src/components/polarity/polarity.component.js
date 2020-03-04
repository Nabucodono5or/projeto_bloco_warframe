import template from "polarity.html";
import controller from "./polarity.controller";

let polarityComponent = {
  template,
  bindings: {
    polarity: "<"
  },
  controller,
  controllerAs: "vm"
};

export default polarityComponent;
