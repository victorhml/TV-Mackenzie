var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <menuBarTemplate>
    <menuBar>
      <menuItem template="${this.BASEURL}templates/ProductBundle2.xml.js" presentation="menuBarItemPresenter">
        <title>Home</title>
      </menuItem>
      <menuItem template="${this.BASEURL}templates/InfoTemplate.xml.js" presentation="menuBarItemPresenter">
        <title>Sobre</title>
      </menuItem>
    </menuBar>
  </menuBarTemplate>
</document>`
}
