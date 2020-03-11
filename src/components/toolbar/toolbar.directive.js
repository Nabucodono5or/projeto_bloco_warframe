function toolbarDirective() {
  let directive = {
    restrict: "EA",
    link: link
  };

  return directive;

  ////////////////////

  function link(scope, element, attr) {
    element.on("nameEvent", () => {});
  }
}

export default toolbarDirective;
