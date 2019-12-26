import angular from 'angular';
import homeModule from './home/home';

let componentModule = angular.module('components', [homeModule])
    .name;

export default componentModule
