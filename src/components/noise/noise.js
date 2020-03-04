import angular from "angular";
import noiseComponent from "./noise.component";

let noiseModule = angular
  .module("noiseModule", [])
  .component("noiseComponent", noiseComponent).name;

export default noiseModule;
