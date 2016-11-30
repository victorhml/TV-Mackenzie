var Template = function() {
    return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
      .descriptionLayout {
        tv-text-max-lines: 8;
      }
    </style>
  </head>
  <listTemplate>
    <banner>
      <background>
        <img src="${this.BASEURL}images/ban.png" width="1920" height="360" />
      </background>
    </banner>
    <list>
      <header>
        <title>TV MACKENZIE</title>
      </header>
      <relatedContent>
        <lockup>
          <img src="${this.BASEURL}images/live.jpg" width="857" height="482" />
        </lockup>
      </relatedContent>
      <section>
        <header>
          <title>Categorias</title>
        </header>
        <listItemLockup videoURL="http://ec2-50-19-196-117.compute-1.amazonaws.com:1935/live/smil:tvmackenzie.smil/playlist.m3u8">
          <title>Transmissão ao vivo</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}images/live.jpg" width="857" height="482" />
              </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/ProductBundle2.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
          <title>Programaçao</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}images/prog.jpg" width="857" height="482" />
            </lockup>
          </relatedContent>
        </listItemLockup>
      </section>
    </list>
  </listTemplate>
</document>`
}