var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <menuBarTemplate>
    <menuBar>
      <menuItem template="${this.BASEURL}templates/Main.xml.js" presentation="menuBarItemPresenter">
        <title>TV e Rádio</title>
      </menuItem>
      <menuItem template="${this.BASEURL}templates/About.xml.js" presentation="menuBarItemPresenter">
        <title>Sobre</title>
      </menuItem>
    </menuBar>
  </menuBarTemplate>
</document>`
}
