import angular from "angular";
import rarityComponent from "./rarity.component";
import rarityFactory from './rarity.service';

let rarityModule = angular
  .module("rarityModule", [])
  .factory("rarityService", rarityFactory)
  .component("rarity", rarityComponent).name;

export default rarityModule;
