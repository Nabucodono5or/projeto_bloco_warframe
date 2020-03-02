import angular from "angular";
import componentModule from "./components/component";
import appComponent from "./app.component";
import uiRouter from "@uirouter/angularjs";
import ngMaterial from "angular-material";
import ngMessages from "angular-messages";
import ngAria from "angular-aria";
import ngAnimate from "angular-animate";
import configState from './app.config';
import backImageDirective from './directivas/backimage.directive';
import backimageGradient from './directivas/backimagegradient.directive';

angular
  .module("app", [
    componentModule,
    uiRouter,
    ngMessages,
    ngAria,
    ngAnimate,
    ngMaterial
  ])
  .config(configState)
  .directive("backImage",backImageDirective)
  .directive("backImageGradient", backimageGradient)
  .component("app", appComponent).name;
