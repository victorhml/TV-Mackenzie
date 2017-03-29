
var Template = function() {
    return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .showTextOnHighlight {
      tv-text-highlight-style: show-on-highlight;
    }
    .whiteButton {
      tv-tint-color: rgb(255, 255, 255);
    }
    .shelfLayout {
      padding: 40 90;
    }
    .descriptionMaxLines{
      tv-text-max-lines: 3;
    }
    </style>
  </head>
  <productBundleTemplate>
    <background>
      <img src="${this.BASEURL}images/mack.png" />
    </background>
    <banner>
      <stack>
        <title>Bem vindo ao MackNews</title>
        <description allowsZooming="true" template="${this.BASEURL}templates/AlertAboutMessage.xml.js" presentation="modalDialogPresenter" class="descriptionMaxLines">Como forma de se mostrar todo o conteúdo ao vivo disponibilizado pela TV Mackenzie, o aplicativo passa a transmitir seu conteúdo para a plataforma da Apple TV, tornando a experiência mais prática e rápida para os usuários da plataforma.</description>
      </stack>
      <heroImg src="${this.BASEURL}images/logoMack.png"/>
    </banner>
    <shelf class="shelfLayout">
      <header>
        <title>Apoio</title>
      </header>
      <section>
        <monogramLockup>
          <monogram src="${this.BASEURL}images/logoFCI.png" class="baseMonogram" width="300" height="300" />
          <title style="color:rgb(255, 255, 255)">Faculdade de Computação e Informática</title>
        </monogramLockup>
        <monogramLockup>
          <monogram src="${this.BASEURL}images/logoMackMobile.png" class="baseMonogram" width="300" height="300" />
          <title style="color:rgb(255, 255, 255)">Mack Mobile</title>
        </monogramLockup>
        <monogramLockup>
          <monogram src="${this.BASEURL}images/logoMack.png" class="baseMonogram" width="300" height="300" />
          <title style="color:rgb(255, 255, 255)">Divisão de Tecnologia e Informática</title>
        </monogramLockup>
      </section>
    </shelf>
    <shelf class="shelfLayout">
      <header>
        <title>Equipe técnica</title>
      </header>
      <section>
        <monogramLockup>
          <monogram src="${this.BASEURL}images/vhml.jpg" class="baseMonogram" width="300" height="300" />
          <title style="color:rgb(255, 255, 255)">Victor Lisboa</title>
          <subtitle style="color:rgb(255, 255, 255)">Desenvolvedor</subtitle>
        </monogramLockup>
        <monogramLockup>
          <monogram src="${this.BASEURL}images/jpf.jpg" class="baseMonogram" width="300" height="300" />
          <title style="color:rgb(255, 255, 255)">Joaquim Pessoa Filho</title>
          <subtitle style="color:rgb(255, 255, 255)">Projeto MackMobile</subtitle>
        </monogramLockup>
        <monogramLockup>
          <monogram src="${this.BASEURL}images/bap.jpg" class="baseMonogram" width="300" height="300" />
          <title style="color:rgb(255, 255, 255)">Beatriz Pacheco</title>
          <subtitle style="color:rgb(255, 255, 255)">Projeto MackMobile</subtitle>
        </monogramLockup>
        <monogramLockup>
          <monogram src="${this.BASEURL}images/rm.jpg" class="baseMonogram" width="300" height="300" />
          <title style="color:rgb(255, 255, 255)">Rafael Mota</title>
        <subtitle style="color:rgb(255, 255, 255)">GERTI</subtitle>
              </monogramLockup>
      </section>
    </shelf>
  </productBundleTemplate>
</document>`
}
