import template from "noise.html";
import controller from "./noise.controller";

let noiseComponent = {
  template,
  bindings: {
    noise: "<"
  },
  controller,
  controllerAs: "vm"
};

export default noiseComponent;
