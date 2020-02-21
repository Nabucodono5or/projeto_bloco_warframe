import angular from "angular";
import componentModule from "./components/component";
import appComponent from "./app.component";
import uiRouter from "@uirouter/angularjs";
import ngMaterial from "angular-material";
import ngMessages from "angular-messages";
import ngAria from "angular-aria";
import ngAnimate from "angular-animate";

angular
  .module("app", [
    componentModule,
    uiRouter,
    ngMessages,
    ngAria,
    ngAnimate,
    ngMaterial
  ])
  .component("app", appComponent).name;
