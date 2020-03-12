import angular from "angular";
import dropsComponent from "./drops.component";

let dropsModule = angular
  .module("dropsModule", [])
  .component("drops", dropsComponent).name;

export default dropsModule;
