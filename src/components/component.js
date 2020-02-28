import angular from "angular";
import inicialModule from "./inicial/inicial";
import toolbarModule from "./toolbar/toolbar";
import categoriaModule from "./categoria/categoria";
import profileModule from './profile/profile';

let componentModule = angular.module("components", [
  inicialModule,
  toolbarModule,
  categoriaModule,
  profileModule
]).name;

export default componentModule;
