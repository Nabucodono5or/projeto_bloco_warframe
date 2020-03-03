import angular from "angular";
import abilitiesComponent from "./abilities.component";

let abilitiesModule = angular
  .module("abilitiesModule", [])
  .component("abilities", abilitiesComponent).name;

export default abilitiesModule;
