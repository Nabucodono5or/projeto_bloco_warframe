import angular from "angular";
import homeComponent from "./home.component";
import homeFactory from "./home.service";

let homeModule = angular
  .module("homeModule", [])
  .factory("homeService", homeFactory)
  .component("home", homeComponent).name;

export default homeModule;
