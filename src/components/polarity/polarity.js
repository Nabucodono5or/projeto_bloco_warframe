import angular from "angular";
import polarityComponent from "./polarity.component";
import polarityService from './polarity.service';

let polarityModule = angular
  .module("polarityModule", [])
  .factory("polarityService", polarityService)
  .component("polarity", polarityComponent).name;

export default polarityModule;
