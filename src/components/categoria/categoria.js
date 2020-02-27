import angular from "angular";
import categoriaComponent from "./categoria.component";
import categoriaFactory from './categoria.service';

let categoriaModule = angular
  .module("homeModule", [])
  .factory("categoriaService", categoriaFactory)
  .component("categoria", categoriaComponent).name;

export default categoriaModule;
