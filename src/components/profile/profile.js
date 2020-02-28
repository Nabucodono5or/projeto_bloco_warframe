import angular from "angular";
import profileComponent from "./profile.component";

let profileModule = angular
  .module("profileModule", [])
  .component("profile", profileComponent).name;

export default profileModule;
