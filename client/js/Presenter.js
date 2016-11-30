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
        /*
        To get the menu bar's 'MenuBarDocument' feature, we move up the DOM Node tree using
        the parentNode property. This allows us to access the the menuBar element from the
        current item element.
        */
        var feature = ele.parentNode.getFeature("MenuBarDocument");

        if (feature) {
            /*
            To retrieve the document associated with the menu bar element, if one has been
            set, you call the getDocument function the MenuBarDocument feature. The function
            takes one argument, the item element.
            */
            var currentDoc = feature.getDocument(ele);
            /*
            To present a document within the menu bar, you need to associate it with the
            menu bar item. This is accomplished by call the setDocument function on MenuBarDocument
            feature. The function takes two argument, the document to be presented and item it
            should be associated with.

            In this implementation we are only associating a document once per menu bar item. You can
            associate a document each time the item is selected, or you can associate documents with
            all the menu bar items before the menu bar is presented. You will need to experimet here
            to balance document presentation times with updating the document items.
            */
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
