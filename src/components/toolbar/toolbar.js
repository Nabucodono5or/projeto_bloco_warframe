import angular from "angular";
import toolbarComponent from "./toolbar.component";
import toolbarFactory from "./toolbar.service";
import toolbarDirective from './toolbar.directive';
import uiRouter from "@uirouter/angularjs";

let toolbarModule = angular
  .module("toolbarModule", [])
  .directive("toolbarDirective", ["$state", toolbarDirective])
  .factory("toolbarService", toolbarFactory)
  .component("toolbar", toolbarComponent).name;

export default toolbarModule;
