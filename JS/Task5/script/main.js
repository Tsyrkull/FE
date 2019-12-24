window.onload = function createHTML() {
    const doc = document;
    const body = doc.body;
    const createEl = (elType) => {
        return doc.createElement(elType)
    };
    const appendFew = (parent, ...children) => {
        for (let i = 0; i < children.length; i++) {
            parent.append(children[i])
        }
    };


    const createHeader = () => createEl('header'),
        createP = () => createEl('p'),
        createUl = () => createEl('ul'),
        createLi = () => createEl('li'),
        createH1 = () => createEl('h1'),
        createH2 = () => createEl('h2'),
        createSection = () => createEl('section'),
        createArticle = () => createEl('article'),
        createAbbr = () => createEl('abbr'),
        createFooter = () => createEl('footer'),
        createEm = () => createEl('em'),
        createNav = () => createEl('nav'),
        createDfn = () => createEl('dfn'),
        createSpan = () => createEl('span'),
        createAnchor = () => createEl('a'),
        createCite = () => createEl('cite'),
        createBoldEl = () => createEl('b'),
        createOl = () => createEl('ol'),
        createCode = () => createEl('code'),
        createScript = () => createEl('script')
    ;
    let abbrCSS = createAbbr(),
        header = createHeader(),
        headerH1 = createH1(),
        headerNav = createNav(),
        headerNavH2 = createH2(),
        headerNavUl = createUl(),
        article = createArticle(),
        articleHeader = createHeader(),
        articleHeaderH2 = createH2(),
        articleHeaderP = createP(),
        abbrKibi = createAbbr(),
        abbrKibiNoTitle = createAbbr(),
        articleHeaderPDfn = createDfn(),
        articleS1 = createSection(),
        articleS1H2 = createH2(),
        articleS1P1 = createP(),
        articleS1P1Span = createSpan(),
        articleS1P1A1 = createAnchor(),
        articleS1P1A2 = createAnchor(),
        articleS1P1A2Cite = createCite(),
        articleS1P1A3 = createAnchor(),
        articleS1P1A4 = createAnchor(),
        articleS1P2 = createP(),
        articleS1P2A1 = createAnchor(),
        articleS1P3 = createP(),
        articleS1P3Bold = createBoldEl(),
        articleS2 = createSection(),
        articleS2H2 = createH2(),
        articleS2Ol = createOl(),
        articleS2OlLi1 = createLi(),
        articleS2OlLi2 = createLi(),
        articleS2OlLi3 = createLi(),
        articleS2OlLi3Em = createEm(),
        articleS2OlLi3A = createAnchor(),
        articleS2OlLi4 = createLi(),
        articleS2OlLi4CodeData = createCode(),
        articleS2OlLi4AbbrURI = createAbbr(),
        articleS2OlLi4CodeFont = createCode(),
        articleS2OlLi4CodeImport = createCode(),
        articleS2OlLi5 = createLi(),
        articleS2OlLi5A = createAnchor(),
        articleS2OlLi6 = createLi(),
        articleS2OlLi6A = createAnchor(),
        articleS2P = createP(),
        articleS2PA = createAnchor(),
        footer = createFooter(),
        footerP = createP(),
        footerPA1 = createAnchor(),
        footerPA2 = createAnchor(),
        newArr = [
            {
                "styleName": "Default",
                "styleLink": "./",
                "styleAuthor": "Jacob Rask",
                "authorLink": "http://twitter.com/jacobrask"
            },
            {
                "styleName": "Stripes",
                "styleLink": "#stripes",
                "styleAuthor": "Vasilis van Gemert",
                "authorLink": "http://vasilis.nl"
            },
            {
                "styleName": "Notepad",
                "styleLink": "#notepad",
                "styleAuthor": "Wout Mager",
                "authorLink": "http://twitter.com/eworm_"
            },
            {
                "styleName": "Garden of CSS-3Den",
                "styleLink": "#gardenof3den",
                "styleAuthor": "Alex Walker",
                "authorLink": "http://designfestival.com"
            },
            {
                "styleName": "Bbubles",
                "styleLink": "#bbubles",
                "styleAuthor": "akella & Genn",
                "authorLink": "http://cssing.org.ua"
            },
            {
                "styleName": "Swiss",
                "styleLink": "#swiss",
                "styleAuthor": "Chris Lee",
                "authorLink": "http://chrsl.net"
            },
            {
                "styleName": "Turn around",
                "styleLink": "#turnaround",
                "styleAuthor": "Bas van Dorst",
                "authorLink": "http://www.basvandorst.nl"
            },
            {
                "styleName": "Whirl",
                "styleLink": "#whirl",
                "styleAuthor": "Vincent De Oliveira",
                "authorLink": "https://twitter.com/iamvdo"
            },
            {
                "styleName": "BundlerInspired",
                "styleLink": "#bundler_inspired",
                "styleAuthor": "PhilG",
                "authorLink": "https://github.com/PhilG"
            },
            {
                "styleName": "Oldie",
                "styleLink": "#oldie",
                "styleAuthor": "Alexander Mankuta",
                "authorLink": "http://pointlessone.org"
            },
            {
                "styleName": "Typhon",
                "styleLink": "#typhon",
                "styleAuthor": "ESWAT",
                "authorLink": "http://eswat.ca"
            },
            {
                "styleName": "Cube",
                "styleLink": "#cube",
                "styleAuthor": "Sergii Iurevych",
                "authorLink": "http://be.net/iurevych"
            },
            {
                "styleName": "Northern Lights",
                "styleLink": "#northern-lights",
                "styleAuthor": "Igor «SkAZi» Potapov",
                "authorLink": "http://potapoff.org"
            },
            {
                "styleName": "Skewed",
                "styleLink": "#skewed",
                "styleAuthor": "Paul Steffens",
                "authorLink": "http://twitter.com/sntxrrr"
            },
            {
                "styleName": "Moonlight",
                "styleLink": "#moonlight",
                "styleAuthor": "Christian \"Schepp\" Schaefer",
                "authorLink": "http://twitter.com/derSchepp"
            },
            {
                "styleName": "Typewriter",
                "styleLink": "#typewriter",
                "styleAuthor": "Lance Alton Troxel",
                "authorLink": "http://thisbythem.com"
            },
            {
                "styleName": "Old School",
                "styleLink": "#oldschool",
                "styleAuthor": "Roman Liutikov",
                "authorLink": "http://romanliutikov.com"
            },
            {
                "styleName": "Butchery",
                "styleLink": "#butchery",
                "styleAuthor": "Vibby",
                "authorLink": "http://vibby.fr"
            },
            {
                "styleName": "m6tt",
                "styleLink": "#m6tt",
                "styleAuthor": "Matt Woodfield",
                "authorLink": "http://m6tt.com"
            },
            {
                "styleName": "1024-bytes",
                "styleLink": "#1024-bytes",
                "styleAuthor": "Faisalman",
                "authorLink": "http://github.com/faisalman"
            },
            {
                "styleName": "Molokai",
                "styleLink": "#molokai",
                "styleAuthor": "Kien Nguyen",
                "authorLink": "http://designtomarkup.com"
            },
            {
                "styleName": "Android",
                "styleLink": "#android",
                "styleAuthor": "Aleksej Romanovskij",
                "authorLink": "http://agat.in"
            },
            {
                "styleName": "Bookshelf",
                "styleLink": "#bookshelf",
                "styleAuthor": "SelenIT",
                "authorLink": "https://github.com/SelenIT"
            },
            {
                "styleName": "GeoCities",
                "styleLink": "#geocities",
                "styleAuthor": "Alexey Savartsov",
                "authorLink": "https://github.com/asavartsov/"
            },
            {
                "styleName": "I'm Batman",
                "styleLink": "#imbatman",
                "styleAuthor": "Paul Reid",
                "authorLink": "#"
            },
            {
                "styleName": "Ebhoren",
                "styleLink": "#ebhoren",
                "styleAuthor": "Dominic Mercier",
                "authorLink": "http://www.dominic-mercier.com"
            },
            {
                "styleName": "Facetime",
                "styleLink": "#facetime",
                "styleAuthor": "Bernard Nijenhuis",
                "authorLink": "http://twitter.com/bnijenhuis"
            },
            {
                "styleName": "Cloudy",
                "styleLink": "#cloudy",
                "styleAuthor": "Sergey Leschina",
                "authorLink": "http://twitter.com/putnik"
            },
            {
                "styleName": "Grey Matter",
                "styleLink": "#greymatter",
                "styleAuthor": "Vadim Makeev",
                "authorLink": "http://pepelsbey.net"
            },
            {
                "styleName": "Blue square",
                "styleLink": "#blue_square",
                "styleAuthor": "Hubert Sablonnière",
                "authorLink": "http://twitter.com/hsablonniere"
            },
            {
                "styleName": "HelvetiPink",
                "styleLink": "#helvetipink",
                "styleAuthor": "Bill Keller",
                "authorLink": "http://billkeller.name"
            },
            {
                "styleName": "Summer Sun",
                "styleLink": "#summersun",
                "styleAuthor": "Tanya Peasgood",
                "authorLink": "http://twitter.com/tanya_peasgood"
            },
            {
                "styleName": "Less is More",
                "styleLink": "#lessismore",
                "styleAuthor": "Rob Balfre",
                "authorLink": "http://twitter.com/rob_balfre"
            },
            {
                "styleName": "Inset",
                "styleLink": "#inset",
                "styleAuthor": "Guillermo Latorre",
                "authorLink": "http://www.hachemuda.com"
            },
            {
                "styleName": "Legible",
                "styleLink": "#legible",
                "styleAuthor": "Reimund Trost",
                "authorLink": "http://lumens.se"
            },
            {
                "styleName": "Green Lemon",
                "styleLink": "#greenlemon",
                "styleAuthor": "Dirk Radunz",
                "authorLink": "http://twitter.com/d_radunz"
            },
            {
                "styleName": "Wired",
                "styleLink": "#wired",
                "styleAuthor": "Brett DeWoody",
                "authorLink": "http://www.digitalwaxworks.com"
            },
            {
                "styleName": "Narcissist",
                "styleLink": "#narcissist",
                "styleAuthor": "Jackie Balzer",
                "authorLink": "http://jackiebalzer.com"
            },
            {
                "styleName": "Juiz Star",
                "styleLink": "#juizstar",
                "styleAuthor": "Geoffrey Crofte",
                "authorLink": "http://www.creativejuiz.fr"
            },
            {
                "styleName": "Wolfr",
                "styleLink": "#wolfr",
                "styleAuthor": "Johan Ronsse",
                "authorLink": "http://twitter.com/wolfr_"
            },
            {
                "styleName": "fortyeight1k",
                "styleLink": "#fortyeight1k",
                "styleAuthor": "Michael Haschke",
                "authorLink": "http://michael.haschke.biz"
            },
            {
                "styleName": "Columns",
                "styleLink": "#columns",
                "styleAuthor": "Alexander Makarov",
                "authorLink": "http://rmcreative.ru"
            },
            {
                "styleName": "Trainspotting",
                "styleLink": "#trainspotting",
                "styleAuthor": "Henrique Boaventura",
                "authorLink": "http://www.hboaventura.com"
            },
            {
                "styleName": "ribbon",
                "styleLink": "#ribbon",
                "styleAuthor": "David King",
                "authorLink": "http://oodavid.com"
            },
            {
                "styleName": "Solarized",
                "styleLink": "#solarized",
                "styleAuthor": "heirenton",
                "authorLink": "http://twitter.com/heirenton"
            },
            {
                "styleName": "Open Water",
                "styleLink": "#openwater",
                "styleAuthor": "Gilmore Davidson",
                "authorLink": "https://github.com/gilmoreorless"
            },
            {
                "styleName": "HTML5 Colors",
                "styleLink": "#html5colors",
                "styleAuthor": "Michael Garrett Jones",
                "authorLink": "http://www.theweblife.com"
            },
            {
                "styleName": "heart css",
                "styleLink": "#heart_css",
                "styleAuthor": "Choy Kum Jin",
                "authorLink": "https://github.com/kjchoy"
            },
            {
                "styleName": "Sourcy",
                "styleLink": "#sourcy",
                "styleAuthor": "Roman Komarov",
                "authorLink": "http://kizu.ru/en/"
            },
            {
                "styleName": "Terminal",
                "styleLink": "#terminal",
                "styleAuthor": "Mikhail Korepanov",
                "authorLink": "http://twitter.com/PanyaKor"
            },
            {
                "styleName": "Goodnight Moon",
                "styleLink": "#goodnight_moon",
                "styleAuthor": "Dethe Elza",
                "authorLink": "http://livingcode.org"
            },
            {
                "styleName": "Fancy",
                "styleLink": "#fancy",
                "styleAuthor": "Michele Cipriani",
                "authorLink": "http://www.trustweb.it"
            },
            {
                "styleName": "Text Levels",
                "styleLink": "#textlevels",
                "styleAuthor": "Patrick Mann",
                "authorLink": "http://www.patrickmann.com"
            },
            {
                "styleName": "Yelo",
                "styleLink": "#yelo",
                "styleAuthor": "Bart de Bruin",
                "authorLink": "http://bartdebruin.nl"
            },
            {
                "styleName": "Spartan",
                "styleLink": "#spartan",
                "styleAuthor": "Trent Mick",
                "authorLink": "http://trentm.com"
            },
            {
                "styleName": "paper",
                "styleLink": "#paper",
                "styleAuthor": "Daniel Rauber",
                "authorLink": "http://daniel-rauber.de"
            },
            {
                "styleName": "Lúcuma",
                "styleLink": "#lucuma",
                "styleAuthor": "Germán Martínez",
                "authorLink": "http://twitter.com/germanmartinez"
            },
            {
                "styleName": "Fresh Soda",
                "styleLink": "#freshsoda",
                "styleAuthor": "Jan Ortgies",
                "authorLink": "http://jungundwillich.de"
            },
            {
                "styleName": "Ev",
                "styleLink": "#ev",
                "styleAuthor": "Mathieu Rochette",
                "authorLink": "http://evangeneer.net"
            },
            {
                "styleName": "B4y & A11y",
                "styleLink": "#b4ya11y",
                "styleAuthor": "Benoit Klein",
                "authorLink": "http://twitter.com/etBen"
            },
            {
                "styleName": "Adaptype",
                "styleLink": "#adaptype",
                "styleAuthor": "Vasilis van Gemert",
                "authorLink": "http://vasilis.nl"
            },
            {
                "styleName": "BleuBleu",
                "styleLink": "#bleubleu",
                "styleAuthor": "Leighton Rodney",
                "authorLink": "http://www.leightonrodney.com"
            },
            {
                "styleName": "Simpl",
                "styleLink": "#simpl",
                "styleAuthor": "Neofyt",
                "authorLink": "http://www.neofyt.com"
            },
            {
                "styleName": "Mitchiru",
                "styleLink": "#mitchiru",
                "styleAuthor": "Michael Fritz",
                "authorLink": "http://banquo.de"
            },
            {
                "styleName": "Casoy",
                "styleLink": "#casoy",
                "styleAuthor": "Robert Boloc",
                "authorLink": "http://twitter.com/robertboloc"
            },
            {
                "styleName": "The Simple Swede",
                "styleLink": "#thesimpleswede",
                "styleAuthor": "Tobias Akeblom",
                "authorLink": "http://www.tobiasphoto.com"
            },
            {
                "styleName": "PhotoBox",
                "styleLink": "#photobox",
                "styleAuthor": "Stinkyink",
                "authorLink": "http://stinkyinkshop.co.uk"
            },
            {
                "styleName": "Desktop",
                "styleLink": "#desktop",
                "styleAuthor": "Webmolot",
                "authorLink": "http://webmolot.com"
            },
            {
                "styleName": "Monochrome",
                "styleLink": "#monochrome",
                "styleAuthor": "Tamer Aydin",
                "authorLink": "http://tamerayd.in"
            },
            {
                "styleName": "Expandable",
                "styleLink": "#expandable",
                "styleAuthor": "Dennis Madvedovsky",
                "authorLink": "http://twitter.com/curlybrace"
            },
            {
                "styleName": "BlueBrush",
                "styleLink": "#bluebrush",
                "styleAuthor": "Jenny Hao",
                "authorLink": "https://twitter.com/jennyhao"
            },
            {
                "styleName": "Notice Board",
                "styleLink": "#noticeboard",
                "styleAuthor": "Nihar Sawant",
                "authorLink": "http://www.about.me/niharsawant"
            },
            {
                "styleName": "Triangulate",
                "styleLink": "#triangulate",
                "styleAuthor": "Sebastien Paquet",
                "authorLink": "http://jumplinkdesign.co.vu"
            },
            {
                "styleName": "AAPL",
                "styleLink": "#aapl",
                "styleAuthor": "Joffrey Jaffeux",
                "authorLink": "http://twitter.com/joffreyjaffeux"
            },
            {
                "styleName": "Yollaw",
                "styleLink": "#yollaw",
                "styleAuthor": "Yan Ivanov",
                "authorLink": "http://franzose.in"
            },
            {
                "styleName": "Stretchy",
                "styleLink": "#stretchy",
                "styleAuthor": "Denis Koltsov",
                "authorLink": "http://twitter.com/mistadikay"
            },
            {
                "styleName": "smile",
                "styleLink": "#smile",
                "styleAuthor": "Michael Scharnagl",
                "authorLink": "http://twitter.com/realmuecke"
            },
            {
                "styleName": "Toolbar",
                "styleLink": "#toolbar",
                "styleAuthor": "Maxim Chervonny",
                "authorLink": "http://chervonny.ru/en/"
            },
            {
                "styleName": "Round Rect",
                "styleLink": "#roundrect",
                "styleAuthor": "Edwin Martin",
                "authorLink": "http://www.bitstorm.org"
            },
            {
                "styleName": "The Rhythm",
                "styleLink": "#therhythm",
                "styleAuthor": "Roman Komarov",
                "authorLink": "http://kizu.ru/en/"
            },
            {
                "styleName": "SimpleBox",
                "styleLink": "#simplebox",
                "styleAuthor": "Rael Max",
                "authorLink": "http://raelmax.com"
            },
            {
                "styleName": "Crawl",
                "styleLink": "#crawl",
                "styleAuthor": "Bram de Haan",
                "authorLink": "http://atelierbramdehaan.nl"
            }],
        addScript1 = createScript(),
        addScript2 = createScript();


    appendFew(body, header, article, footer, addScript1, addScript2);
    headerH1.textContent = "CSS1K";
    appendFew(header, headerH1, headerNav);
    appendFew(headerNav, headerNavH2, headerNavUl);

    headerNavH2.textContent = "Select a design";

    for (let i = 0; i < newArr.length; i++) {


        let navUlLiA1 = createAnchor(),
            navUlLiA2 = createAnchor(),
            newLi = createLi();

        navUlLiA1.textContent = newArr[i].styleName;
        navUlLiA1.href = newArr[i].styleLink;
        navUlLiA2.textContent = newArr[i].styleAuthor;
        navUlLiA2.href = newArr[i].authorLink;

        appendFew(newLi, navUlLiA1, navUlLiA2);
        headerNavUl.append(newLi);
    }


    article.setAttribute("role", "main");
    appendFew(article, articleHeader, articleS1, articleS2);


    appendFew(articleHeader, articleHeaderH2, articleHeaderP);

    abbrCSS.textContent = "CSS";
    abbrKibi.textContent = "K";
    abbrKibi.title = "Kibibyte";
    abbrKibiNoTitle.textContent = "K";


    articleHeaderH2.append(("The Beauty in "), abbrCSS, (" Design"));


    appendFew(articleHeaderP, ("A demonstration of what can be accomplished with only 1 "), abbrKibi, (" ("), articleHeaderPDfn, (") of "), (abbrCSS.cloneNode(true)), (". Select any design from the list to load it into this page. You can also navigate back and forth by using the left and right arrow keys."));


    articleHeaderPDfn.title = "1024 bytes";
    articleHeaderPDfn.textContent = "Kibibyte";


    appendFew(articleS1, articleS1H2, articleS1P1);
    articleS1H2.textContent = "So What is This About?";

    appendFew(articleS1P1, ("Back in 2003 (that's "), articleS1P1Span, (' years ago!) '), articleS1P1A1, (' launched the '), articleS1P1A2, (". It showcased what was possible with "), (abbrCSS.cloneNode(true)), ("-based designs, leading to an explosion in the use of CSS on the web. Then, "), articleS1P1A3, (" created "), articleS1P1A4, (" in 2010, a competition to build cool applications with no more than 1 "), abbrKibiNoTitle, (" of JavaScript."));

    articleS1P1Span.textContent = 'a lot of';
    articleS1P1Span.id = 'zengarden-age';

    articleS1P1A1.href = "http://mezzoblue.com";
    articleS1P1A1.textContent = "Dave Shea";

    articleS1P1A2.href = 'http://www.csszengarden.com';

    articleS1P1A2.append(articleS1P1A2Cite);


    appendFew(articleS1P1A2Cite, (abbrCSS.cloneNode(true)), (" Zen Garden"));


    articleS1P1A3.href = "http://qfox.nl";
    articleS1P1A3.textContent = "Peter van der Zee";

    articleS1P1A4.href = "http://js1k.com";
    articleS1P1A4.textContent = "JS1k";


    //====================================


    appendFew(articleS1, articleS1P2, articleS1P3);

    appendFew(articleS1P2, ('A lot has happened since the Zen Garden days, and today you can do almost anything with only '), (abbrCSS.cloneNode(true)), ('. As '), (abbrCSS.cloneNode(true)), (' use is growing, so is the average '), (abbrCSS.cloneNode(true)), (' file size. Popular sites have in average '));


    appendFew(articleS1P2, articleS1P2A1, (', but some use up to a megabyte of style sheets!'));
    articleS1P2A1.href = "http://httparchive.org/interesting.php#bytesperpage";
    articleS1P2A1.textContent = "75 ";

    appendFew(articleS1P2A1, (abbrKibiNoTitle.cloneNode(true)), (' of '), (abbrCSS.cloneNode(true)));
    articleS1P3Bold.textContent = "CSS1K";
    appendFew(articleS1P3, ('Do we need that much? '), articleS1P3Bold, (' invites you to show that web developers are more inventive than ever, and that limitations can sparkle creativity.'));


    appendFew(articleS2, articleS2H2, articleS2Ol, articleS2P);
    articleS2H2.textContent = "Participation";

    appendFew(articleS2Ol, articleS2OlLi1, articleS2OlLi2, articleS2OlLi3, articleS2OlLi4, articleS2OlLi5, articleS2OlLi6);
    appendFew(articleS2OlLi1, ("Submissions must consist of only "), (abbrCSS.cloneNode(true)));
    appendFew(articleS2OlLi2, ("Submissions may be up to 1 "), abbrKibi.cloneNode(true), (" (1024 bytes) minified"));
    articleS2OlLi3Em.textContent = "not";
    appendFew(articleS2OlLi3, ("Vendor prefixes are "), articleS2OlLi3Em, (" counted to the total number of bytes – submit your code unprefixed and "), articleS2OlLi3A, (" will add necesssary prefixes"));
    articleS2OlLi3A.textContent = "PrefixFree";
    articleS2OlLi3A.href = "https://leaverou.github.io/prefixfree/";

    appendFew(articleS2OlLi4, ("Any external resources and images, including "), articleS2OlLi4CodeData, (" "), articleS2OlLi4AbbrURI, ("'s, "), articleS2OlLi4CodeFont, (" and "), articleS2OlLi4CodeImport, ("'s, are forbidden"));
    articleS2OlLi4CodeData.textContent = "data";
    articleS2OlLi4AbbrURI.textContent = "URI";
    articleS2OlLi4CodeFont.textContent = "@font-face";
    articleS2OlLi4CodeImport.textContent = "@import";

    appendFew(articleS2OlLi5, ("The page "), articleS2OlLi5A, (" have to look the same in every browser, but graceful degradation is encouraged"));
    articleS2OlLi5A.textContent = "does not";
    articleS2OlLi5A.href = "http://dowebsitesneedtolookexactlythesameineverybrowser.com";
    appendFew(articleS2OlLi6, ("The submitted code is licensed under the "), articleS2OlLi6A);
    articleS2OlLi6A.textContent = "MIT License";
    articleS2OlLi6A.href = "http://www.opensource.org/licenses/mit-license.php";

    appendFew(articleS2P, ("To participate, fork "), articleS2PA, (" at GitHub and send your submission as a pull request. You are free to update your style at any time by sending a new pull request. Please specify the name of the style, your own name, and a URL you want us to link to (such as your homepage)."));
    articleS2PA.textContent = "CSS1K";
    articleS2PA.href = "https://github.com/selfthinker/CSS1K/";

    footer.append(footerP);
    appendFew(footerP, ("Licensed under the "), footerPA1, (". Hosted and managed at "), footerPA2, ("."));
    footerPA1.textContent = "MIT license";
    footerPA1.href = "http://www.opensource.org/licenses/mit-license.php";
    footerPA1.rel = "license";
    footerPA2.textContent = "GitHub";
    footerPA2.href = "https://github.com/selfthinker/CSS1K";

    addScript1.src = "https://code.jquery.com/jquery-3.1.0.min.js";
    addScript2.src = "js/switcher.js";

};

















