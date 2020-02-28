import angular from "angular";
import inicialComponent from "./inicial.component";

let inicialModule = angular
  .module("inicialModule", [])
  .component("inicial", inicialComponent).name;

export default inicialModule;
