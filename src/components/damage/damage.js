import angular from "angular";
import damageComponent from "./damage.component";

let damageModule = angular
  .module("damageModule", [])
  .component("damage", damageComponent).name;

export default damageModule;
