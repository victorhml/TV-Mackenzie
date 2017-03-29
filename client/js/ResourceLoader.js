function ResourceLoader(baseurl) {
  this.BASEURL = baseurl;
}

ResourceLoader.prototype.loadResource = function(resource, callback) {
  var self = this;
  evaluateScripts([resource], function(success) {
    if(success) {
      var resource = Template.call(self);
      callback.call(self, resource);
    } else {
      var title = "Resource Loader Error",
          description = `Ops. Problema ao tentar abrir o recurso '${resource}'. \n\n Tente novamente mais tarde.`,
          alert = createAlert(title, description);
      navigationDocument.presentModal(alert);
    }
  });
}
