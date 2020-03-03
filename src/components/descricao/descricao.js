import angular from "angular";
import descricaoComponent from "./descricao.component";

let descricaoModule = angular
  .module("descricaoModule", [])
  .component("descricao", descricaoComponent).name;

export default descricaoModule;
