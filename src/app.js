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
import backcolor from './directivas/backcolor.directive';
import d3Module from './d3/d3';
import d3Lines from './directivas/d3.directive';

angular
  .module("app", [
    componentModule,
    uiRouter,
    ngMessages,
    ngAria,
    ngAnimate,
    ngMaterial,
    d3Module
  ])
  .config(configState)
  .directive("backColor",backcolor)
  .directive("backImage",backImageDirective)
  .directive("backImageGradient", backimageGradient)
  .directive("d3Lines", ["d3", d3Lines])
  .component("app", appComponent).name;
