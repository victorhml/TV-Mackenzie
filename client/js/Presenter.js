var tocando = false;
var player = new Player()
var Presenter = {
    makeDocument: function(resource) {
        if (!Presenter.parser) {
            Presenter.parser = new DOMParser();
        }
        var doc = Presenter.parser.parseFromString(resource, "application/xml");
        return doc;
    },
    modalDialogPresenter: function(xml) {
        navigationDocument.presentModal(xml);
    },
    pushDocument: function(xml) {
        navigationDocument.pushDocument(xml);
    },
    menuBarItemPresenter: function(xml, ele) {
        
        var feature = ele.parentNode.getFeature("MenuBarDocument");

        if (feature) {
            
            var currentDoc = feature.getDocument(ele);
            
            if (!currentDoc) {
                feature.setDocument(xml, ele);
            }
        }
    },
    load: function(event) {
        var self = this,
            ele = event.target,
            videoURL = ele.getAttribute("videoURL"),
            templateURL = ele.getAttribute("template"),
            presentation = ele.getAttribute("presentation");
            audioURL = ele.getAttribute("audioURL")
        if(videoURL) {
            var playlist = new Playlist();
        var mediaItem = new MediaItem("video", videoURL);
        player.playlist = playlist;
        player.playlist.push(mediaItem);
        player.present();
            tocando = false;
    } else if(audioURL) {
            var playlist = new Playlist();

                if (tocando) {
                    player.playlist.pop();
                    // player.pause();
                } else {
                    var mediaItem = new MediaItem("audio", audioURL);
                    player.playlist = playlist;
                    player.playlist.push(mediaItem);
                    player.play();
                    navigationDocument.popDocument();
                }
                console.log("tocando rádio:" + tocando);
                tocando = tocando?false:true;
    }
        if (templateURL) {
            resourceLoader.loadResource(templateURL,
                function(resource) {
                    if (resource) {
                        var doc = self.makeDocument(resource);
                        doc.addEventListener("select", self.load.bind(self));
                        doc.addEventListener("highlight", self.load.bind(self));
                        if (self[presentation] instanceof Function) {
                            self[presentation].call(self, doc, ele);
                        } else {
                            self.defaultPresenter.call(self, doc);
                        }
                    }
                });
        }
    },
}
