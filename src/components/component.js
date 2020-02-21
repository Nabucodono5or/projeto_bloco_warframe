import angular from "angular";
import homeModule from "./home/home";
import toolbarModule from "./toolbar/toolbar";

let componentModule = angular.module("components", [homeModule, toolbarModule])
  .name;

export default componentModule;
