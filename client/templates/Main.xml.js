/*
Copyright (C) 2016 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A product bundle template promotes a series of related TV shows, movies, or other products. It typically includes an image, background, and descriptive information. A shelf below the content displays the products contained by the bundle, such as the episodes of a TV season. The user can scroll down to bring up more information, such as cast and crew listings, ratings, or reviews.
*/
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
      tv-text-max-lines: 5;
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
        <subtitle>Programação</subtitle>
        <description allowsZooming="true" template="${this.BASEURL}templates/AlertDescription.xml.js" presentation="modalDialogPresenter" class="descriptionMaxLines">Desde 1997 a TV Mackenzie segue uma programação condinzente com a filosofia educacional da Universidade Presbiteriana Mackenzie, cujas atrações contribuem para o fortalecimento da família, da academia e da sociedade. A proposta é possibilitar uma nova forma e ver e fazer a televisão, criando diversos projetos interdisciplinares com conteúdos educativos e culturais transformando o veículo em uma poderosa ferramenta de transmissão e recepção de conhecimentos. A Universidade Mackenzie tem o privilégio de oferecer aos alunos, especialmente dos cursos de publicidade e jornalismo, a possibilidade veicular seus trabalhos acadêmicos em diferentes mídias. Mais do que ter seus trabalhos exibidos, muitos alunos fazem parte de nossa equipe.</description>
        <row>
          <buttonLockup videoURL="http://ec2-54-157-173-68.compute-1.amazonaws.com:8081/live_tvmackenzie/tvmackenzie/playlist.m3u8">
            <badge src="resource://button-preview" class="whiteButton"/>
            <title>Ao Vivo</title>
          </buttonLockup>
          <buttonLockup audioURL="http://ec2-54-157-173-68.compute-1.amazonaws.com:8081/live_radiomackenzie/radiomackenzie/playlist.m3u8">
            <badge src="resource://button-radio" class="whiteButton"/>
            <title>Rádio</title>
          </buttonLockup>
        </row>
      </stack>
      <heroImg src="${this.BASEURL}images/logoMack.png"/>
    </banner>
    <shelf>
      <header>
        <title>Programas</title>
      </header>
      <section>
        <lockup>
          <img src="${this.BASEURL}images/programas/academia.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">Academia em Debate</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Academia em Debate</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Programa de entrevistas da Chancelaria da Universidade, que aborda temas acadêmicos relacionando-os à teologia reformada de acordo com à confessionalidade da Universidade Presbiteriana Mackenzie. Apresentado pelo Chanceler, "Academia em Debate" vai ao ar duas vezes por dia e tem duração de 30 minutos.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/gente.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">A Gente Explica</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>A Gente Explica</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Se você é curioso e gosta de aprender, este é o seu programa! "A Gente Explica" deixa a ciência e o mundo do conhecimento ainda mais perto de você. Apresentado pelo prof. Edson Capoano, a aluna Beatriz Lancha e Marcelo Dias, o programa tem duração de 30 minutos e vai ao ar três vezes por dia.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/alpha.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">Alpha Vida</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Alpha Vida</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Todo mundo quer ter uma vida mais saudável. O que falta, muitas vezes, é informação. Por isso, o aqui trazemos professores do Mackenzie para falarem sobre qualidade de vida. Cada programa tem duração média de cinco minutos e é cheio de dicas, exercícios e informações valiosas para quem quer ter uma vida melhor.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/auto.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">Autorretrato</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Autorretrato</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Cantores compositores expõem suas idéias e falam sobre cultura, fé e espiritualidade. Com 30 minutos na grade de programação, é apresentado por Mário Valadão.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/bast.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">Bastidores</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Bastidores</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Experiente maestro Parcial Módulo traz as histórias, técnicas e conteúdo por trás dos clássicos da música mundial. Você assiste aos corais do Mackenzie enquanto aprende muito mais sobre os sons e os ritmos da nossa música. O programa é de 30 minutos e vai ao ar duas vezes por dia.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/cafe.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">Café Pensamento</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Café Pensamento</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Programa de debates e entrevistas que recebe pesquisadores acadêmicos, onde os temas abordados são relacionados à pesquisa e estudos da área academica. Apresentados pelo prof. Paulo Roberto, o programa vai ao ar duas vezes por dia e tem duração de 30 minutos.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/desac.png" width="252" height="160" />
          <title class="showTextOnHighlight">Desacordos</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Desacordos</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Temas e crenças</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/doc.png" width="252" height="160" />
          <title class="showTextOnHighlight">DOC. Oficina</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>DOC. Oficina</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Uma vitrine dos melhores documentários e videos produzidos e apresentados por alunos de jornalismo</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/escr.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">Escrita em Foco</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Escrita em Foco</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Descubra os detalhes e os segredos da sua bíblia. Aqui você conhece mais sobre as peculiadaridades históricas, geográficas e literárias do Livro Sagrado. Apresentado pelos professores João Paulo Aquino, Mauro Meister e Carlos Henrique. O programa tem duração de 30 minutos.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/familia.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">Família e Sociedade</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Família e Sociedade</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Programa de estúdio que recebe convidados para discutirem sobre temas relacionados ao comportamento, compromissos sociais, deixando clara a visão bíblica da vida em sociedade. Apresentado pelo Rev. Fernando Almeida e sua esposa, a jornalista Suênia Almeida. O programa tem duração de 30 minutos.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/flash.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">Flashes da História</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Flashes da História</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Programa que apresenta um pouco da história do presbiterianismo no Brasil e também da Universidade Mackenzie. "Flashes da História" é apresentado pelo Dr. Marcel Mendes, Vice-reitor do Mackenzie e pelo Dr. Alderi Matos. O programa tem duração de 30 minutos.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/barn.png" width="252" height="160" />
          <title class="showTextOnHighlight">Histórias do Barnabé</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Histórias do Barnabé</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Quem disse que aprender também não pode ser divertido? O ventriloco Josué Alves Ferreira traz seu grande amigo Barnabé para ensine às crianças por meio de lindas histórias, trazendo sempre um mensagem cristã.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/grego.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">Isso é Grego</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Isso é Grego</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Descubra os mitérios sobre a língua grega com este programa. Apresentado pelo professor João Paulo, com 15 minutos de duração, este programa é sempre uma novidade para os telespectadores.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/isto.png" width="252" height="160" />
          <title class="showTextOnHighlight">Isto é Mackenzie</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Isto é Mackenzie</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Aqui você vê ex-alunos da Universidade Presbiteriana Mackenzie que estão se destacando no mercado de trabalho, mackenzistas que continuam a escrever sua história mesmo depois da faculdade. Cada entrevistado conta sua trajetória: como aproveitaram bem o que a Instituição tem a oferecer, e como isso foi importante para seu sucesso profissional. O programa é de realização do Núcleo Mack Pro, um núcleo de produção universitária, em que os próprios alunos produzem conteúdo para a TV Mackenzie. Terças e Quintas às 20h.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/lider.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">Líder Cidadão</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Líder Cidadão</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Há aqueles que já nasceram com espírito de liderança, motivando as pessoas em prol de um bem comum; aqui você vê como eles conseguiram atuar de forma relevante na sociedade.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/atleta.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">Mack Atletas</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Mack Atletas</title>
              </header>
              <info>
                <description class="descriptionMaxLines">É um programa que tem assinatura da Chancelaria da Universidade Prebiteriana Mackenzie por meio de sua capela esportiva. Em parceria com a organização internacional Atletas de Cristo. Aqui compartilhamos a vida e a experiência de atletas dos mais diferentes esportes, alguns deles patrocinados pelo Mackenzie, bem como a participação de ex-atletas compartilhando suas experências.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/esporte.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">Mack Esportes</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Mack Esportes</title>
              </header>
              <info>
                <description class="descriptionMaxLines">É um programa que mostra a prática de esporte radical: como funciona, onde se prática e quais os equipamentos de segurança necessários.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/mem.png" width="252" height="160" />
          <title class="showTextOnHighlight">Projeto: Memória</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Projeto: Memória</title>
              </header>
              <info>
                <description class="descriptionMaxLines">A cada ano que passa, novos alunos entram na Universidade Presbiteriana Mackenzie, porém poucos sabem que dar um passeio pelo Campus é como dar um passeio pela história. Aqui antigos mackenzistas contam como era a Instituição em sua época.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/event.png" width="252" height="160" />
          <title class="showTextOnHighlight">Mack Eventos</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Mack Eventos</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Dentre tantos eventos realizados pela Universidade durante o ano, muitos deles são exibidos AO VIVO graças à instalação de fibra ótica interligando os à TV Mackenzie. Além da gravação para arquivo exibido na grade de programação. </description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/noticia.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">Mack Notícias</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Mack Notícias</title>
              </header>
              <info>
                <description class="descriptionMaxLines">É um programa que mostra os principais acontecimentos do Mackenzie, traz dicas e prestação de serviços. Mensalmente, o programa exibe eventos, congressos, palestras, além de inúmeros projetos sociais e pesquisas desenvolvidas pelos mackenzistas. Apresentado pela repórter Adriana Chiaradia, o programa tem aproximadamente 30 minutos de duração.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/noticia.png" width="252" height="160" />
          <title class="showTextOnHighlight">Mack Notícias</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Mack Notícias</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Fique por dentro das notícias e serviços da cidade de São Paulo por um olhar diferente. Você confere, também, as reportagens feitas em parceria com o Jornal Futura da Fundação Roberto Marinho. O programa vai ao ar com 30 minutos na grade de programação.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/movimento.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">Mackenzie em Movimento</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Mackenzie em Movimento</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Fique por dentro dos grandes temas da atualidade em matérias produzidas pela Universidade Presbiteriana Mackenzie, abordando temas sobre educação, ciência e conhecimentos gerais. Apresentado pelos repórteres Rafael Fonseca e Adriana Chiaradia. Com duração de 15 minutos, é exibido todos os domingos pela TV Bandeirantes, e diariamente pela TV Mackenzie.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/pip.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">Pipocas e Pitacos</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Pipocas e Pitacos</title>
              </header>
              <info>
                <description class="descriptionMaxLines">É um programa divertido e descontraido, apresentado pela jornalista Juliana Carreiro, traz a cada programa convidados que debatem diversos assuntos sobre cinema.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/palco.png" width="252" height="160" />
          <title class="showTextOnHighlight">Palco Mackenzie</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Palco Mackenzie</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Este é um especial usado para exibição por ocasião do Mackenzie Voluntário. Trata-se de um programa de auditório com ênfase nas ações sociais que têm o apoio da Universidade Mackenzie.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>

        <lockup>
          <img src="${this.BASEURL}images/programas/profi.png" width="252" height="160" />
          <title class="showTextOnHighlight">Os Profissionais</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Os Profissionais</title>
              </header>
              <info>
                <description class="descriptionMaxLines">O programa traz dicas, reportagens especiais e entrevistas sobre carreiras, ambientes corporativos e profissões; o dia a dia de profissionais de diversas áreas; profissões em alta no mercado; e orientação de experts pra se tornar um bom profissional. Apresentado pelo jornalista Wllyssys Wolfgang em 30 minutos, é transmitido pelo CNU(Canal Universitário – 11 na NET), pelo canal digital aberto 12/60(experimental em São Paulo-SP) e também no nosso site (mackenzie.br). </description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/res.jpg" width="252" height="160" />
          <title class="showTextOnHighlight">Re.se.nha</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Re.se.nha</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Programa de entrevistas que discute idéias sobre livros, filmes e artes em geral. Apresentado pelo Prof. Cláudio Marra e pelo repórter Rafael Fonseca. "Resenha" vai ao ar com duração de 30 minutos. </description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}images/programas/tela.png" width="252" height="160" />
          <title class="showTextOnHighlight">Tela Mackenzie</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Tela Mackenzie</title>
              </header>
              <info>
                <description class="descriptionMaxLines">Assuntos que mexem com a vida das pessoas, questões do dia a dia e temas polêmicos. Tudo isso é apresentado no Tela Mackenzie, programa de entrevistas que recebe convidados para um bate papo. Apresentado pelo jornalista Wllyssys Wolfgang em 30 minutos, é transmitido pelo CNU(Canal Universitário – 11 na NET), pelo canal digital aberto 12/60(experimental em São Paulo-SP) e também no nosso site (mackenzie.br).</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
      </section>
    </shelf>

    <shelf>
      <header>
        <title>Programetes</title>
        </header>
    <section>
      <lockup>
        <img src="${this.BASEURL}images/programetes/arena.png" width="252" height="160" />
        <title class="showTextOnHighlight">Arena</title>
        <relatedContent>
          <infoTable>
            <header>
              <title>Arena</title>
            </header>
            <info>
              <description class="descriptionMaxLines">Programete produzido e apresentado por alunos. Eles entrevistam outros alunos para descobrir o que pensam sobre cotidiano universitário, como enxergam a vida, o mundo, entre outros temas.</description>
            </info>
          </infoTable>
        </relatedContent>
      </lockup>
      <lockup>
        <img src="${this.BASEURL}images/programetes/drop.png" width="252" height="160" />
        <title class="showTextOnHighlight">Drops de Conhecimento</title>
        <relatedContent>
          <infoTable>
            <header>
              <title>Drops de Conhecimento</title>
            </header>
            <info>
              <description class="descriptionMaxLines">Programete de curiosidades, com a proposta de descobrir fatos surpreendentes sobre o mundo que nos cerca, aos quais não damos atenção no dia a dia.</description>
            </info>
          </infoTable>
        </relatedContent>
      </lockup>
      <lockup>
        <img src="${this.BASEURL}images/programetes/livro.png" width="252" height="160" />
        <title class="showTextOnHighlight">Este é o Livro</title>
        <relatedContent>
          <infoTable>
            <header>
              <title>Este é o Livro</title>
            </header>
            <info>
              <description class="descriptionMaxLines">Personalidades dão dicas de um livro interessante que tenha sido marcante em suas vidas. Não há um apresentador fixo, o que possibilita aos participantes um momento de compartilhar algo bem pessoal de maneira espontânea.</description>
            </info>
          </infoTable>
        </relatedContent>
      </lockup>
      <lockup>
        <img src="${this.BASEURL}images/programetes/mack.png" width="252" height="160" />
        <title class="showTextOnHighlight">Mackinando</title>
        <relatedContent>
          <infoTable>
            <header>
              <title>Mackinando</title>
            </header>
            <info>
              <description class="descriptionMaxLines">Tem duvidas sobre o mercado de trabalho? Como é o dia a dia a profissão? Quais as oportunidades de crescimento? "Mackinando"  traz a cada encontro um profissional diferente que mostra como é o seu cotidiano.</description>
            </info>
          </infoTable>
        </relatedContent>
      </lockup>
      <lockup>
        <img src="${this.BASEURL}images/programetes/notas.png" width="252" height="160" />
        <title class="showTextOnHighlight">Notas Musicais</title>
        <relatedContent>
          <infoTable>
            <header>
              <title>Notas Musicais</title>
            </header>
            <info>
              <description class="descriptionMaxLines">Notas Musicais</description>
            </info>
          </infoTable>
        </relatedContent>
      </lockup>
      <lockup>
        <img src="${this.BASEURL}images/programetes/palav.jpg" width="252" height="160" />
        <title class="showTextOnHighlight">Palavra Amiga</title>
        <relatedContent>
          <infoTable>
            <header>
              <title>Palavra Amiga</title>
            </header>
            <info>
              <description class="descriptionMaxLines">Programete devocional, que aborda temas variados sobre a vida e a Bíblia. "Palavra Amiga" é apresentado pelos capelães da Universidade, com duração de 5 minutos na grade de programação.</description>
            </info>
          </infoTable>
        </relatedContent>
      </lockup>
      </section>
    </shelf>
  </productBundleTemplate>
</document>`
}
