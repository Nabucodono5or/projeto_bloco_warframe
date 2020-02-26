import angular from "angular";
import categoriaComponent from "./categoria.component";

let categoriaModule = angular
  .module("homeModule", [])
  .component("categoria", categoriaComponent).name;

export default categoriaModule;
