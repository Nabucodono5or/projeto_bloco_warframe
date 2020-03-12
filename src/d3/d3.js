import angular from "angular";
import d3Factory from './d3.factory';

let d3Module = angular
  .module("d3", [])
  .factory("d3", d3Factory).name;

export default d3Module;
