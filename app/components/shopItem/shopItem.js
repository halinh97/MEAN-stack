var moduleName = 'shopItem';
var componentName = moduleName;

angular.module(moduleName, [])
  .component(componentName, {
    templateUrl: componentTemplateFileName(moduleName, componentName),
    controller: Controller,
    controllerAs: '$ctrl',
    bindings: {
      taskname: "<",
      tasklocation: "<",
      tasktime: "<",
      tasknote: "<"
    }
  });

function Controller() {
  var self = this;
}

function componentTemplateFileName(moduleName, componentName) {
  return 'components/' + moduleName + "/" + componentName + ".html"
}
