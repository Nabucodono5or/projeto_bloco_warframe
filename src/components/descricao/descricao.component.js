import template from "descricao.html";
import controller from "./descricao.controller";

let descricaoComponent = {
  template,
  bindings: {
    item: "<"
  },
  controller,
  controllerAs: "vm"
};

export default descricaoComponent;
