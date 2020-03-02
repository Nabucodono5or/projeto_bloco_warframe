import angular from "angular";
import inicialModule from "./inicial/inicial";
import toolbarModule from "./toolbar/toolbar";
import categoriaModule from "./categoria/categoria";
import profileModule from './profile/profile';
import statusModule from './status/status';

let componentModule = angular.module("components", [
  inicialModule,
  toolbarModule,
  categoriaModule,
  profileModule,
  statusModule
]).name;

export default componentModule;
