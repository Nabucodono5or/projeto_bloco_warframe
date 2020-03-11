function toolbarDirective($state) {
  let directive = {
    restrict: "EA",
    link: link
  };

  return directive;

  ////////////////////

  function link(scope, element, attr) {
    element.on("keypress", event => {
      if (event.which == 13) {
        $state.go("search", { termo: attr.toolbarDirective });
      }
    });
  }
}

export default toolbarDirective;
