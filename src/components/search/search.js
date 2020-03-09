import angular from "angular";
import searchComponent from "./search.component";
import searchFactory from './search.service';

let searchModule = angular
  .module("searchModule", [])
  .factory("searchService", searchFactory)
  .component("search", searchComponent).name;

export default searchModule;
