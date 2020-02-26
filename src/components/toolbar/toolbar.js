import angular from "angular";
import toolbarComponent from "./toolbar.component";
import toolbarFactory from "./toolbar.service";

let toolbarModule = angular
  .module("toolbarModule", [])
  .factory("toolbarService", toolbarFactory)
  .component("toolbar", toolbarComponent).name;

export default toolbarModule;
