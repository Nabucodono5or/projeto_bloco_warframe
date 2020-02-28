import angular from "angular";
import homeModule from "./home/home";
import toolbarModule from "./toolbar/toolbar";
import categoriaModule from "./categoria/categoria";
import profileModule from './profile/profile';

let componentModule = angular.module("components", [
  homeModule,
  toolbarModule,
  categoriaModule,
  profileModule
]).name;

export default componentModule;
