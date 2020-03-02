import angular from "angular";
import statusComponent from "./status.component";

let statusModule = angular
  .module("statusModule", [])
  .component("status", statusComponent).name;

export default statusModule;
