import angular from 'angular';
import componentModule from './components/component';
import appComponent from './app.component';
import uiRouter from '@uirouter/angularjs';

angular
  .module('app', [componentModule, uiRouter])
  .component('app', appComponent)
  .name;
