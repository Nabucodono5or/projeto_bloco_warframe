import angular from "angular";
import dropmodComponent from "./dropmod.component";

let dropmodModule = angular
  .module("dropmodModule", [])
  .component("dropmod", dropmodComponent).name;

export default dropmodModule;
