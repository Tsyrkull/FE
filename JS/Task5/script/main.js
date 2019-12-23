// window.onload = function createHTML() {
//     let newHeader = document.createElement('header'),
//         newUl = document.createElement('ul'),
//         newLi = () => document.createElement('li'),
//         fragment = document.createDocumentFragment()
//     ;
//     document.body.prepend(newHeader);
//     let headerUl = newHeader.appendChild(newUl);
//
//
//     for (let i = 0; i < 5; i++) {
//         fragment.appendChild(newLi());
//     }
//
//
//     headerUl.appendChild(fragment);
// };

window.onload = function createHTML() {
    const doc = document;
    const body = doc.body;
    const createEl = (elType) => {return doc.createElement(elType)};
    const createFragment = () =>{ return doc.createDocumentFragment() };
    const prependEl = (parrent, child) => {return parrent.prepend(child)};
    const appendEl = (parrent, child)=>{return parrent.append(child)};
    const createHeader = () => createEl('header');

    const createDiv = () => createEl('div'),
        createP = () => createEl('p'),
        createUl = () =>  createEl('ul'),
        createLi = () =>  () => createEl('li'),
        createH1 = () =>  createEl('h1'),
        createH2 = () =>  createEl('h2'),
        createH3 = () =>  createEl('h3'),
        createSection = () =>  createEl('section'),
        createArticle = () =>  createEl('article'),
        createAbbr = () =>  createEl('abbr'),
        createFooter = () =>  createEl('footer'),
        createEm = () =>  createEl('em'),
        createNav = () =>  createEl('nav'),
        createDfn = () => createEl ('dfn'),
        createSpan = ()=> createEl('span'),
        createAnchor = () => createEl('a'),
        creaateCite = () => createEl('cite'),
        createBoldEl = () => createEl('b')
    ;
    let abbrCSS = createAbbr(),
        bodyHeader = createHeader(),
        bodyHeaderH1 = createH1(),
        bodyHeaderNav = createNav(),
        bodyHeaderH2 = createH2(),
        bodyHeaderNavUl = createUl(),
        bodyArticle = createArticle(),
        articleHeader = createHeader(),
        articleHeaderH2 = createH2(),
        articleHeaderH2Abbr = createAbbr(),
        articleHeaderP = createP(),
        articleHeaderPAbbr1 = createAbbr(),
        articleHeaderPAbbr2 = createAbbr(),
        articleHeaderPDfn = createDfn(),
        articleS1 = createSection(),
        articleS1H2 = createH2(),
        articleS1P1 = createP(),
        articleS1P1Span = createSpan(),
        articleS1P1A1 = createAnchor(),
        articleS1P1A2 = createAnchor(),
        articleS1P1A2Cite = creaateCite(),
        articleS1P1A2CiteAbbr = createAbbr(),
        articleS1P1AbbrCSS = createAbbr(),
        articleS1P1AbbrK = createAbbr(),
        articleS1P1A3 = createAnchor(),
        articleS1P1A4 = createAnchor(),
        articleS1P2 = createP(),
        articleS1P2A1 = createAnchor(),
        articleS1P3 = createP(),
        articleS1P3Bold = createBoldEl(),
        articleS2 = createSection();




    appendEl(body, bodyHeader);
    appendEl(bodyHeader, bodyHeaderH1);
    bodyHeaderH1.textContent="CSS1K";
    appendEl(bodyHeader, bodyHeaderNav);
    appendEl(bodyHeaderNav, bodyHeaderH2);
    appendEl(bodyHeaderNav, bodyHeaderNavUl);

    // ======Добавить через JSON

    appendEl(body,bodyArticle);
    bodyArticle.setAttribute("role","main");
    appendEl(bodyArticle, articleHeader);
    appendEl(articleHeader,articleHeaderH2);
    appendEl(articleHeader,articleHeaderP);
    appendEl(articleHeaderH2,articleHeaderH2Abbr);
    articleHeaderH2Abbr.textContent = "CSS";
    articleHeaderH2Abbr.before("The Beauty in ");
    articleHeaderH2Abbr.after( " Design");
    appendEl(articleHeaderP, articleHeaderPAbbr1);

    articleHeaderPAbbr1.textContent = "K";
    articleHeaderPAbbr1.title = "Kibibyte";
    articleHeaderPAbbr1.before("A demonstration of what can be accomplished with only 1 ");
    articleHeaderPAbbr1.after(" (");
    appendEl(articleHeaderP, articleHeaderPDfn);
    articleHeaderPDfn.title="1024 bytes";
    articleHeaderPDfn.textContent="Kibibyte";
    articleHeaderPDfn.after(") of ");
    appendEl(articleHeaderP, articleHeaderPAbbr2);
    articleHeaderPAbbr2.textContent="CSS";
    articleHeaderP.append(". Select any design from the list to load it into this page. You can also navigate back and forth by using the left and right arrow keys.");
    articleHeader.after(articleS1);
    appendEl(articleS1, articleS1H2);
    articleS1H2.textContent = "So What is This About?";
    appendEl(articleS1, articleS1P1);
    appendEl(articleS1P1, articleS1P1Span);
    articleS1P1Span.textContent = 'a lot of';
    articleS1P1Span.id = 'zengarden-age';
    articleS1P1Span.before('Back in 2003 (that\'s ');
    articleS1P1Span.after(' years ago!) ');
    appendEl(articleS1P1, articleS1P1A1);
    articleS1P1A1.href="http://mezzoblue.com";
    articleS1P1A1.textContent="Dave Shea";
    articleS1P1A1.after(' launched the ');

    appendEl(articleS1P1,articleS1P1A2);
    articleS1P1A2.href='http://www.csszengarden.com';

    appendEl(articleS1P1A2, articleS1P1A2Cite);
    articleS1P1A2Cite.textContent = " Zen Garden";

    prependEl(articleS1P1A2Cite, articleS1P1A2CiteAbbr );
    articleS1P1A2CiteAbbr.textContent="CSS";
    articleS1P1A2.after(". It showcased what was possible with ");

    appendEl(articleS1P1, articleS1P1AbbrCSS);
    articleS1P1AbbrCSS.textContent="CSS";
    articleS1P1AbbrCSS.after("-based designs, leading to an explosion in the use of CSS on the web. Then, ");

    appendEl(articleS1P1,articleS1P1A3);
    articleS1P1A3.href="http://qfox.nl";
    articleS1P1A3.textContent = "Peter van der Zee";
    articleS1P1A3.after(" created ");
    appendEl(articleS1P1,articleS1P1A4);
    articleS1P1A4.href="http://js1k.com";
    articleS1P1A4.textContent="JS1k";
    articleS1P1A4.after(" in 2010, a competition to build cool applications with no more than 1 ");

    appendEl(articleS1P1, articleS1P1AbbrK );
    articleS1P1AbbrK.textContent="K";
    articleS1P1AbbrK.after(" of JavaScript.");


    //====================================


    appendEl(articleS1, articleS1P2);
    articleS1P2.append('A lot has happened since the Zen Garden days, and today you can do almost anything with only ');
    articleS1P2.append(abbrCSS);
    abbrCSS.textContent = " CSS ";
    articleS1P2.append('. As ');
    articleS1P2.append(abbrCSS.cloneNode(true));
    articleS1P2.append(' use is growing, so is the average ');
    articleS1P2.append(abbrCSS.cloneNode(true));
    articleS1P2.append(' file size. Popular sites have in average ');
    appendEl(articleS1P2, articleS1P2A1 );
    articleS1P2A1.href = "http://httparchive.org/interesting.php#bytesperpage";
    articleS1P2A1.textContent = "75 ";
    articleS1P2A1.append(articleS1P1AbbrK); // дописать аббревиатуру сразу с контентом.
    articleS1P2A1.append(' of ');
    articleS1P2A1.append(abbrCSS.cloneNode(true));

    articleS1P2.append(', but some use up to a megabyte of style sheets!');

    appendEl(articleS1, articleS1P3);
    articleS1P3.append('Do we need that much? ');
    articleS1P3.append(articleS1P3Bold);
    articleS1P3Bold.textContent = "CSS1K";
    articleS1P3.append(' invites you to show that web developers are more inventive than ever, and that limitations can sparkle creativity.')

};















