import template from "rarity.html";
import controller from "./rarity.controller";

let rarityComponent = {
  template,
  bindings: {
    item: "<"
  },
  controller,
  controllerAs: "vm"
};

export default rarityComponent;
