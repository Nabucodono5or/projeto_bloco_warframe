import angular from "angular";
import inicialModule from "./inicial/inicial";
import toolbarModule from "./toolbar/toolbar";
import categoriaModule from "./categoria/categoria";
import profileModule from "./profile/profile";
import statusModule from "./status/status";
import abilitiesModule from "./abilities/abilities";
import descricaoModule from "./descricao/descricao";
import damageModule from "./damage/damage";
import noiseModule from "./noise/noise";

let componentModule = angular.module("components", [
  inicialModule,
  toolbarModule,
  categoriaModule,
  profileModule,
  statusModule,
  abilitiesModule,
  descricaoModule,
  damageModule,
  noiseModule
]).name;

export default componentModule;
