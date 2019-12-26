import angular from 'angular';
import componentModule from './components/component';
import appComponent from './app.component';

angular
  .module('app', [componentModule])
  .component('app', appComponent)
  .name;
