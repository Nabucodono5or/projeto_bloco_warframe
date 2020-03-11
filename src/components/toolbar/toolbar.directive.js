function toolbarDirective($state) {
  let directive = {
    restrict: "EA",
    link: link
  };

  return directive;

  ////////////////////

  function link(scope, element, attr) {
    element.on("keydown keypress", event => {
      if (event.which == 13) {
        $state.go("search", { termo: attr.toolbarDirective });
        event.preventDefault();
      }
    });
  }
}

export default toolbarDirective;
