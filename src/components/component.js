import angular from "angular";
import homeModule from "./home/home";
import toolbarModule from "./toolbar/toolbar";
import categoriaModule from "./categoria/categoria";

let componentModule = angular.module("components", [
  homeModule,
  toolbarModule,
  categoriaModule
]).name;

export default componentModule;
