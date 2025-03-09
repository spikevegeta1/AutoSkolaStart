// Separate question pools
const crossroadsQuestions = [
    { id: "cx1", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["zaustaviću se ispred raskrsnice", "propustiću vozilo koje skreće lijevo i nastaviti kretanje", "nastaviću kretanje pravo"], answer: "zaustaviću se ispred raskrsnice", image: "Images/1.png", points: 3 },
    { id: "cx2", text: "U situaciji prikazanoj na slici dužni ste da postupate:", type: "radio", options: ["po uključenom svijetlu na semaforu", "po vertikalnoj saobraćajnoj signalizaciji", "po znaku koji daje ovlašćeni policijski službenik"], answer: "po znaku koji daje ovlašćeni policijski službenik", image: "Images/1.png", points: 4 },
    { id: "cx3", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["nastaviću kretanje pravo ne propuštajući vozilo 1", "propustiću vozilo 1 i nastaviti kretanje", "ubrzaću kretanje i prije vozila 1 proći kroz raskrsnicu"], answer: "propustiću vozilo 1 i nastaviti kretanje", image: "Images/2.png", points: 3 },
    { id: "cx4", text: "Znak izričite naredbe u situaciji kao na slici ima značenje:", type: "radio", options: ["ukrštanje sa putem sa prvenstvom prolaza", "prvenstvo u odnosu na vozila iz suprotnog smjera", "obavezno zaustavljanje"], answer: "ukrštanje sa putem sa prvenstvom prolaza", image: "Images/2.png", points: 4 },
    { id: "cx5", text: "Kako ćete postupiti u situaciji prikazanoj na slici, ako sa vozilom 2 zadržavate pravac kretanja:", type: "radio", options: ["nastaviću kretanje bez propuštanja vozila", "nastaviću kretanje uz propuštanje samo vozila 1", "nastaviću kretanje uz propuštanje vozila 3 i 4"], answer: "nastaviću kretanje uz propuštanje vozila 3 i 4", image: "Images/3.png", points: 3 },
    { id: "cx6", text: "U situaciji prikazanoj na slici redoslijed prolaska vozila je:", type: "radio", options: ["1234", "3214", "3421"], answer: "3421", image: "Images/3.png", points: 3 },
    { id: "cx7", text: "Ako je biciklista ušao u raskrsnicu na crveno svijetlo na semaforu u smjeru svog kretanja, kao na slici:", type: "radio", options: ["propisno vrši radnju prolaska kroz raskrsnicu", "nepropisno jer treba da gura biciklo pored sebe", "nepropisno vrši radnju prolaska kroz raskrsnicu"], answer: "nepropisno vrši radnju prolaska kroz raskrsnicu", image: "Images/4.png", points: 4 },
    { id: "cx8", text: "U situaciji prikazanoj na slici biciklista prelazi kolovoz na:", type: "radio", options: ["obilježenoj biciklističkoj stazi", "obilježenoj biciklističkoj traci", "obilježenoj razdjelnoj liniji pješačkog prelaza"], answer: "obilježenoj biciklističkoj stazi", image: "Images/4.png", points: 3 },
    { id: "cx9", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["propustiću putničko vozilo 3 i nastaviti kretanje", "propustiću tramvaj 2 i nastaviti kretanje", "propustiću tramvaj 2 i putničko vozilo 3, pa nastaviti kretanje"], answer: "propustiću putničko vozilo 3 i nastaviti kretanje", image: "Images/5.png", points: 4 },
    { id: "cx10", text: "Redoslijed prolaska vozila kroz raskrsnicu je:", type: "radio", options: ["321", "312", "231"], answer: "312", image: "Images/5.png", points: 3 },
    { id: "cx11", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["nastaviću kretanje pravo", "nastaviću kretanje pravo uz propuštanje vozila 4 i 5", "zaustaviću vozilo"], answer: "zaustaviću vozilo", image: "Images/6.png", points: 4 },
    { id: "cx12", text: "U prikazanoj situaciji vozilo 2 će:", type: "radio", options: ["se zaustaviti i propustiti vozilo 1", "nastaviti kretanje ulijevo bez propuštanja vozila 1", "se zaustaviti zbog znaka koji daje ovlašćeno lice"], answer: "nastaviti kretanje ulijevo bez propuštanja vozila 1", image: "Images/6.png", points: 3 },
    { id: "cx13", text: "U situaciji prikazanoj na slici prvenstvo prolaza ima:", type: "radio", options: ["vozilo 1 u odnosu na vozilo 2", "vozilo 2 u odnosu na vozilo 1", "vozilo 1 zbog pravila desne strane"], answer: "vozilo 2 u odnosu na vozilo 1", image: "Images/7.png", points: 4 },
    { id: "cx14", text: "U situaciji prikazanoj na slici redoslijed prolaska vozila regulisan je:", type: "radio", options: ["pravilom propuštanja vozila sa desne strane", "pravilom propuštanja vozila sa lijeve strane", "vertikalnim saobraćajnim znakom"], answer: "vertikalnim saobraćajnim znakom", image: "Images/7.png", points: 3 },
    { id: "cx15", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["propustiću vozilo koje skreće ulijevo", "nastaviću kretanje pravo jer imam prvenstvo prolaza", "zaustaviću se ispred raskrsnice zbog znaka STOP"], answer: "nastaviću kretanje pravo jer imam prvenstvo prolaza", image: "Images/8.png", points: 4 },
    { id: "cx16", text: "U situaciji prikazanoj na slici postupićete po:", type: "radio", options: ["saobraćajnom znaku STOP", "značenju svjetlosnih znakova na semaforu", "saobraćajnom pravilu ulaska u neregulisanu raskrsnicu"], answer: "značenju svjetlosnih znakova na semaforu", image: "Images/8.png", points: 3 },
    { id: "cx17", text: "U situaciji prikazanoj na slici redoslijed prolaska vozila je:", type: "radio", options: ["123", "312", "132"], answer: "132", image: "Images/9.png", points: 3 },
    { id: "cx18", text: "U situaciji prikazanoj na slici redoslijed prolaska kroz raskrsnicu je regulisan:", type: "radio", options: ["saobraćajnim znakom", "pravilom propuštanja vozila sa desne strane", "horizontalnim oznakama"], answer: "saobraćajnim znakom", image: "Images/9.png", points: 3 },
    { id: "cx19", text: "U situaciji prikazanoj na slici prilikom skretanja ulijevo treba da:", type: "radio", options: ["nastavim kretanje bez propuštanja vozila 2, 3 i 4", "propustim vozila 3 i 4", "propustim vozila 2, 3 i 4"], answer: "propustim vozila 2, 3 i 4", image: "Images/10.png", points: 4 },
    { id: "cx20", text: "U situaciji prikazanoj na slici strelice na kolovozu (bijele boje)obilježavaju:", type: "radio", options: ["liniju usmjeravanja", "obavezan smjer samo za putnička vozila", "obavezan smjer kretanja"], answer: "obavezan smjer kretanja", image: "Images/10.png", points: 3 },
    { id: "cx21", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["nastaviću kretanje pravo bez propuštanja tramvaja", "nastaviću kretanje pravo nakon propuštanja tramvaja", "uz povećanu opreznost nastaviću kretanje pravo"], answer: "nastaviću kretanje pravo bez propuštanja tramvaja", image: "Images/11.png", points: 4 },
    { id: "cx22", text: "U situaciji prikazanoj na slici redoslijed prolaska kroz raskrsnicu je regulisan:", type: "radio", options: ["vertikalnom signalizacijom", "primjenom pravila desne strane", "primjenom pravila prvenstva prolaza"], answer: "vertikalnom signalizacijom", image: "Images/11.png", points: 3 },
    { id: "cx23", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["zaustaviću se ispred raskrsnice i propustiti vozilo 2", "nastaviću kretanje pravo uz povećanu pažnju", "nastaviću kretanje pravo bez propuštanja vozila 2"], answer: "zaustaviću se ispred raskrsnice i propustiti vozilo 2", image: "Images/12.png", points: 4 },
    { id: "cx24", text: "U situaciji prikazanoj na slici dopunska tabla označava:", type: "radio", options: ["nailazak na obilaznicu", "da se krećem po putu sa prvenstvom prolaza", "spajanje sa putem sa prvenstvom prolaza"], answer: "spajanje sa putem sa prvenstvom prolaza", image: "Images/12.png", points: 3 },
    { id: "cx25", text: "U situaciji kao na slici, kada prolazite pored vozila 2 koje se kreće iz suprotnog smjera je radnja:", type: "radio", options: ["obilaženja", "mimoilaženja", "preticanja"], answer: "mimoilaženja", image: "Images/13.png", points: 3 },
    { id: "cx26", text: "U situaciji prikazanoj na slici:", type: "radio", options: ["nastaviću kretanje pravo ne propuštajući pješaka", "ubrzaću kretanje vozila i proći ispred pješaka", "zaustaviću se i propustiti pješaka"], answer: "zaustaviću se i propustiti pješaka", image: "Images/13.png", points: 4 },
    { id: "cx27", text: "U situaciji prikazanoj na slici:", type: "radio", options: ["smijem preticati", "ne smijem preticati", "smijem preticati zbog oznaka na kolovozu"], answer: "ne smijem preticati", image: "Images/14.png", points: 3 },
    { id: "cx28", text: "U situaciji prikazanoj na slici neisprekidana uzdužna linija uz desnu ivicu kolovoza označava:", type: "radio", options: ["ivicu kolovoza", "ivičnu liniju", "razdjelnu liniju"], answer: "ivičnu liniju", image: "Images/14.png", points: 4 },
    { id: "cx29", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["zaustaviću se ispred raskrsnice", "propustiću vozila iz suprotnog smjera pa nastaviti kretanje", "nastaviću kretanje ne propuštajući vozila iz suprotnog smjera"], answer: "propustiću vozila iz suprotnog smjera pa nastaviti kretanje", image: "Images/15.png", points: 3 },
    { id: "cx30", text: "U situaciji prikazanoj na slici biciklisti se kreću:", type: "radio", options: ["nepropisno, jer su napravili kolonu", "nepropisno, jer ne nose prsluk sa reflektujućim osobinama", "propisno"], answer: "propisno", image: "Images/15.png", points: 4 },
    { id: "cx31", text: "U situaciji kao na slici:", type: "radio", options: ["nastaviću kretanje desno", "zaustaviću se ispred raskrsnice", "nastaviću kretanje pravo"], answer: "zaustaviću se ispred raskrsnice", image: "Images/16.png", points: 3 },
    { id: "cx32", text: "U situaciji prikazanoj na slici postupićete po:", type: "radio", options: ["svjetlosnom saobraćajnom znaku", "vertikalnom saobraćajnom znaku", "horizontalnim oznakama"], answer: "svjetlosnom saobraćajnom znaku", image: "Images/16.png", points: 4 },
    { id: "cx33", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["nastaviću kretanje pravo", "zaustaviću vozilo", "nastaviću kretanje lijevo nakon prouštanja vozila 2 i 3"], answer: "zaustaviću vozilo", image: "Images/20.png", points: 3 },
    { id: "cx34", text: "U situaciji prikazanoj na slici policijsko vozilo:", type: "radio", options: ["može da nastavi kretanje pravo", "mora da se zaustavi", "može da nastavi kretanje u bilo kojem pravcu"], answer: "mora da se zaustavi", image: "Images/20.png", points: 4 },
    { id: "cx35", text: "U situaciji prikazanoj na slici vozač:", type: "radio", options: ["vozilo 1 treba da propusti vozilo 2", "vozilo 2 treba da ubrza kretanje i prođe ispred vozila 1", "vozilo 2 treba da propusti vozilo 1"], answer: "vozilo 2 treba da propusti vozilo 1", image: "Images/17.png", points: 3 },
    { id: "cx36", text: "U situaciji prikazanoj na slici vozilo 1:", type: "radio", options: ["ne smije da se zaustavi ili parkira", "smije da se zaustavi", "smije da se zaustavi ili parkira"], answer: "ne smije da se zaustavi ili parkira", image: "Images/17.png", points: 4 },
    { id: "cx37", text: "U situaciji prikazanoj na slici:", type: "radio", options: ["putničko vozilo 1 ima dozvoljen prolaz", "vozila 2, 3 i 4 imaju dozvoljen prolaz", "samo policijsko vozilo 4 ima dozvoljen prolaz"], answer: "putničko vozilo 1 ima dozvoljen prolaz", image: "Images/18.png", points: 3 },
    { id: "cx38", text: "U situaciji prikazanoj na slici policijsko vozilo 4:", type: "radio", options: ["može da nastavi kretanje pravo", "mora da se zaustavi", "može da nastavi kretanje pravo nakon prolaska vozila 1"], answer: "mora da se zaustavi", image: "Images/18.png", points: 4 },
    { id: "cx39", text: "Kako ćete postupiti u situaciji prikazanoj na slici, ako upravljate vozilom 1:", type: "radio", options: ["nakon propuštanja vozila 2 moram skrenuti udesno", "imam prvenstvo prolaza u odnosu na vozilo 2" ,"zaustaviću se ispred raskrsnice i propustiti sva vozila"], answer: "imam prvenstvo prolaza u odnosu na vozilo 2", image: "Images/19.png", points: 3 },
    { id: "cx40", text: "Obavezan smjer u desno, u situaciji na slici, odnosi se:", type: "radio", options: ["na teretna i priključna vozila", "na sva vozila osim teretna" ,"na teretna vozila"], answer: "na teretna vozila", image: "Images/19.png", points: 4 },
    { id: "cx41", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["nastaviću kretanje pravo kroz raskrsnicu", " zaustaviću se ispred raskrnice i propustiti vozilo 2" ,"zaustaviću se ispred raskrsnice i propustiti vozilo 3"], answer: "nastaviću kretanje pravo kroz raskrsnicu", image: "Images/21.png", points: 3 },
    { id: "cx42", text: "U situaciji prikazanoj na slici redoslijed prolaska vozila kroz raskrsnicu je:", type: "radio", options: ["231", "123" ,"312"], answer: "123", image: "Images/21.png", points: 3 },
    { id: "cx43", text: "Kako ćete postupiti u sitaciji prikazanoj na slici, ako vozila zadržavaju pravac kretanja, a upravljate sa vozilom 2:", type: "radio", options: ["nastaviću kretanje bez propuštanja vozila", "nastaviću kretanje nakon propuštanja samo vozila 3 i 4" ,"nastaviću kretanje uz propuštanje vozila 1"], answer: "nastaviću kretanje bez propuštanja vozila", image: "Images/22.png", points: 4 },
    { id: "cx44", text: "U situaciji na slici kada vozila zadržavaju pravac kretanja redoslijed prolaska vozila je:", type: "radio", options: ["1423", "2134" ,"3421"], answer: "2134", image: "Images/22.png", points: 3 },
    { id: "cx45", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["nastaviću kretanje ulijevo bez zaustavljanja kroz raskrsnicu", "zaustaviću se ispred raskrsnice" ,"nastaviću kretanje pravo kroz raskrsnicu"], answer: "zaustaviću se ispred raskrsnice", image: "Images/23.png", points: 4 },
    { id: "cx46", text: "U situaciji prikazanoj na slici upaljeno žuto svijetlo na semaforu znači:", type: "radio", options: ["zabranu prolaza samo pravo", "slobodan prolaz samo pravo" ,"zabranu prolaza kroz raskrsnicu"], answer: "zabranu prolaza kroz raskrsnicu", image: "Images/23.png", points: 3 },
    { id: "cx47", text: "Kako ćete postupiti u situaciji prikazanoj na slici, kada policijski službenik bočno ispruženih ruku i tijelom okrenutim prema vozilima 2 i 3 reguliše saobraćaj:", type: "radio", options: ["propustiću samo vozila 2 i 3", "propustiću samo vozilo 4 i nastvaiti kretanja" ,"nastaviću kretanje bez propuštanja vozila 2, 3 i 4"], answer: "nastaviću kretanje bez propuštanja vozila 2, 3 i 4", image: "Images/24.png", points: 4 },
    { id: "cx48", text: "U situaciji prikazanoj na slici redoslijed prolaska vozila kojima je dozvoljen prolazak je:", type: "radio", options: ["23", "41" ,"14"], answer: "14", image: "Images/24.png", points: 3 },
    { id: "cx49", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["nastaviću kretanje bez propuštanja vozila", "neću propustiti vozilo 3" ,"propustiću vozila 2 i 3"], answer: "propustiću vozila 2 i 3", image: "Images/25.png", points: 4 },
    { id: "cx50", text: "U situaciji prikazanoj na slici sa vozilom 4 se:", type: "radio", options: ["mimoilazim sa desne strane", "mimoilazim sa lijeve strane" ,"obilazim sa desne strane"], answer: "mimoilazim sa desne strane", image: "Images/25.png", points: 3 },
    { id: "cx51", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["zaustaviću se ispred raskrsnice zbog znaka STOP", "mnastaviću kretanje, jer zadržavam pravac" ,"zaustaviću se ispred raskrsnice zbog svijetla na semaforu"], answer: "zaustaviću se ispred raskrsnice zbog svijetla na semaforu", image: "Images/26.png", points: 4 },
    { id: "cx52", text: "U situaciji prikazanoj na slici prolazak kroz raskrsnicu regulisan je:", type: "radio", options: ["svjetlosnim saobraćajnim znakom", "pravilom desne strane" ,"saobraćajnim znakom"], answer: "svjetlosnim saobraćajnim znakom", image: "Images/26.png", points: 3 },
    { id: "cx53", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["nastaviću kretanje pravo jer zadržavam pravac kretanja", "nastaviću kretanje pravo jer ne radi semafor" ,"zaustaviću se ispred raskrsnice"], answer: "zaustaviću se ispred raskrsnice", image: "Images/27.png", points: 4 },
    { id: "cx54", text: "U situaciji prikazanoj na slici dužni ste da postupate:", type: "radio", options: ["po saobraćajnim znacima", "po semaforu" ,"po pravilu propuštanja vozila samo sa desne strane"], answer: "po saobraćajnim znacima", image: "Images/27.png", points: 3 },
    { id: "cx55", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["propustiću samo vozila koja dolaze sa desne strane", "propustiću samo vozila sa lijeve strane" ,"zaustaviću vozilo"], answer: "zaustaviću vozilo", image: "Images/28.png", points: 4 },
    { id: "cx56", text: "U situaciji prikazanoj na slici redoslijed prolaska vozila kojima je dozvoljen prolazak je:", type: "radio", options: ["43", "21" ,"24"], answer: "43", image: "Images/28.png", points: 3 },
    { id: "cx57", text: "U situaciji prikazanoj na slici vozač vozila 1 treba da:", type: "radio", options: ["nastavi kretanje bez propuštanja vozila 2", "se zaustavi i nakon propuštanja vozila 2 nastavi kretanje" ,"se zaustavi i prestroji u desnu saobraćajnu traku"], answer: "se zaustavi i nakon propuštanja vozila 2 nastavi kretanje", image: "Images/29.png", points: 4 },
    { id: "cx58", text: "U situaciji prikazanoj na slici vozač vozila 1 postupiće po:", type: "radio", options: ["pravilu mimoilaženja vozila različitih kategorija", "pravilu propuštanja vozila sa desne strane" ,"vertikalnoj i horizontalnoj saobraćajnoj signalizaciji"], answer: "vertikalnoj i horizontalnoj saobraćajnoj signalizaciji", image: "Images/29.png", points: 3 },
    { id: "cx59", text: "U situaciji prikazanoj na slici:", type: "radio", options: ["treba da nastavim kretanje ulijevo", "mogu izvršti prestrojavanje u desnu traku" ,"bez prestrojavanja nastaviću kretanje pravo"], answer: "mogu izvršti prestrojavanje u desnu traku", image: "Images/30.png", points: 4 },
    { id: "cx60", text: "U prikazanoj situaciji strelice na kolovozu obelježavaju:", type: "radio", options: ["obavezan smjer kretanja ulijevo", "namjenu saobraćajnih traka" ,"obavezan smjer kretanja udesno"], answer: "namjenu saobraćajnih traka", image: "Images/30.png", points: 3 },
    { id: "cx61", text: "U raskrsnici kao na slici:", type: "radio", options: ["nijesam dužan da propustim vozila u kružnom toku", "dužan sam da propustim samo vozila koja mi dolaze sa desne strane" ,"dužan sam da propustim sva vozila koja se kreću u kružnom toku"], answer: "dužan sam da propustim sva vozila koja se kreću u kružnom toku", image: "Images/31.png", points: 4 },
    { id: "cx62", text: "U situaciji prikazanoj na slici teretno vozilo 2:", type: "radio", options: ["propisno skreće udesno putanjom a", "nepropisno skreće udesno" ,"propisno skreće udesno putanjom b"], answer: "nepropisno skreće udesno", image: "Images/31.png", points: 3 },
    { id: "cx63", text: "Kako ćete postupiti u sitaciji prikazanoj na slici:", type: "radio", options: ["zaustaviću se ispred raskrsnice i propustiti vozila 4 i 2", "zaustaviću se ispred raskrsnice i propustiti sva vozila" ,"propisno skreće udesno putanjom b"], answer: "zaustaviću se ispred raskrsnice i propustiti vozila 4 i 2", image: "Images/32.png", points: 4 },
    { id: "cx64", text: "U situaciji prikazanoj na slici redoslijed prolaska vozila kroz raskrsnicu je:", type: "radio", options: ["1234", "3241" ,"4213"], answer: "4213", image: "Images/32.png", points: 3 },
    { id: "cx65", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["propustiću vozilo 2 i nastaviti kretanje ulijevo", "nastaviću kretanje ulijevo ne propuštajući vozilo 2" ,"ubrzaću kretanje vozila i proći ispred vozila"], answer: "propustiću vozilo 2 i nastaviti kretanje ulijevo", image: "Images/33.png", points: 4 },
    { id: "cx66", text: "U situaciji prikazanoj na slici vozilo 2 se kreće:", type: "radio", options: ["propisno putanjom a", "propisno putanjom b" ,"propisno bliže desnoj ivici kolovoza"], answer: "propisno putanjom b", image: "Images/33.png", points: 3 },
    { id: "cx67", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["nastaviću kretanje pravo kroz raskrsnicu", "zaustaviću se ispred raskrsnice pa nastaviti kretanje pravo" ,"nastaviću kretanje u lijevo kroz raskrsnicu"], answer: "nastaviću kretanje u lijevo kroz raskrsnicu", image: "Images/34.png", points: 4 },
    { id: "cx68", text: "U situaciji prikazanoj na slici strelice na kolovozu označavaju:", type: "radio", options: ["obavezan smjer", "namjenu saobraćajnih traka" ,"putokaz"], answer: "obavezan smjer", image: "Images/34.png", points: 3 },
    { id: "cx69", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["nastaviću kretanje ulijevo nakon propuštanja vozila 3", "nastaviću kretanje ulijevo bez propuštanja vozila 2 i 3" ,"zaustaviću se i propustiti vozila 2 i 3"], answer: "nastaviću kretanje ulijevo nakon propuštanja vozila 3", image: "Images/35.png", points: 4 },
    { id: "cx70", text: "U situaciji prikazanoj na slici redoslijed prolaska vozila je:", type: "radio", options: ["123", "321" ,"312"], answer: "312", image: "Images/35.png", points: 3 },
    { id: "cx71", text: "U situaciji prikazanoj na slici vozilo:", type: "radio", options: ["1 treba da nastavi kretanje bez propuštanja vozila 2", "2 treba da propusti vozilo 1 i nastavi kretanje" ,"1 treba da propusti vozilo 2 pa da nastavi kretanje"], answer: "1 treba da propusti vozilo 2 pa da nastavi kretanje", image: "Images/36.png", points: 4 },
    { id: "cx72", text: "U situaciji prikazanoj na slici vozač vozila 1 postupiće po:", type: "radio", options: ["pravilu propuštanja vozila samo sa desne strane", "pravilu prolaska kroz neregulisanu raskrsnicu" ,"saobraćajnom znakom"], answer: "saobraćajnom znakom", image: "Images/36.png", points: 3 },
    { id: "cx73", text: "Kako ćete postupiti u sledećoj situaciji:", type: "radio", options: ["nastaviću kretanje pravo bez propuštanja tramvaja", "nastaviću kretanje pravo nakon propuštanja tramvaja" ,"zaustaviću se i propustiti tramvaj"], answer: "nastaviću kretanje pravo bez propuštanja tramvaja", image: "Images/37.png", points: 4 },
    { id: "cx74", text: "U situaciji prikazanoj na slici prolazak vozila kroz raskrsnicu je regulisan:", type: "radio", options: ["vertikalnom saobraćajnom signalizacijom", "prednošću prolaska šinskog vozila" ,"pravilom propuštanja vozila samo sa desne strane"], answer: "vertikalnom saobraćajnom signalizacijom", image: "Images/37.png", points: 3 },
    { id: "cx75", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["nastaviću kretanje pravo jer imam prvenstvo prolaza", "nastaviću kretanje smanjenom brzinom" ,"zaustaviću se ispred raskrsnice i propustiti vozila iz suprotnog smjera"], answer: "zaustaviću se ispred raskrsnice i propustiti vozila iz suprotnog smjera", image: "Images/38.png", points: 4 },
    { id: "cx76", text: "U situaciji prikazanoj na slici dužni ste da postupate po:", type: "radio", options: ["svjetlosnoj saobraćajnoj signalizaciji", "vertikalnoj saobraćajnoj signalizaciji" ,"pravilu propuštanja vozila sa desne strane"], answer: "vertikalnoj saobraćajnoj signalizaciji", image: "Images/38.png", points: 4 },
    { id: "cx77", text: "U situaciji prikazanoj na slici redoslijed prolaska vozila kroz raskrsnicu je:", type: "radio", options: ["123", "213" ,"312"], answer: "123", image: "Images/39.png", points: 3 },
    { id: "cx78", text: "U raskrsnici sa kružnim tokom saobraćaja, kretanje vozila vrši se:", type: "radio", options: ["u bilo kojem smjeru", "u smjeru kazaljke na satu" ,"u suprotnom smjeru kazaljke na satu"], answer: "u suprotnom smjeru kazaljke na satu", image: "Images/39.png", points: 4 },
    { id: "cx79", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["zaustaviću se i propustiti vozilo 3", "nastaviću kretanje pravo iza vozila 2" ,"smanjiću brzinu kretanja i propustiti vozilo 3"], answer: "nastaviću kretanje pravo iza vozila 2", image: "Images/40.png", points: 3 },
    { id: "cx80", text: "U situaciji prikazanoj na slici vučno vozilo 3 je tegljač, a vučeno vozilo je:", type: "radio", options: ["prikolica", "laka prikolica" ,"poluprikolica"], answer: "poluprikolica", image: "Images/40.png", points: 4 },
    { id: "cx81", text: "U situaciji prikazanoj na slici, putničko vozilo 1 skreće ulijevo, a traktor 2 zadržava pravac kretanja. Prvenstvo prolaza ima:", type: "radio", options: ["traktor 2 jer ima uključeno žuto rotaciono svijetlo", "traktor 2 jer zadržava pravac kretanja" ,"putničko vozilo 1"], answer: "putničko vozilo 1", image: "Images/41.png", points: 3 },
    { id: "cx82", text: "Za vrijeme kretanja na traktoru se može nalaziti:", type: "radio", options: ["vozač i jedno lice", "samo vozač" ,"vozač i dva lica"], answer: "samo vozač", image: "Images/41.png", points: 4 },
    { id: "cx83", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["nastaviću kretanje pravo kroz raskrnicu jer, je na semaforu zeleno svijetlo", "neću ući u raskrsnicu zbog gustine saobraćaja" ,"nastaviću kretanje udesno kroz raskrnicu"], answer: "neću ući u raskrsnicu zbog gustine saobraćaja", image: "Images/42.png", points: 3 },
    { id: "cx84", text: "U situaciji prikazanoj na slici:", type: "radio", options: ["smijem da vršim polukružno okretanje", "smijem da se zaustavim u raskrsnici" ,"ne smijem da vršim polukružno okretanje vozila"], answer: "ne smijem da vršim polukružno okretanje vozila", image: "Images/42.png", points: 4 },
    { id: "cx85", text: "Vozač putničkog vozila u situaciji kao na slici, treba da:", type: "radio", options: ["nastavi kretanje u lijevo bez propuštanja teretnog vozila", "nastavi kretanje pravo bez propuštanja teretnog vozila" ,"se zaustavi ispred raskrsnice i propusti teretno vozilo"], answer: "se zaustavi ispred raskrsnice i propusti teretno vozilo", image: "Images/43.png", points: 3 },
    { id: "cx86", text: "U situaciji prikazanoj na slici vozač putničkog vozila postupiće po:", type: "radio", options: ["vertikalnoj saobraćajnoj signalizaciji", " pravilu propuštanja vozila sa desne strane" ,"pravilu propuštanja vozila veće kategorije"], answer: "vertikalnoj saobraćajnoj signalizaciji", image: "Images/43.png", points: 4 },
    { id: "cx87", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["zaustaviću vozilo i propustiti pješake", "nastaviću kretanje ne propuštajući pješake" ,"sirenom ću upozoriti pješake i nastaviti kretanje"], answer: "zaustaviću vozilo i propustiti pješake", image: "Images/44.png", points: 3 },
    { id: "cx88", text: "U situaciji prikazanoj na slici poprečne oznake na kolovozu označavaju:", type: "radio", options: ["pješački prelaz", "pješačko ostrvo" ,"stazu za pješake"], answer: "pješački prelaz", image: "Images/44.png", points: 4 },
    { id: "cx89", text: "U situaciji prikazanoj na slici treba da:", type: "radio", options: ["nastavim kretanje desnom saobraćajnom trakom", "izvršim preticanje policijskog vozila" ,"zaustavim vozilo"], answer: "zaustavim vozilo", image: "Images/45.png", points: 4 },
    { id: "cx90", text: "Znak koji daje ovlašćeni policijski službenik:", type: "radio", options: ["obavezujući je za sve učesnike u saobraćaju", "ne obavezuje kada se daje iz vozila" ,"obavezujući je samo za bicikliste"], answer: "obavezujući je za sve učesnike u saobraćaju", image: "Images/45.png", points: 4 },
    { id: "cx91", text: "U situaciji prikazanoj na slici vozilo 1 pretiče biciklistu:", type: "radio", options: ["nepropisno, jer prelazi u suprotnu saobraćajnu traku", "nepropisno, jer ugrožava biciklistu" ,"propisno"], answer: "propisno", image: "Images/46.png", points: 3 },
    { id: "cx92", text: "Vozač vozila 1 nakon preticanja dužan je:", type: "radio", options: ["da nastavi kretanje saobraćajnom trakom kojom je vršio preticanje", "da se vrati u svoju saobraćajnu traku i nastavi kretanje" ,"da nastavi kretanje uz lijevu ivicu kolovoza"], answer: "da se vrati u svoju saobraćajnu traku i nastavi kretanje", image: "Images/46.png", points: 4 },
    { id: "cx93", text: "U situaciji prikazanoj na slici brže kretanje vozila kojim upravljaš od vozila 1 i 2:", type: "radio", options: ["je radnja preticanja vozila", "je radnja obilaženja vozila" ,"ne smatra se radnjom preticanja vozila"], answer: "ne smatra se radnjom preticanja vozila", image: "Images/47.png", points: 4 },
    { id: "cx94", text: "U situaciji prikazanoj na slici vozila 1 i 2, koja se kreću jedno iza drugog:", type: "radio", options: ["čine kolonu vozila i ne smiju se preticati", "čine kolonu vozila i smiju se preticati" ,"ne čine kolonu vozila"], answer: "ne čine kolonu vozila", image: "Images/47.png", points: 4 },
    { id: "cx95", text: "Na poziciji prikazanoj na slici vozila 1, 2, 3 i 4:", type: "radio", options: ["ne smiju da se zaustave ili parkiraju", "smiju da se zaustave, ali ne i da se parkiraju" ,"smiju da se zaustave i parkiraju"], answer: "ne smiju da se zaustave ili parkiraju", image: "Images/48.png", points: 3 },
    { id: "cx96", text: "Vozač auto-taksi prevoza na ulazu, odnosno izlazu iz garaže:", type: "radio", options: ["ne smije da se zaustavi", "smije da se zaustavi samo za ulazak ili izlazak putnika" ,"smije da se parkira najviše 15 minuta"], answer: "smije da se zaustavi samo za ulazak ili izlazak putnika", image: "Images/48.png", points: 4 },
    { id: "cx97", text: "Radnja u kojoj se vozila 1 i 2 kreću suprotnim smjerovima kao na slici je:", type: "radio", options: ["ukrštanje", "obilaženje" ,"mimoilaženje"], answer: "mimoilaženje", image: "Images/49.png", points: 3 },
    { id: "cx98", text: "Teret na vozilu 2 prelazi 1,5 m najistureniju tačku na prednjoj strani vozila, a to je:", type: "radio", options: ["dozvoljeno", "dozvoljeno, ali mora biti označeno crvenom tablom" ,"nije dozvoljeno"], answer: "nije dozvoljeno", image: "Images/49.png", points: 4 },
    { id: "cx99", text: "U situaciji prikazanoj na slici:", type: "radio", options: ["ubrzaćeš kretanje kako ne bi ometao pješake", "nećeš propustiti pješake, jer nisu na tvojoj saobraćajnoj traci" ,"zaustavićeš vozilo i propustiti pješake"], answer: "zaustavićeš vozilo i propustiti pješake", image: "Images/50.png", points: 3 },
    { id: "cx100", text: "U situaciji prikazanoj na slici oznake na kolovozu znače da se u blizini pješačkog prelaza nalazi:", type: "radio", options: ["zona škole", "putokaz do škole" ,"dio kolovoza namijenjen za parkiranje školskog autobusa"], answer: "zona škole", image: "Images/50.png", points: 4 },
    { id: "cx101", text: "U situaciji prikazanoj na slici, na dijelu kolovoza za dvosmjerni saobraćaj vozilo 2:", type: "radio", options: ["smije da vrši preticanje", "smije da vrši preticanje, ako ne ometa vozila iz suprotnog smjera" ,"ne smije da vrši preticanje"], answer: "ne smije da vrši preticanje", image: "Images/51.png", points: 3 },
    { id: "cx102", text: "U situaciji prikazanoj na slici razdjelna linija označava:", type: "radio", options: ["zabranu prelaženja i gaženja preko ove linije", "dio kolovoza gdje je dozvoljeno gaženje ove linije" ,"dio kolovoza gdje je dozvoljeno prelaženje preko ove linije"], answer: "zabranu prelaženja i gaženja preko ove linije", image: "Images/51.png", points: 4 },
    { id: "cx103", text: "U situaciji kao na slici vozilo 1 je:", type: "radio", options: ["propisno parkirano", "propisno zaustavljeno" ,"nepropisno zaustavljeno ili parkirano"], answer: "nepropisno zaustavljeno ili parkirano", image: "Images/52.png", points: 3 },
    { id: "cx104", text: "Na ulazu-izlazu iz dvorišta vozač:", type: "radio", options: ["smije da zaustavi vozilo", "ne smije da se zaustavi ili parkira vozilo" ,"smije da parkira vozilo"], answer: "ne smije da se zaustavi ili parkira vozilo", image: "Images/52.png", points: 4 },
    { id: "cx105", text: "U situaciji prikazanoj na slici, biciklista se kreće:", type: "radio", options: ["propisno, jer nema biciklističku traku", "nepropisno" ,"propisno uz lijevu ivicu kolovoza"], answer: "nepropisno", image: "Images/53.png", points: 3 },
    { id: "cx106", text: "U situaciji prikazanoj na slici vozilo 1 je:", type: "radio", options: ["propisno zaustavljeno", "propisno zaustavljeno ili parkirano" ,"nepropisno zaustavljeno ili parkirano"], answer: "nepropisno zaustavljeno ili parkirano", image: "Images/53.png", points: 4 },
    { id: "cx107", text: "Kako ćete postupiti u situaciji kao na slici:", type: "radio", options: ["nastaviću kretanje pravo bez propuštanja putničkog vozila 2", "propustiću putničko vozulo 2 jer mi dolazi sa desne strane" ,"pomjeriću vozilo ka lijevoj ivici kolovoza"], answer: "nastaviću kretanje pravo bez propuštanja putničkog vozila 2", image: "Images/54.png", points: 3 },
    { id: "cx108", text: "Vozač vozila 2 prilikom skretanja ulijevo u situaciji kao na slici će:", type: "radio", options: ["nastaviti kretanje bez propuštanja vozila koja se kreću putem na koji on nailazi", "nastaviti kretanje jer ima prednost u odnosu na vozilo 1" ,"zaustaviti vozilo i propustiti sva vozila koja se kreću putem na koji on nailazi"], answer: "zaustaviti vozilo i propustiti sva vozila koja se kreću putem na koji on nailazi", image: "Images/54.png", points: 4 },
    { id: "cx109", text: "U situaciji prikazanoj na slici:", type: "radio", options: ["ne smijem preticati zbog oznaka na kolovozu", "smijem preticati" ,"smijem preticati ako ne prelazim u traku za suprotan smjer"], answer: "smijem preticati", image: "Images/55.png", points: 3 },
    { id: "cx110", text: "U situaciji prikazanoj na slici, na putu van naselja, brzina kojom možete da pretičete:", type: "radio", options: ["nije ograničena", "je do 80 km/h" ,"je do 20 km/h više od ograničenja"], answer: "je do 80 km/h", image: "Images/55.png", points: 4 },
    { id: "cx111", text: "U situaciji prikazanoj na slici, putničko vozilo 3 uključiće se sa parkinga na kolovoz:", type: "radio", options: ["nakon propuštanja putničkog vozila 2", "bez propuštanja putničkog vozila 2" ,"bez obaveze prema drugim učesnicima u saobraćaju"], answer: "nakon propuštanja putničkog vozila 2", image: "Images/56.png", points: 3 },
    { id: "cx112", text: "Kako ćete postupiti u situaciji prikazanoj na slici:", type: "radio", options: ["zaustaviću se ispred rasksnice i propustiti pješake", "zvučnim signalom ću upozoriti pješake i nastaviti kretanje" ,"ubrzaću kretanje kako bih prošao prije pješaka"], answer: "zaustaviću se ispred rasksnice i propustiti pješake", image: "Images/56.png", points: 4 },
    { id: "cx113", text: "Vozilo 1 u situaciji prikazanoj na slici kreće se:", type: "radio", options: ["nepropisno", "propisno sredinom kolovoza" ,"propisno, jer je lijeva saobraćajna traka zauzeta vozilom 1"], answer: "nepropisno", image: "Images/57.png", points: 3 },
    { id: "cx114", text: "U situaciji kao na slici putničko vozilo 2:", type: "radio", options: ["smije da se zaustavi ili parkira", "smije da se zaustavi" ,"ne smije da se zaustavi ili parkira"], answer: "ne smije da se zaustavi ili parkira", image: "Images/57.png", points: 4 },
    { id: "cx115", text: "U situaciji prikazanoj na slici:", type: "radio", options: ["smijem izvršiti preticanje putničkog vozila", "ne smijem, jer je kolovoz u lijevoj krivini" ,"ne smijem, jer je oznakama na kolovozu zabranjeno"], answer: "smijem izvršiti preticanje putničkog vozila", image: "Images/58.png", points: 4 },
    { id: "cx116", text: "U situaciji prikazanoj na slici razdjelna isprekidana linija:", type: "radio", options: ["razdvaja kolovoz i ne smije se prelaziti preko nje", "razdvaja kolovoz i smije se gaziti i prelaziti preko nje" ,"razdavaja kolovoznu traku i ne smije se prelaziti preko nje"], answer: "razdvaja kolovoz i smije se gaziti i prelaziti preko nje", image: "Images/58.png", points: 3 },
    { id: "cx117", text: "Kako ćete postupiti u situaciji kao na slici, kad vas pretiče putničko vozilo 2:", type: "radio", options: ["povećaću brzinu kretanja", "pomjeriću vozilo ka desnoj ivici kolovoza" ,"pomjeriću vozilo ka lijevoj ivici kolovoza"], answer: "pomjeriću vozilo ka desnoj ivici kolovoza", image: "Images/59.png", points: 4 },
    { id: "cx118", text: "Znak izričite naredbe prikazan na slici važi:", type: "radio", options: ["do prve raskrsnice", "do prvog znaka obavještenja" ,"do prvog znaka opasnosti"], answer: "do prve raskrsnice", image: "Images/59.png", points: 3 },
    { id: "cx119", text: "U situaciji prikazanoj na slici vozač teretnog vozila 1 treba da:", type: "radio", options: ["ubrza vozilo i nastavi kretanje ne propuštajuči pješake", "propusti samo pješaka označenog sa a i nastavi kretanje" ,"zaustavi se i propusti sve pješake"], answer: "zaustavi se i propusti sve pješake", image: "Images/60.png", points: 4 },
    { id: "cx120", text: "U situaciji prikazanoj na slici vozač teretnog vozila 1 neposredno nakon prolaska pješačkog prelaza:", type: "radio", options: ["smije da se zaustavi ili parkira", "smije da se zaustavi" ,"ne smije da se zaustavi ili parkira"], answer: "ne smije da se zaustavi ili parkira", image: "Images/60.png", points: 3 },
    { id: "cx121", text: "U poziciji prikazanoj na slici putničko vozilo 1 je:", type: "radio", options: ["propisno zaustavljeno", "propisno zaustavljeno ili parkirano" ,"nepropisno zaustavljeno ili parkirano"], answer: "nepropisno zaustavljeno ili parkirano", image: "Images/61.png", points: 4 },
    { id: "cx122", text: "Na slici prikazani znak obavještenja je:", type: "radio", options: ["udaljenost parkinga", "vremensko ograničenje parkiranja" ,"parking samo u određenom vremenu"], answer: "vremensko ograničenje parkiranja", image: "Images/61.png", points: 3 },
    { id: "cx123", text: "U situaciji kao na slici putničko vozilo 1:", type: "radio", options: ["smije da se parkira", "ne smije da se zaustavi ili parkira" ,"smije da se zaustavi"], answer: "smije da se zaustavi", image: "Images/62.png", points: 3 },
    { id: "cx124", text: "Na kom odstojanju od obilježenog pješačkog prelaza vozač smije da se zaustavi ili parkira:", type: "radio", options: ["najmanje 10 metara", "najmanje 5 metara" ,"najmanje 7 metra"], answer: "najmanje 5 metara", image: "Images/62.png", points: 4 },
    { id: "cx125", text: "U situaciji prikazanoj na slici vozilo 2 kreće se:", type: "radio", options: ["propisno, ako ne ometa vozila iz suprotnog smjera", "propisno" ,"nepropisno"], answer: "nepropisno", image: "Images/63.png", points: 3 },
    { id: "cx126", text: "U situaciji prikazanoj na slici vozač vozila 2 treba da:", type: "radio", options: ["se kreće što bliže razdjelnoj liniji", "se kreće što bliže desnoj ivici kolovoza" ,"se kreće po sredini saobraćajne trake"], answer: "se kreće što bliže desnoj ivici kolovoza", image: "Images/63.png", points: 4 },
    { id: "cx127", text: "U situaciji kao na slici:", type: "radio", options: ["nastaviću kretanje lijevo kroz raskrsnicu", "nastaviću kretanje desno kroz raskrsnicu" ,"nastaviću kretanje pravo kroz raskrsnicu"], answer: "nastaviću kretanje pravo kroz raskrsnicu", image: "Images/64.png", points: 3 },
    { id: "cx128", text: "Horizontalne oznake na kolovozu znače:", type: "radio", options: ["namjenu saobraćajnih traka", "obavezan smjer" ,"linije usmjeravanja"], answer: "obavezan smjer", image: "Images/64.png", points: 4 },
    { id: "cx129", text: "U situaciji prikazanoj na slici kroz raskrnicu proći ćete:", type: "radio", options: ["putanjom 1 bez propuštanja pješaka", "putanjom 2 nakon propuštanja pješaka" ,"putanjom 1 nakon propuštanja pješaka"], answer: "putanjom 1 nakon propuštanja pješaka", image: "Images/65.png", points: 3 },
    { id: "cx130", text: "U situaciji kao na slici vozilo 3:", type: "radio", options: ["smije da se zaustavi", "ne smije da se zaustavli ili parkira" ,"smije da se zaustavi ili parkira"], answer: "ne smije da se zaustavli ili parkira", image: "Images/65.png", points: 4 },
    { id: "cx131", text: "Putničko vozilo 2 kao na slici:", type: "radio", options: ["ne smije da se zaustavi ili parkira", "smije da se zaustavi i parkira" ,"smije da se zaustavi"], answer: "ne smije da se zaustavi ili parkira", image: "Images/66.png", points: 4 },
    { id: "cx132", text: "U situaciji prikazanoj na slici:", type: "radio", options: ["ne smijem da se zaustavim ili parkiram", "smijem da se zaustavim ili parkiram" ,"ne smijem da se parkiram"], answer: "smijem da se zaustavim ili parkiram", image: "Images/66.png", points: 3 },
    { id: "cx133", text: "U situaciji prikazanoj na slici vozilo 1 pretiče biciklistu:", type: "radio", options: ["propisno, jer je uključen lijevi pokazivač pravca", "propisno, jer nema znaka za zabranu preticanja" ,"nepropisno zbog prelaska preko neisprekidane linije"], answer: "nepropisno zbog prelaska preko neisprekidane linije", image: "Images/67.png", points: 4 },
    { id: "cx134", text: "Biciklista u situaciji na slici u naselju kreće se:", type: "radio", options: ["nepropisno, jer treba da se kreće trotoarom", "nepropisno, jer treba da nosi zaštitnu kacigu" ,"propisno uz desnu ivicu kolovoza"], answer: "propisno uz desnu ivicu kolovoza", image: "Images/67.png", points: 3 },
    { id: "cx135", text: "U situaciji na slici, vozim teretno vozilo sa prikolicom i mimoilazim se sa teretnim vozilom 2, zbog nedovoljne širine kolovoza za bezbjedno mimoilažnje:", type: "radio", options: ["treba da se zaustavi teretno vozilo 2 i omogući meni prolaz", "treba da se zaustavim i omogućim prolazak teretn vozilu 2" ,"treba da se zaustavimo i dogovorimo o redoslijedu prolaska"], answer: "treba da se zaustavi teretno vozilo 2 i omogući meni prolaz", image: "Images/68.png", points: 4 },
    { id: "cx136", text: "Saobraćajni znak na slici znači:", type: "radio", options: ["da je kolovoz u nizbrdici do 6%", "da je poprečni nagib kolovoza do 6%" ,"da je kolovoz u usponu do 6%"], answer: "da je kolovoz u usponu do 6%", image: "Images/68.png", points: 3 },
    { id: "cx137", text: "Kako ćete postupiti u situaciji kao na slici, kada se vozilo 2 uključuje sa zemljanog puta na kolovoz:", type: "radio", options: ["prestrojiću se u lijevu kolovoznu traku, kako ne bih ometao vozača vozila 2 da se uključi na kolovoz", "nastaviću kretanje pravo bez propuštanja vozila 2" ,"zaustaviću se i omogućiti uključenje vozila 2 jer mi dolazi sa desne strane"], answer: "nastaviću kretanje pravo bez propuštanja vozila 2", image: "Images/69.png", points: 4 },
    { id: "cx138", text: "U situaciji kao na slici saobraćajni znak važi do:", type: "radio", options: ["prevoja kolovoza", "narednog znaka ograničenja brzine" ,"prve raskrsnice"], answer: "prve raskrsnice", image: "Images/69.png", points: 3 },
    { id: "cx139", text: "U situaciji prikazanoj na slici teretno vozilo 2 je:", type: "radio", options: ["zaustavljeno propisno", "parkirano ili zaustavljeno nepropisno" ,"parkirano ili zaustavljeno propisno"], answer: "parkirano ili zaustavljeno nepropisno", image: "Images/70.png", points: 3 },
    { id: "cx140", text: "U situaciji prikazanoj na slici prolazeći pored vozila 2 vršiš radnju:", type: "radio", options: ["mimoilaženja", "prestrojavanja" ,"obilaženja"], answer: "obilaženja", image: "Images/70.png", points: 4 },
    { id: "cx141", text: "U situaciji prikazanoj na slici na putu za saobraćaj u oba smjera vozač vozila 1 smije da koristi:", type: "radio", options: ["obje kolovozne trake", "desnu kolovoznu traku" ,"lijevu kolovoznu traku"], answer: "desnu kolovoznu traku", image: "Images/71.png", points: 3 },
    { id: "cx142", text: "U situaciji prikazanoj na slici vozač vozila 1 u podvožnjaku:", type: "radio", options: ["smije da se parkira", "ne smije da se zaustavi ili parkira" ,"smije da se zaustavi uz desnu ivicu kolovoza"], answer: "ne smije da se zaustavi ili parkira", image: "Images/71.png", points: 4 },
    { id: "cx143", text: "U situaciji prikazanoj na slici vozilo 1:", type: "radio", options: ["smije da se pretiče", "ne smije da se pretiče zbog oznaka na kolovozu" ,"ne smije da se pretiče sa lijeve strane"], answer: "smije da se pretiče", image: "Images/72.png", points: 3 },
    { id: "cx144", text: "U situaciji prikazanoj na slici oznake na kolovozu znače:", type: "radio", options: ["dozvoljeno preticanje iz suprotnog smjera", "dozvoljeno preticanje u smjeru kretanja" ,"dozvoljeno preticanje samo teretnih vozila"], answer: "dozvoljeno preticanje u smjeru kretanja", image: "Images/72.png", points: 4 },
    { id: "cx145", text: "U situaciji prikazanoj na slici:", type: "radio", options: ["nijesam dužan da propustim pješaka", "dužan sam da uključim sirenu i nastavim kretanje" ,"dužan sam da propustim pješaka"], answer: "dužan sam da propustim pješaka", image: "Images/73.png", points: 3 },
    { id: "cx146", text: "Da bi pješak prešao kolovoz na pješačkom prelazu na bezbjedan način, kao na slici:", type: "radio", options: ["dužan je da podigne ruku, pa stupi na pješački prelaz", "nije dužan da se uvjeri da ometa ostale učesnike" ,"dužan je da se uvjeri da time ne ometa ostale učesnike"], answer: "dužan je da se uvjeri da time ne ometa ostale učesnike", image: "Images/73.png", points: 4 },
    { id: "cx147", text: "Vozilo 1 u poziciji prikazanoj na slici je:", type: "radio", options: ["parkirano propisno", "nepropisno zaustavljeno ili parkirano" ,"propisno zaustavljeno ili parkirano"], answer: "nepropisno zaustavljeno ili parkirano", image: "Images/74.png", points: 4 },
    { id: "cx148", text: "Vozilo 1 u situaciji prikazanoj na slici je:", type: "radio", options: ["na saobraćajnoj traci u smjeru kretanja", "na saobraćajnoj traci za suprotan smjer kretanja" ,"na obilježenom parking mjestu"], answer: "na saobraćajnoj traci za suprotan smjer kretanja", image: "Images/74.png", points: 3 },
    { id: "cx149", text: "U situaciji prikazanoj na slici vozila uz desnu ivicu kolovoza su:", type: "radio", options: ["nepropisno zaustavljena ili parkirana", "propisno zaustavljena ili parkirana", "zaustavljena propisno"], answer: "nepropisno zaustavljena ili parkirana", image: "Images/75.png", points: 4 },
    { id: "cx150", text: "Uzdužna neisprekidana bijela linija, u situaciji kao na slici, označava:", type: "radio", options: ["ivicu kolovoza", "razdjelnu liniju", "ivičnu liniju"], answer: "razdjelnu liniju", image: "Images/75.png", points: 3 },
    { id: "cx151", text: "U situaciji prikazanoj na slici putničko vozilo 2:", type: "radio", options: ["polukružno se okreće u skladu sa propisima", "propisno skreće ulijevo", "nepropisno se polukružno okreće"], answer: "nepropisno se polukružno okreće", image: "Images/76.png", points: 4 },
    { id: "cx152", text: "Uzdužna neisprekidana linija dijeli kolovoz:", type: "radio", options: ["na kolovozne trake", "na saobraćajne trake", "na dva kolovoza"], answer: "na kolovozne trake", image: "Images/76.png", points: 3 },
    { id: "cx153", text: "U situaciji prikazanoj na slici biciklista se:", type: "radio", options: ["nepropisno kreće jer treba da gura biciklo pored sebe", "propisno kreće", "nepropisno kreće pješačkim prelazom"], answer: "propisno kreće", image: "Images/77.png", points: 4 },
    { id: "cx154", text: "U situaciji prikazanoj na slici, crvene široke uzdužne linije preko pješačkog prelaza označavaju:", type: "radio", options: ["biciklističke staze", "biciklističke trake", "staze za trčanje pješaka"], answer: "biciklističke trake", image: "Images/77.png", points: 3 },
    { id: "cx155", text: "U situaciji prikazanoj na slici:", type: "radio", options: ["nastaviću kretanje ne propuštatjući pješake", "usporiću kretanje vozila i propustiti pješake", "ubrzaću kretanje vozila da bih prošao ispred pješaka"], answer: "usporiću kretanje vozila i propustiti pješake", image: "Images/78.png", points: 4 },
    { id: "cx156", text: "U situaciji prikazanoj na slici, kada pješaci prelaze kolovoz dužni su da:", type: "radio", options: ["kolovoz prelaze najkraćim putem", "kolovoz prelaze gdje je najmanje učesnika u saobraćaju", "kolovoz prelaze što sporije"], answer: "kolovoz prelaze najkraćim putem", image: "Images/78.png", points: 3 },
    { id: "cx157", text: "U situaciji prikazanoj na slici policijsko vozilo 2 je:", type: "radio", options: ["propisno zaustavljeno ili parkirano", "nepropisno parkirano", "nepropisno zaustavljeno ili parkirano"], answer: "propisno zaustavljeno ili parkirano", image: "Images/79.png", points: 4 },
    { id: "cx158", text: "U situaciji prikazanoj na slici:", type: "radio", options: ["ne smijem da se zaustavim ili parkiram iza vozila 2", "smijem da se zaustavim ili parkiram iza vozila 2", "smijem da se parkiram pored vozila 2"], answer: "ne smijem da se zaustavim ili parkiram iza vozila 2", image: "Images/79.png", points: 3 },
    { id: "cx159", text: "U situaciji kao na slici vozač vozila 1:", type: "radio", options: ["smije da se zaustavi ili parkira", "ne smije da se zaustavi ili parkira", "ne smije da se parkira, a smije da se zaustavi"], answer: "ne smije da se zaustavi ili parkira", image: "Images/80.png", points: 4 },
    { id: "cx160", text: "Na odstojanju manjem od pet metara ispred ili iza obilježenog pješačkog prelaza vozač sa vozilom:", type: "radio", options: ["smije da se zaustavi", "smije da se zaustavi ili parkira", "ne smije da se zaustavi ili parkira"], answer: "ne smije da se zaustavi ili parkira", image: "Images/80.png", points: 3 },

];

const signsQuestions = [
    { id: "sg1", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["biciklistički prelaz", "staza za bicikliste", "biciklisti na putu"], answer: "biciklisti na putu", image: "Images/81.jpg", points: 3 },
    { id: "sg2", text: "Na slici su prikazani saobraćajni znaci koji označavaju:", type: "radio", options: ["zabrana zaustavljanja", "zabrana zaustavljanja i parkiranja", "zabrana parkiranja"], answer: "zabrana zaustavljanja i parkiranja", image: "Images/82.jpg", points: 3 },
    { id: "sg3", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["obavezan smjer", "put sa jednosmjernim saobraćajem", "dozvoljeni smjer"], answer: "put sa jednosmjernim saobraćajem", image: "Images/83.jpg", points: 3 },
    { id: "sg4", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["zabrana saobraćaja za vozila čija ukupna masa ne prelazi određenu masu na znaku", "zabrana soabraćaja za vozila čija nosivost prelazi određenu masu na znaku", "zabrana saobraćaja za vozila čija ukupna masa prelazi određenu masu na znaku"], answer: "zabrana saobraćaja za vozila čija ukupna masa prelazi određenu masu na znaku", image: "Images/84.jpg", points: 3 },
    { id: "sg5", text: "Na slici su prikazani saobraćajni znaci koji označavaju: ", type: "radio", options: ["obavezan smjer u naznačenom vremenu", "obavezno skretanje ulijevo u naznačenom vremenu", "obavezno skretanje ulijevo u periodu od 8 časova pa do 18 časova"], answer: "obavezan smjer u naznačenom vremenu", image: "Images/85.png", points: 3 },
    { id: "sg6", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["biciklistička traka", "biciklistička staza", "traka za kretanje biciklista"], answer: "biciklistička staza", image: "Images/87.jpg", points: 3 },
    { id: "sg7", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["zabrana zaustavljanja vozila", "zaustavljena vozila na putu", "kolona zaustavljenih vozila"], answer: "kolona zaustavljenih vozila", image: "Images/88.jpg", points: 3 },
    { id: "sg8", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["Andrejin krst sa jednim i po kolosjekom", "Andrejin krst sa dva ili više kolosjeka", "Andrejin kolosjek sa jednim ili više kolosjeka"], answer: "Andrejin krst sa dva ili više kolosjeka", image: "Images/89.jpg", points: 3 },
    { id: "sg9", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["opasna dionica puta", "opasnost na putu", "opasnost od odrona u dužini od 300 m"], answer: "opasna dionica puta", image: "Images/90.jpg", points: 3 },
    { id: "sg10", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["prvenstvo prolaza u odnosu na vozila iz suprotnog smjera", "vozila iz suprotnog smjera imaju prvenstvo prolaza", "prvenstvo prolaza vozila koja se kreću niz nagib"], answer: "prvenstvo prolaza u odnosu na vozila iz suprotnog smjera", image: "Images/91.jpg", points: 4 },
    { id: "sg11", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["nailazak na most na autoputu", "autoput", "međunarodni put"], answer: "autoput", image: "Images/92.jpg", points: 4 },
    { id: "sg12", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["avionska pista", "blizina avionske piste", "blizina aerodroma"], answer: "blizina avionske piste", image: "Images/93.jpg", points: 2 },
    { id: "sg13", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["predputokaz", "prestrojavanje vozila sa nazivima naseljenih mjesta", "tabla za usmjeravanje"], answer: "prestrojavanje vozila sa nazivima naseljenih mjesta", image: "Images/97.png", points: 2 },
    { id: "sg14", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["zabrana saobraćaja u oba smjera", "zabrana saobraćaja u jednom smjeru", "dozvoljen saobraćaj u oba smjera"], answer: "zabrana saobraćaja u jednom smjeru", image: "Images/94.jpg", points: 4 },
    { id: "sg15", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["zabrana saobraćaja za bicikle", "biciklistička staza", "biciklisti na putu"], answer: "biciklistička staza", image: "Images/95.jpg", points: 2 },
    { id: "sg16", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["pokretni most", "oštećenje na kolovozu", "opasan uspon"], answer: "pokretni most", image: "Images/98.jpg", points: 3 },
    { id: "sg17", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["prelaz puta preko željezničke pruge sa branicima ili polubranicima", "prelaz puta preko željezničke pruge bez branika ili polubranika", "približavanje tramvajskoj pruzi"], answer: "prelaz puta preko željezničke pruge bez branika ili polubranika", image: "Images/96.png", points: 3 },
    { id: "sg18", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["najveća dozvoljena brzina", "obavezna brzina", "brzina koja se preporučuje"], answer: "brzina koja se preporučuje", image: "Images/99.png", points: 3 },
    { id: "sg19", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["obavezno zaustavljanje", "ukrštanje sa putem sa prvenstvom prolaza", "ukrštanje sa sporednim putem"], answer: "ukrštanje sa putem sa prvenstvom prolaza", image: "Images2/100.jpg", points: 3 },
    { id: "sg20", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["nailaženje na semafor", "nailaženje na željezničku prugu", "nailaženje na radove na putu"], answer: "nailaženje na semafor", image: "Images2/101.png", points: 3 },
    { id: "sg21", text: "Na slici, strelice na kolovozu služe za:", type: "radio", options: ["usmjeravanje vozila", "obilježavanje obaveznog smjera kretanja vozila", "obilježavanje namjene saobraćajnih traka"], answer: "obilježavanje obaveznog smjera kretanja vozila", image: "Images2/102.jpg", points: 2 },
    { id: "sg22", text: "Udvojena puna linija označava:", type: "radio", options: ["ivicu kolovoza", "biciklističku stazu", "zabranu prelaska preko te linije ili kretanja po njima"], answer: "zabranu prelaska preko te linije ili kretanja po njima", image: "Images2/103.png", points: 2 },
    { id: "sg23", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["zabrana preticanja svih motornih vozila osim motocikla bez prikolice i mopeda", "zabrana preticanja svih motornih vozila", "zabrana preticanja svih motornih vozila, osim mopeda"], answer: "zabrana preticanja svih motornih vozila osim motocikla bez prikolice i mopeda", image: "Images2/104.jpg", points: 4 },
    { id: "sg24", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["prelaz puta preko željezničke pruge bez branika", "prelaz puta preko željezničke pruge sa branicima ili polubranicima", "prelaz puta preko željezničke pruge bez branika ili polubranika"], answer: "prelaz puta preko željezničke pruge sa branicima ili polubranicima", image: "Images2/105.jpg", points: 3 },
    { id: "sg25", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["prelaz za životinje na putu", "životinje na putu", "divljač na putu"], answer: "životinje na putu", image: "Images2/106.jpg", points: 3 },
    { id: "sg26", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["zabrana saobraćaja za vozila koja ne prekoračuju određeno osovinsko opterećenje", "zabrana saobraćaja za vozila koja prekoračuju određeno osovinsko opterećenje", "zabrana saobraćaja za vozila koja ne prekoračuju nosivost označenu na znaku"], answer: "zabrana saobraćaja za vozila koja prekoračuju određeno osovinsko opterećenje", image: "Images2/107.jpg", points: 3 },
    { id: "sg27", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["put sa jednosmjernim saobraćajem za teretna i priključna vozila", "obavezan smjer za vrste vozila koje su date na znaku", "obilaznica za određene vrste vozila"], answer: "obilaznica za određene vrste vozila", image: "Images2/107_2.png", points: 3 },
    { id: "sg28", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["kružni tok saobraćaja", "raskrsnica sa kružnim tokom saobraćaja", "kružna raskrsnica"], answer: "kružna raskrsnica", image: "Images2/108.jpg", points: 2 },
    { id: "sg29", text: "Na slici su prikazani saobraćajni znaci koji označavaju:", type: "radio", options: ["blizinu dionice puta na kojem je snijeg", "blizinu dionice puta na kome se snijeg čisti mašinski", "blizinu dionice puta na kojem je poledica i led"], answer: "blizinu dionice puta na kome se snijeg čisti mašinski", image: "Images2/109.png", points: 3 },
    { id: "sg30", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["prvenstvo prolaza u odnosu na vozila iz suprotnog smjera", "prvenstvo prolaza za vozila iz suprotnog smjera", "blizinu dionice puta na kojem je poledica i led"], answer: "prvenstvo prolaza za vozila iz suprotnog smjera", image: "Images2/111.jpg", points: 4 },
    { id: "sg31", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["prestanak najmanje dozvoljene brzine", "prestanak ograničenja brzine", "prestanak brzine koja se preporučuje"], answer: "prestanak najmanje dozvoljene brzine", image: "Images2/112.jpg", points: 3 },
    { id: "sg32", text: "Na slici su prikazani saobraćajni znaci koji označavaju:", type: "radio", options: ["zabrana saobraćaja za motorna vozila čija širina prelazi širinu označenu na znaku", "zabrana saobraćaja za teretna vozila čija dužina prelazi dužinu označenu na znaku", "zabrana saobraćaja za teretna vozila čija širina prelazi širinu označenu na znaku"], answer: "zabrana saobraćaja za teretna vozila čija širina prelazi širinu označenu na znaku", image: "Images2/113.png", points: 3 },
    { id: "sg33", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["zabrana kretanja za pješake po kolovozu", "zabrana saobraćaja za pješake", "zabrana kretanja za pješake po kolovozu van naselja"], answer: "zabrana saobraćaja za pješake", image: "Images2/115.jpg", points: 4 },
    { id: "sg34", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["tabla za usmjeravanje", "predznak za obilazak", "putokaz za obilazak"], answer: "predznak za obilazak", image: "Images2/122.jpg", points: 3 },
    { id: "sg35", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["putokaz za izlazak sa auto-puta", "naziv naseljenog mjesta", "naziv petlje"], answer: "naziv petlje", image: "Images2/123.png", points: 2 },
    { id: "sg36", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["putokaz za naseljeno mjesto", "strelasti putokaz", "usmjeravajuća tabla za naseljeno mjesto"], answer: "strelasti putokaz", image: "Images2/124.png", points: 2 },
    { id: "sg37", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["prelazak sa dvije saobraćajne trake na jednu u istom smjeru kretanja", "površina na kolovozu na kojoj se dvije saobraćajne trake spajaju u jednu", "naizmjenično propuštanje vozila"], answer: "strelasti putokaz", image: "Images2/117.png", points: 2 },
    { id: "sg38", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["približavanje prelazu puta preko željezničke pruge sa branicima ili polubranicima", "približavanje prelazu puta preko željezničke pruge", "približavanje prelazu preko željezničke pruge bez branika ili polubranika"], answer: "približavanje prelazu preko željezničke pruge bez branika ili polubranika", image: "Images2/118.jpg", points: 3 },
    { id: "sg39", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["prevrtanje ili iskliznuće vozila", "klizav kolovoz", "led i poledica na putu"], answer: "prevrtanje ili iskliznuće vozila", image: "Images2/119.jpg", points: 3 },
    { id: "sg40", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["ograničenje brzine kretanja", "brzina koja se preporučuje", "najmanja dozvoljena brzina"], answer: "ograničenje brzine kretanja", image: "Images2/120.jpg", points: 4 },
    { id: "sg41", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["odronjavanje kamena", "prštanje kamena na putu", "klizište na putu"], answer: "odronjavanje kamena", image: "Images2/121.jpg", points: 3 },
    { id: "sg42", text: "Na slici su prikazani saobraćajni znaci koji označavaju:", type: "radio", options: ["pokretne stepenice na udaljenosti 10 metara", "podzemni ili nadzemni pješački prelaz na udaljenosti 10 metara", "ulazak u garažu na udaljenosti do 10 metara"], answer: "podzemni ili nadzemni pješački prelaz na udaljenosti 10 metara", image: "Images2/125.png", points: 2 },
    { id: "sg43", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["obavezna upotreba lanaca za snijeg", "opasnost od snijega", "opasnost od poledice"], answer: "opasnost od poledice", image: "Images2/126.jpg", points: 3 },
    { id: "sg44", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["zabrana saobraćaja za sva motorna vozila osim za motocikle", "zabrana saobraćaja za motocikle", "zabrana saobraćaja za bicikle sa motorom"], answer: "zabrana saobraćaja za motocikle", image: "Images2/127.jpg", points: 3 },
    { id: "sg45", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["najmanje odstojanje između parkiranih vozila", "najmanje odstojanje između vozila", "potrebno rastojanje da bi se vozila mimoišla"], answer: "najmanje odstojanje između vozila", image: "Images2/128.jpg", points: 4 },
    { id: "sg46", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["predznak za obilazak sa desne strane", "pretputokaz za izlaz do određenog mjesta", "putokaz za prestrojavanje za kretanje do određenog mjesta"], answer: "putokaz za prestrojavanje za kretanje do određenog mjesta", image: "Images2/129.jpg", points: 2 },
    { id: "sg47", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["predznak za neposredno regulisanje saobraćaja na mjestu na kome se izvode radovi", "regulisanje saobraćaja u raskrsnici pomoću zastavice", "završetak puta zbog izvođenja radova"], answer: "predznak za neposredno regulisanje saobraćaja na mjestu na kome se izvode radovi", image: "Images2/130.jpg", points: 2 },
    { id: "sg48", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["zabrana zaustavljanja", "zabrana saobraćaja u jednom smjeru", "zabrana parkiranja"], answer: "zabrana parkiranja", image: "Images2/131.jpg", points: 3 },
    { id: "sg49", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["dvostruka opasna krivina ili više uzastopnih krivina od kojih je prva na desno", "dvostruka krivina ili više uzastopnih krivina od kojih je prva na desno", "dvostruka opasna krivina ili više uzastopnih krivina od kojih je prva na lijevo"], answer: "dvostruka opasna krivina ili više uzastopnih krivina od kojih je prva na lijevo", image: "Images2/132.jpg", points: 4 },
    { id: "sg50", text: "Na slici su prikazani saobraćajni znaci koji označavaju:", type: "radio", options: ["najmanje dozvoljenu brzina u dužini puta od 2000 metara", "brzinu koja se preporučuje u dužini puta od 2000 metara", "najmanje dozvoljenu brzinu nakon pređenih 2000 metara"], answer: "najmanje dozvoljenu brzina u dužini puta od 2000 metara", image: "Images2/133.png", points: 3 },
    { id: "sg51", text: "Na slici su prikazani saobraćajni znaci koji označavaju zabranu saobraćaja za motorna vozila koja vuku:", type: "radio", options: ["laku prikolicu u naznačenom vremenu", "poluprikolicu u naznačenom vremenu", "priključno vozilo u naznačenom vremenu"], answer: "priključno vozilo u naznačenom vremenu", image: "Images2/136.png", points: 3 },
    { id: "sg52", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["obavezan izlaz u slučaju opasnosti", "udaljenost izlaza u slučaju opasnosti", "putokaz za pješake"], answer: "udaljenost izlaza u slučaju opasnosti", image: "Images2/137.jpg", points: 2 },
    { id: "sg53", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["početak saobraćajne trake za spora vozila", "završetak saobraćajne trake za spora vozila", "završetak saobraćajne trake za prinudno zaustavljanje"], answer: "završetak saobraćajne trake za prinudno zaustavljanje", image: "Images2/138.jpg", points: 2 },
    { id: "sg54", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["zabrana saobraćaja za vozila sa ceradom", "nailazak na neravan kolovoz", "zabrana saobraćaja za cistijerne"], answer: "zabrana saobraćaja za cistijerne", image: "Images2/139.jpg", points: 3 },
    { id: "sg55", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["najmanja dozvoljena brzina", "ograničenje brzine", "brzina koja se preporučuje"], answer: "ograničenje brzine", image: "Images2/140.jpg", points: 4 },
    { id: "sg56", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["djeca na putu", "zona škole", "staza za pješake"], answer: "djeca na putu", image: "Images2/141.jpg", points: 4 },
    { id: "sg57", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["kamenje pršti", "neučvršćena bankina", "oštećen kolovoz"], answer: "neučvršćena bankina", image: "Images2/142.jpg", points: 2 },
    { id: "sg58", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["zabrana saobraćaja za vozila označena simbolom", "zabrana saobraćaja za teretna vozila", "dozvoljen saobraćaj za vozila označena simbolom"], answer: "zabrana saobraćaja za vozila označena simbolom", image: "Images2/143.jpg", points: 3 },
    { id: "sg59", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["ukrštanje puteva sa prvenstvom prolaza", "nailazak na put sa prvenstvom prolaza", "pružanje puta sa prvenstvom prolaza"], answer: "pružanje puta sa prvenstvom prolaza", image: "Images2/144.jpg", points: 3 },
    { id: "sg60", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["raskrsnica sa kružnim tokom saobraćaja", "kružni tok saobraćaja", "obavezno polukružno okretanje"], answer: "raskrsnica sa kružnim tokom saobraćaja", image: "Images2/145.jpg", points: 4 },
    { id: "sg61", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["ukrštanje puteva iste važnosti", "obavezno zaustavljanje", "ukrštanje sa putem sa prvenstvom prolaza"], answer: "ukrštanje sa putem sa prvenstvom prolaza", image: "Images2/146.jpg", points: 4 },
    { id: "sg62", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["zona usporenog saobraćaja", "djeca na putu", "dječje igralište"], answer: "zona usporenog saobraćaja", image: "Images2/147.jpg", points: 3 },
    { id: "sg63", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["kružna raskrsnica", "raskrsnica sa kružnim tokom saobraćaja", "kružni tok saobraćaja"], answer: "kružni tok saobraćaja", image: "Images2/148.jpg", points: 4 },
    { id: "sg64", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["radovi na putu", "otklanjanje odrona na putu", "radovi na uklanjanju kamena na putu"], answer: "radovi na putu", image: "Images2/149.jpg", points: 3 },
    { id: "sg65", text: "Na slici su prikazani saobraćajni znaci koji označavaju:", type: "radio", options: ["parkiranje na trotoaru poprečno osi kolovoza", "parkiranje na trotoaru upravno na podužnu osu kolovoza", "parkiranje na trotoaru paralelno sa podužnom osom kolovoza"], answer: "parkiranje na trotoaru paralelno sa podužnom osom kolovoza", image: "Images2/150.png", points: 2 },
    { id: "sg66", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["broj međunarodnog puta", "broj regionalnog puta", "broj magistralnog puta"], answer: "broj međunarodnog puta", image: "Images2/152.png", points: 3 },
    { id: "sg67", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["putokaz za naseljena mjesta", "pretputokaz za izlaz", "tabla za usmjeravanje"], answer: "putokaz za naseljena mjesta", image: "Images2/153.jpg", points: 2 },
    { id: "sg68", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["zajednička staza za bicikliste i pješake", "razdvojene staze za bicikliste i pješake", "zabrana saobraćaja za bicikliste i pješake"], answer: "razdvojene staze za bicikliste i pješake", image: "Images2/154.jpg", points: 2 },
    { id: "sg69", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["zabrana prolaza bez zaustavljanja", "zabrana prolaza bez zaustavljanja na carinskom prelazu", "zabrana prolaza zbog naplate putarine"], answer: "zabrana prolaza bez zaustavljanja", image: "Images2/155.jpg", points: 3 },
    { id: "sg70", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["ukrštanje sa putem sa prvenstvom prolaza", "ukrštanje sa sporednim putem", "obavezno zaustavljanje"], answer: "obavezno zaustavljanje", image: "Images2/156.jpg", points: 4 },
    { id: "sg71", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["prelaz puta preko željezničke pruge sa branicima ili polubranicima", "prelaz puta preko željezničke pruge bez branika ili polubranika", "približavanje prelazu puta preko željezničke pruge"], answer: "prelaz puta preko željezničke pruge bez branika ili polubranika", image: "Images2/157.jpg", points: 3 },
    { id: "sg72", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["predputokazna tabla za lijevo skretanje", "tabla za usmjeravanje", "putokazna tabla"], answer: "tabla za usmjeravanje", image: "Images2/158.png", points: 3 },
    { id: "sg73", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["zabrana preticanja za teretna vozila", "zabrana preticanja za sva motorna vozila", "zabrana preticanja teretnih vozila"], answer: "zabrana preticanja za teretna vozila", image: "Images2/159.jpg", points: 4 },
    { id: "sg74", text: "Na slici su prikazani saobraćajni znaci koji označavaju:", type: "radio", options: ["dozvoljeno skretanje ulijevo u naznačenom vremenu", "zabrana polukružnog okretanja u naznačenom vremenu", "zabrana skretanja ulijevo u naznačenom vremenu"], answer: "zabrana skretanja ulijevo u naznačenom vremenu", image: "Images2/160.png", points: 4 },
    { id: "sg75", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["obavezan smjer prvo udesno, pa ulijevo i izlazak iz raskrsnice", "put sa jednosmjernim saobraćajem uz obavezno skretanje udesno pa ulijevo", "smjer kretanja vozila koje namjerava da skrene ulijevo na raskrsnici na kojoj je skretanje ulijevo zabranjeno"], answer: "smjer kretanja vozila koje namjerava da skrene ulijevo na raskrsnici na kojoj je skretanje ulijevo zabranjeno", image: "Images2/162.jpg", points: 2 },
    { id: "sg76", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["put sa prvenstvom prolaza", "završetak puta sa prvenstvom prolaza", "pružanje puta sa prvenstvom prolaza"], answer: "završetak puta sa prvenstvom prolaza", image: "Images2/163.jpg", points: 3 },
    { id: "sg77", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["trolejbuska pruga", "tramvajska pruga", "šinsko vozilo na putu"], answer: "tramvajska pruga", image: "Images2/164.jpg", points: 3 },
    { id: "sg78", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["suženje puta sa desne strane", "suženje puta sa lijeve strane", "desna kolovozna traka nije u pravcu"], answer: "suženje puta sa desne strane", image: "Images2/165.jpg", points: 3 },
    { id: "sg79", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["zabrana saobraćaja za vozila koja ne prekoračuju određenu dužinu", "zabrana saobraćaja za vozila koja prekoračuju određenu dužinu", "zabrana saobraćaja za teretna motorna vozila čija je dužina do 10 metara"], answer: "zabrana saobraćaja za vozila koja prekoračuju određenu dužinu", image: "Images2/166.jpg", points: 3 },
    { id: "sg80", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["gradsko područje", "industrijska zona", "naseljeno mjesto"], answer: "naseljeno mjesto", image: "Images2/167.jpg", points: 2 },
    { id: "sg81", text: "Na slici je prikazan saobraćajni znak:", type: "radio", options: ["traka za kretanje teretnih vozila", "način korišćenja saobraćajne trake", "obavezno kretanje teretnih vozila"], answer: "način korišćenja saobraćajne trake", image: "Images2/168.jpg", points: 3 },
    { id: "sg82", text: "Svijetla na semaforu kao na slici imaju značenje:", type: "radio", options: ["skori prestanak dozvoljeng kretanja vozila u pravcu strelica", "skori prestanak zabrane kretanja vozaču i priprema za slobodno kretanje vozilom u pravcu strelica", "dozvoljeno kretanje vozaču u pravcu strelica"], answer: "skori prestanak zabrane kretanja vozaču i priprema za slobodno kretanje vozilom u pravcu strelica", image: "Images2/169.png", points: 2 },
    { id: "sg83", text: "Strelice koje označavaju dozvoljeni smjer kretanja su:", type: "radio", options: ["crne na zelenoj podlozi", "zelene boje na crnoj podlozi", "crvene boje na zelenoj podlozi"], answer: "zelene boje na crnoj podlozi", image: "Images2/169.png", points: 2 },
    { id: "sg84", text: "Horizontalno predručena ruka, kao na slici obavezuje:", type: "radio", options: ["vozača u čijem se smjeru daje znak da zaustavi vozilo", "sve učesnike u saobraćaju da ubrzaju kretanje", "vozača u čijem smjeru se daje ovaj znak da ubrza kretanje vozila"], answer: "vozača u čijem smjeru se daje ovaj znak da ubrza kretanje vozila", image: "Images2/170.png", points: 2 },
    { id: "sg85", text: "Znak koji daje policijski službenik na slici:", type: "radio", options: ["može se davati samo na raskrsnici", "može se davati na raskrsnici i na otvorenom putu", "može se davati samo na otvorenom putu"], answer: "može se davati na raskrsnici i na otvorenom putu", image: "Images2/170.png", points: 2 },
    { id: "sg86", text: "Na slici je prikazan graničnik koji označava dio kolovoza na kojem je:", type: "radio", options: ["zabranjen saobraćaj zbog prepreke na putu", "zabranjen saobraćaj zbog ulivanja sa prilaznog puta", "zabranjen saobraćaj zbog završetka saobraćajne trake"], answer: "zabranjen saobraćaj zbog ulivanja sa prilaznog puta", image: "Images2/171.png", points: 2 },
    { id: "sg87", text: "Na slici je prikazan:", type: "radio", options: ["semafor za regulisanje obilaženja sa desne strane", "semafor za regulisanje prolaska šinskih vozila", "semafor za regulisanje promjene saobraćajne trake"], answer: "semafor za regulisanje promjene saobraćajne trake", image: "Images2/172.jpg", points: 2 },
    { id: "sg88", text: "Ako policijski službenik kao na slici lagano maše rukom, to znači da vozač u čijem se smjeru daje taj znak:", type: "radio", options: ["treba da smanji brzinu kretanja", "treba da se zaustavi", "treba da ubrza kretanje"], answer: "treba da smanji brzinu kretanja", image: "Images2/173.png", points: 2 },
    { id: "sg89", text: "Znak koji daje policijski službenik na slici je obavezujući:", type: "radio", options: ["samo van naselja vozaču u čujem smjeru se daje taj znak", "za vozača u čijem smjeru se daje taj znak", "samo u naselju vozaču u čijem smjeru se daje taj znak"], answer: "za vozača u čijem smjeru se daje taj znak", image: "Images2/173.png", points: 2 },
    { id: "sg90", text: "Svjetlosna strelica zelene boje označava:", type: "radio", options: ["da vozač treba da obrati pažnju na visinu vozila", "da vozač zaustavi vozilo", "da je vozaču dozvoljeno kretanje"], answer: "da je vozaču dozvoljeno kretanje", image: "Images2/174.png", points: 2 },
    { id: "sg91", text: "Svjetlosni znaci kao na slici se koriste za regulisanje:", type: "radio", options: ["saobraćaja na naplatnim rampama", "saobraćaja na trakama sa promjenljivim smjerom kretanja", "prolaska kroz tunel"], answer: "saobraćaja na trakama sa promjenljivim smjerom kretanja", image: "Images2/174.png", points: 2 },
    { id: "sg92", text: "Verikalno podignuta ruka sa položajem šake policijskog službenika kao na slici znači:", type: "radio", options: ["slobodan prolaz za sva vozila", "slobodan prolaz za vozila koja dolaze sa boka", "obavezno zaustvljanje za sve učesnike"], answer: "obavezno zaustvljanje za sve učesnike", image: "Images2/175.png", points: 2 },
    { id: "sg93", text: "Znak koji daje policijski službenik na slici:", type: "radio", options: ["može se davati iz vozila", "može se davati iz vozila, ali samo sa tablicom STOP", "ne može se davati iz vozila"], answer: "ne može se davati iz vozila", image: "Images2/175.png", points: 2 },
    { id: "sg94", text: "Svjetlosni saobraćajni znak koji je dat na slici, kada se naizmjenično uključuju dva okrugla crvena svijetla znači:", type: "radio", options: ["zabranu kretanja vozaču na mjestu prelaza puta preko pruge", "zabranu kretanju šinskog vozila", "zabranu kretanja svih učesnika u saobraćaju"], answer: "zabranu kretanja vozaču na mjestu prelaza puta preko pruge", image: "Images2/176.png", points: 2 },
    { id: "sg95", text: "Na slici je prikazan semafor za regulisanje kretanja:", type: "radio", options: ["bicikala samo po biciklističkim trakama", "bicikala i mopeda samo po biciklističkim stazama", "bicikala i mopeda po biciklističkim trakama"], answer: "bicikala i mopeda samo po biciklističkim stazama", image: "Images2/177.png", points: 2 },
    { id: "sg96", text: "Znak koji daje policijski službenik, kao na slici može se davati:", type: "radio", options: ["na raskrsnici, ali samo sa stop tablicom", "na rasksnici i na otvorenom putu", "na otvorenom putu, ali samo sa stop tablicom"], answer: "na rasksnici i na otvorenom putu", image: "Images2/178.png", points: 2 },
    { id: "sg97", text: "Znak koji daje policijski službenik na slici znači da vozači vozila:", type: "radio", options: ["koja dolaze sa njegovih bočnih strana imaju pravo prvenstva", "kojima su okrenuta leđa imaju pravo prvenstva", "nastave kretanje u skladu sa značenjem svijetala na semaforu"], answer: "koja dolaze sa njegovih bočnih strana imaju pravo prvenstva", image: "Images2/178.jpg", points: 2 },
    { id: "sg98", text: "Na slici je prikazan kosnik koji:", type: "radio", options: ["označava traku za spora vozila", "označava mjesto otvaranja trake", "označava mjesto zatvaranja trake"], answer: "označava mjesto zatvaranja trake", image: "Images2/179.png", points: 2 },
    { id: "sg99", text: "Na slici je prikazan:", type: "radio", options: ["uređaj za regulisanje kretanja tramvaja", "uređaj za regulisanje kretanja pješaka", "uređaj za označavanje usmjerenosti kolosijeka"], answer: "uređaj za regulisanje kretanja tramvaja", image: "Images2/180.jpg", points: 2 },
    { id: "sg100", text: "Horizontalno odručena ruka policijskog službenika, kao na slici znači da:", type: "radio", options: ["vozač tog vozila smanji brzinu kretanja", "vozač tog vozila uspori vozilo i nastavi kretanje ulijevo", "je vozač tog vozila obavezan da zaustavi vozilo"], answer: "je vozač tog vozila obavezan da zaustavi vozilo", image: "Images2/181.png", points: 2 },
    { id: "sg101", text: "Znak koji daje policijski službenik na slici:", type: "radio", options: ["može se davati i na raskrsnici i na otvorenom putu", "može se davati samo u naseljenom mjestu", "može se davati samo na otvorenom putu"], answer: "može se davati i na raskrsnici i na otvorenom putu", image: "Images2/181.png", points: 2 },
    { id: "sg102", text: "Privremena saobraćajna signalizacija data na slici označava:", type: "radio", options: ["zapreku na putu", "vertikalnu zapreku", "usmjeravajući branik"], answer: "usmjeravajući branik", image: "Images2/182.png", points: 2 },
    { id: "sg103", text: "Prikazana svjetlosna signalizacija treba da je uključena:", type: "radio", options: ["noću i u uslovima smanjene vidljivosti", "ako je veliki protok saobraćaja", "samo na lokalnim putevima"], answer: "noću i u uslovima smanjene vidljivosti", image: "Images2/182.png", points: 2 },
    { id: "sg104", text: "Položaj tijela policijskog službenika sa rukama horizontalno odručenim, znači da vozila:", type: "radio", options: ["kojima su okrenuta leđa imaju pravo prolaska", "koja dolaze sa njegove bočne strana imaju pravo prolaska", "da su svi vozači obavezni da zaustave vozilo"], answer: "koja dolaze sa njegove bočne strana imaju pravo prolaska", image: "Images2/183.png", points: 2 },
    { id: "sg105", text: "Znak koji daje policijski službenik na slici:", type: "radio", options: ["može se davati samo na raskrsnici", "može se davati i na raskrsnici i na otvorenom putu", "može se davati samo na otvorenom putu"], answer: "može se davati i na raskrsnici i na otvorenom putu", image: "Images2/183.png", points: 2 },
    { id: "sg106", text: "Poprečne oznake na kolovozu predstavljaju:", type: "radio", options: ["poprečnu ivicu kolovoza", "graničnu liniju kolovoza", "liniju zaustavljanja"], answer: "liniju zaustavljanja", image: "Images2/184.png", points: 2 },
    { id: "sg107", text: "Ako vozila javnog gradskog prevoza koriste istu saobraćajnu traku kojom se kreću i šinska vozila, uređaj koji je prikazan na slici koristi se za regulisanje kretanja:", type: "radio", options: ["tramvaja i autobusa", "samo autobusa", "samo tramvaja"], answer: "tramvaja i autobusa", image: "Images2/185.jpg", points: 2 },
    { id: "sg108", text: "Kombinovani znak podizanje ruke i upotreba pištaljke, kao na slici, predstavlja:", type: "radio", options: ["zabranu prolaza za sve vozače", "slobodan prolaz za vozila koja dolaze samo sa bočne strane", "zabranu prolaza za vozila koja dolaze samo sa bočne strane"], answer: "zabranu prolaza za sve vozače", image: "Images2/186.png", points: 2 },
    { id: "sg109", text: "Znak koji daje policijski službenik na slici:", type: "radio", options: ["ne može se davati sa pištaljkom u raskrsnici", "može se davati sa pištaljkom u raskrsnici", "ne može se davati sa STOP tablicom"], answer: "može se davati sa pištaljkom u raskrsnici", image: "Images2/186.png", points: 2 },
    { id: "sg110", text: "Na slici su prikazana svjetla na semaforu, a redoslijed uključenja svjetala je:", type: "radio", options: ["1-2-3-4", "1-4-3-2", "1-3-2-4"], answer: "1-3-2-4", image: "Images2/187.jpg", points: 2 },
    { id: "sg111", text: "Na semaforima sa trobojnim svijetlima:", type: "radio", options: ["zeleno svijetlo može biti trepćuće", "zeleno svijetlo ne može biti trepćuće", "zeleno svijetlo može biti uključeno sa crvenim svijetlom"], answer: "zeleno svijetlo može biti trepćuće", image: "Images2/187.jpg", points: 2 },
    { id: "sg112", text: "Položaj tijela policijskog službenika kao na slici, znači da vozila:", type: "radio", options: ["koja dolaze sa njegove bočne strane nemaju pravo prolaska", "da su svi vozači obavezni da zaustave vozilo", "koja dolaze sa njegove bočne strane imaju pravo prolaska"], answer: "koja dolaze sa njegove bočne strane imaju pravo prolaska", image: "Images2/188.png", points: 2 },
    { id: "sg113", text: "Znak koji daje policijski službenik na slici:", type: "radio", options: ["može se davati samo na raskrsnici", "može se davati samo na otvorenom putu", "može se davati i na raskrsnici i na otvorenom putu"], answer: "može se davati i na raskrsnici i na otvorenom putu", image: "Images2/188.png", points: 2 },
    { id: "sg114", text: "Na slici je prikazan:", type: "radio", options: ["usmjeravajući branik", "čeoni branik", "zapreka na putu"], answer: "usmjeravajući branik", image: "Images2/189.png", points: 2 },
    { id: "sg115", text: "Na slici je prikazan:", type: "radio", options: ["semafor za regulisanje kretanja svih učesnika", "semafor za regulisanje kretanja biciklista", "semafor za regulisanje kretanja pješaka"], answer: "semafor za regulisanje kretanja pješaka", image: "Images2/190.jpg", points: 2 },
    { id: "sg116", text: "Vetikalno podignuta ruka, kao na slici znači:", type: "radio", options: ["prestanak važenja naredbi koje daje policijski službenik", "zabranu prolaza za sve vozače u saobraćaju", "da vozila koja dolaze sa boka imaju slobodan prolaz"], answer: "zabranu prolaza za sve vozače u saobraćaju", image: "Images2/191.png", points: 2 },
    { id: "sg117", text: "Znak koji daje policijski službenik na slici:", type: "radio", options: ["može se davati samo na raskrsnici", "može se davati samo na otvorenom putu", "ne može se davati na raskrsnici"], answer: "može se davati samo na raskrsnici", image: "Images2/191.png", points: 2 },
    { id: "sg118", text: "Na obilježenom stajalištu, kao na slici, smije da se zaustavi vozač:", type: "radio", options: ["putničkog vozila radi ulaska ili izlaska putnika", "teretnog vozila samo radi utovara ili istovara", "vozila za javni prevoz putnika"], answer: "vozila za javni prevoz putnika", image: "Images2/192.png", points: 2 },
    { id: "sg119", text: "Uključena svijetla na semaforu, kao na slici, znače:", type: "radio", options: ["da vozač može da se kreće u pravcu strelice pri čemu ne ometa druge učesnike u saobraćaju", "da vozač može da se kreće u pravcu strelice ne obraćajući pažnju na druge učesnike u saobraćaju", "zabranjeno kretanje u smjeru označenom dopunskom zelenom strelicom"], answer: "da vozač može da se kreće u pravcu strelice pri čemu ne ometa druge učesnike u saobraćaju", image: "Images2/193.png", points: 2 },
    { id: "sg120", text: "Policijski službenik daje znak iz vozila, kao na slici:", type: "radio", options: ["u skladu sa propisima", "suprotno propisima", "u skladu sa propisima samo u naseljenom mjestu"], answer: "u skladu sa propisima", image: "Images2/194.png", points: 2 },
    { id: "sg121", text: "U situaciji prikazanoj na slici, znak koji daje policijski službenik vozaču znači:", type: "radio", options: ["da ubrza kretanje vozila", "da izvrši preticanje sa desne strane", "da zaustavi vozilo"], answer: "da zaustavi vozilo", image: "Images2/194.png", points: 1 },
    
];

const generalQuestions = [
    
    { id: "gq1", text: "Kretanje vozilom unazad dozvoljeno je:", type: "radio", options: ["Na kratkom dijelu puta u nepreglednoj krivini", "Na kratkom dijelu puta u tunelu", "Na kratkom dijelu puta"], answer: "Na kratkom dijelu puta", points: 2 },
    { id: "gq2", text: "Na magistralnom putu van naselja, gdje nema znaka ograničenja brzine, vozač ne smije vozilom da se kreće brzinom većom od:", type: "radio", options: ["60 km/h", "70 km/h", "80 km/h"], answer: "80 km/h", points: 2 },
    { id: "gq3", text: "Pješačko ostrvo koje se nalazi na sredini kolovoza, gdje se saobraćaj odvija u oba smjera, obilazi se vozilom:", type: "radio", options: ["uvijek sa desne strane", "uvijek sa lijeve strane", "sa bilo koje strane"], answer: "uvijek sa desne strane", points: 2 },
    { id: "gq4", text: "Na putu sa prvenstvom prolaza neposredno ispred raskrnice koja nije regulisana semaforom ili saobraćajnim znacima vozač:", type: "radio", options: ["može da pretiče bicikl, moped ili motocikl", "može da pretiče sva vozila koja zadržavaju pravac kretanja", "može da pretiče putnička vozila koja zadržavaju pravac kretanja"], answer: "može da pretiče bicikl, moped ili motocikl", points: 3 },
    { id: "gq5", text: "Prolaženje vozilom pored drugog vozila koje dolazi iz suprotnog smjera je radnja:", type: "radio", options: ["preticanja", "obilaženja", "mimoilaženja"], answer: "mimoilaženja", points: 2 },
    { id: "gq6", text: "Vozač je dužan da bez odlaganja ukloni sa kolovoza:", type: "radio", options: ["sve predmete koji su na kolovozu", "predmete i materije koji potiču sa vozila kojim upravlja", "sve predmete koji se nalaze na saobraćajnoj traci kojom se kreće"], answer: "predmete i materije koji potiču sa vozila kojim upravlja", points: 3 },
    { id: "gq7", text: "Dva prsluka sa svjetlosno reflektujućim osobinama mora imati:", type: "radio", options: ["putničko motorno vozilo", "četvorocikl", "teretno motorno vozilo"], answer: "teretno motorno vozilo", points: 2 },
    { id: "gq8", text: "Vozač na putu za saobraćaj vozila u oba smjera na kojem postoje najmanje četiri saobraćajne trake:", type: "radio", options: ["mora da koristi desnu kolovoznu traku", "mora da koristi samo desnu saobraćajnu traku", "mora da koristi samo lijevu saobraćajnu traku"], answer: "mora da koristi desnu kolovoznu traku", points: 2 },
    { id: "gq9", text: "Brzina kretanja motornih vozila na putu, pod normalnim uslovima saobraćaja, ne smije da se ograniči saobraćajnim znakom ispod:", type: "radio", options: ["40 km/h", "50 km/h", "60 km/h"], answer: "40 km/h", points: 3 },
    { id: "gq10", text: "Na putu na kojem postoje dvije saobraćajne trake namijenjene za saobraćaj vozila u istom smjeru, brže kretanje vozila u jednoj traci od kretanja vozila u drugoj traci:", type: "radio", options: ["smatra se preticanjem", "ne smatra se preticanjem", "smatra se obilaženjem"], answer: "ne smatra se preticanjem", points: 2 },
    { id: "gq11", text: "Vozilo na motorni pogon koje na putu vuče neispravno vozilo ne smije se kretati brzinom većom od:", type: "radio", options: ["40 km/h", "50 km/h", "60 km/h"], answer: "40 km/h", points: 2 },
    { id: "gq12", text: "Saobraćajnu traku namijenjenu za kretanje vozila za javni prevoz putnika, mogu koristiti:", type: "radio", options: ["vozila pod pratnjom", "vozila komunalne službe", "putnička vozila"], answer: "vozila pod pratnjom", points: 2 },
    { id: "gq13", text: "Vozač je dužan da zvučni znak upozorenja daje:", type: "radio", options: ["više puta u naizmjeničnim intervalima", "bez prekida u trajanju od 5 sekundi", "u mjeri koja je dovoljna da se drugi učesnici u saobraćaju upozore"], answer: "u mjeri koja je dovoljna da se drugi učesnici u saobraćaju upozore", points: 3 },
    { id: "gq14", text: "Zvučni znak upozorenja vozač je dužan da upotrijebi na javnom putu:", type: "radio", options: ["pri sustizanju vozila koja se sporo kreću niz nagib", "kada se obilazi vozilo parkirano sa desne strane kolovoza", "kada se pored kolovoza nalaze djeca koja ne obraćaju pažnju na kretanje vozača"], answer: "kada se pored kolovoza nalaze djeca koja ne obraćaju pažnju na kretanje vozača", points: 2 },
    { id: "gq15", text: "Uzdužni dio kolovoza namijenjen za saobraćaj vozila u jednom smjeru, sa jednom ili više saobraćajnih traka zove se:", type: "radio", options: ["saobraćajna traka", "kolovozna traka", "kolovoz"], answer: "kolovozna traka", points: 3 },
    { id: "gq16", text: "Kada ovlašćeni policijski službenik daje naredbe koje odstupaju od pravila saobraćaja, učesnik u saobraćaju:", type: "radio", options: ["dužan je da postupi po naredbama ovlašćenog policijskog službenika", "dužan je da postupi po pravilima saobraćaja", "nije dužan da postupi po naredbama ovlašćenog policijskog službenika"], answer: "dužan je da postupi po naredbama ovlašćenog policijskog službenika", points: 3 },
    { id: "gq17", text: "Ukoliko se ne prevozi u bezbjednosnom sjedištu, u motornom vozilu na prednjem sjedištu, ne smije da se prevozi dijete:", type: "radio", options: ["mlađe od 10 godina", "mlađe od 12 godina", "mlađe od 14 godina"], answer: "mlađe od 12 godina", points: 2 },
    { id: "gq18", text: "Kretanje vozila unazad u uslovima smanjene vidljivosti:", type: "radio", options: ["dozvoljeno je u naselju", "dozvoljeno je na kratkom dijelu puta", " nije dozvoljeno"], answer: "nije dozvoljeno", points: 2 },
    { id: "gq19", text: "U naselju se saobraćajnim znakom motornim vozilima može dozvoliti brzina kretanja najviše do:", type: "radio", options: ["80 km/h", "50 km/h", "60 km/h"], answer: "80 km/h", points: 2 },
    { id: "gq20", text: "Kada vozač naiđe na organizovanu kolonu pješaka koja prelazi kolovoz:", type: "radio", options: ["ne smije vozilom da presijeca organizovanu kolonu pješaka", " smije vozilom da presijeca organizovanu kolonu pješaka uz upotrebu zvučnog znaka upozorenja", "smije vozilom da presjeca organizovanu kolonu pješaka, ako kolonu ne čine djeca"], answer: "ne smije vozilom da presijeca organizovanu kolonu pješaka", points: 2 },
    { id: "gq21", text: "Vučenim motornim vozilom, osim vozača koji njime upravlja:", type: "radio", options: ["dozvoljen je prevoz putnika u skladu sa brojem putničkih mjesta", "dozvoljen je prevoz samo jednog putnika", "zabranjen je prevoz putnika"], answer: "zabranjen je prevoz putnika", points: 3 },
    { id: "gq22", text: "Prelaženje vozilom iz jedne u drugu saobraćajnu traku namijenjenu za saobraćaj u istom smjeru je:", type: "radio", options: ["prestrojavanje", "preticanje", "obilaženje"], answer: "prestrojavanje", points: 2 },
    { id: "gq23", text: "Mladi vozač i vozač početnik ne smije upravljati vozilom na autoputu brzinom većom od:", type: "radio", options: ["70 km/h", "100 km/h", "110 km/h"], answer: "100 km/h", points: 2 },
    { id: "gq24", text: "Da li je učesnik u saobraćaju dužan da postupa u skladu sa saobraćajnom signalizacijom i kad time odstupa od pravila saobraćaja:", type: "radio", options: ["nije dužan", "dužan je", "dužan je samo u naselju"], answer: "dužan je", points: 3 },
    { id: "gq25", text: "Naglo mijenjanje brzine vozila po putu je dozvoljeno:", type: "radio", options: ["u slučaju uključivanja sa zemljanog puta na javni put", "u slučaju izbjegavanja neposredne opasnosti", "u slučaju bržeg isključivanja iz saobraćaja"], answer: "u slučaju izbjegavanja neposredne opasnosti", points: 2 },
    { id: "gq26", text: "Osim traktora, ostala vozila na motorni pogon:", type: "radio", options: ["ne smiju da vuku priključno vozilo za traktor", "smiju da vuku priključno vozilo za traktor", "ne smiju da vuku priključno vozilo za traktor, ako masa skupa vozila prelazi -500 kg"], answer: "ne smiju da vuku priključno vozilo za traktor", points: 3 },
    { id: "gq27", text: "Vozač je dužan da upotrijebi zvučni znak upozorenja:", type: "radio", options: ["prije ulaska u tunel koji nema osvjetljenje", "na putu u naselja prije ulaska u raskrsnicu", "na putu van naselja prije nailaska u nepreglednu i uzanu krivinu"], answer: "na putu van naselja prije nailaska u nepreglednu i uzanu krivinu", points: 3 },
    { id: "gq28", text: "Vozilo na motorni pogon ne smije da vuče:", type: "radio", options: ["motocikl, moped, kao ni laki ni teški tricikl", "teretno vozilo", "putničko vozilo"], answer: "motocikl, moped, kao ni laki ni teški tricikl", points: 2 },
    { id: "gq29", text: "Pješak na javnom putu van naselja:", type: "radio", options: ["ne smije se kretati desnom stranom kolovoza", "ne smije se kretati u koloni", "ne smije se kretati po kolovozu autoputa"], answer: "ne smije se kretati po kolovozu autoputa", points: 2 },
    { id: "gq30", text: "Vozilo koje se kreće po šinama postavljenim na sredini kolovoza:", type: "radio", options: ["smije da se pretiče sa lijeve strane", "smije da se pretiče sa bilo koje strane", "smije da se pretiče sa desne strane"], answer: "smije da se pretiče sa desne strane", points: 2 },
    { id: "gq31", text: "Da li na brzoj saobraćajnici vozač smije da vrši polukružno okretanje:", type: "radio", options: ["da, ako ne ugrožava druge učesnike u saobraćaju", "da, ako ima uključene sve pokazivače pravca", "ne smije"], answer: "ne smije", points: 3 },
    { id: "gq32", text: "Crveno i plavo trepćuće svijetlo koja se naizmjenično pale na vozilu su svjetlosni znaci koje daju:", type: "radio", options: ["vozila sa prvenstvom prolaza", "vozila pod pratnjom", "specijalna vozila"], answer: "vozila pod pratnjom", points: 3 },
    { id: "gq33", text: "Vozač vozila dok ga drugo vozilo pretiče:", type: "radio", options: ["ne smije da povećava brzinu kretanja", "smije da poveća brzinu kretanja", "ne smije da smanji brzinu kretanja"], answer: "ne smije da povećava brzinu kretanja", points: 2 },
    { id: "gq34", text: "Okretanje vozila za 180° iz dotadašnjeg smjera kretanja radi uključivanja u suprotni saobraćajni tok je:", type: "radio", options: ["kružno okretanje", "lijevo skretanje", "polukružno okretanje"], answer: "polukružno okretanje", points: 2 },
    { id: "gq35", text: "Mladi vozač na magistralnom putu ne smije upravljati vozilom brzinom većom od:", type: "radio", options: ["50 km/h", "60 km/h", "70 km/h"], answer: "70 km/h", points: 3 },
    { id: "gq36", text: "Noću vozаč može upotrijebiti svjetlosni znаk upozorenjа na putu u naselju, prilikom:", type: "radio", options: ["mimoilaženja sa drugim vozilom", "mimoilaženja sa pješakom", "preticanja drugog vozila"], answer: "preticanja drugog vozila", points: 2 },
    { id: "gq37", text: "Na raskrsnici postoji horizontalna i svjetlosna signalizacija, vozač će postupiti prema:", type: "radio", options: ["pravilu propuštanja vozila sa desne strane", "značenju svjetlosne signalizacije", "oznakama na kolovozu"], answer: "značenju svjetlosne signalizacije", points: 2 },
    { id: "gq38", text: "Mladi vozač ne smije upravljati vozilom, osim na autoputu, brzinom većom od:", type: "radio", options: ["100 km/h", "80 km/h", "70 km/h"], answer: "70 km/h", points: 2 },
    { id: "gq39", text: "Vozač koji se približava obilježenom pješačkom prelazu, mora:", type: "radio", options: ["smanjiti brzinu kretanja vozila do 30 km/h", "smanjiti brzinu i nastaviti kretanje sa vozilom bez obzira na saobraćajnu situaciju", "prilagoditi brzinu kretanja vozila tako da se u svakoj situaciji može bezbjedno zaustaviti"], answer: "prilagoditi brzinu kretanja vozila tako da se u svakoj situaciji može bezbjedno zaustaviti", points: 3 },
    { id: "gq40", text: "Brzina kretanja teretnog motornog vozila čija je najveća dozvoljena masa do -500 kg ograničena je na:", type: "radio", options: ["80 km/h", "70 km/h", "60 km/h"], answer: "80 km/h", points: 2 },
    { id: "gq41", text: "Prekid kretanja vozila u trajanju dužem od pet minuta, osim prekida koji se vrši da bi se postupilo po znaku ili pravilu kojim se reguliše saobraćaj je:", type: "radio", options: ["zaustavljanje vozila", "parkiranje vozila", "isključenje vozila"], answer: "parkiranje vozila", points: 3 },
    { id: "gq42", text: "Brzina kretanja autobusa u javnom gradskom prevozu putnika ograničena je do:", type: "radio", options: ["50 km/h", "60 km/h", "70 km/h"], answer: "50 km/h", points: 3 },
    { id: "gq43", text: "Vozač umjesto zvučnog znaka upozorenja noću može da upotrijebi:", type: "radio", options: ["dnevna svijetla", "svjetlosni znak upozorenja", "svijetla za maglu"], answer: "svjetlosni znak upozorenja", points: 2 },
    { id: "gq44", text: "Površina koja nije namjenjena za saobraćaj vozila, koja se nalazi na sredini kolovoza sa jednosmjernim saobraćajem, ako saobraćajnim znakom nije drugačije određeno:", type: "radio", options: ["može se obilaziti sa lijeve ili desne strane", "može da se obilazi samo sa desne strane", "može da se obilazi samo sa lijeve strane"], answer: "može se obilaziti sa lijeve ili desne strane", points: 2 },
    { id: "gq45", text: "Na putu za saobraćaj vozila u oba smjera na kojem postoje tri saobraćajne trake vozač:", type: "radio", options: ["smije da koristi bilo koju saobraćajnu traku", "ne smije da koristi saobraćajnu traku uz desnu ivicu kolovoza", "ne smije da koristi saobraćajnu traku uz lijevu ivicu kolovoza"], answer: "ne smije da koristi saobraćajnu traku uz lijevu ivicu kolovoza", points: 2 },
    { id: "gq46", text: "Na raskrsnici vozač je dužan:", type: "radio", options: ["da propusti vozilo koje nailazi sa njegove lijeve strane", "da propusti vozilo koje nailazi sa njegove desne strane", "da propusti sva vozila"], answer: "da propusti vozilo koje nailazi sa njegove desne strane", points: 3 },
    { id: "gq47", text: "Odstojanje između vučnog i vučenog putničkog vozila, ako se vuče pomoću užeta iznosi:", type: "radio", options: ["od 1 do 2 metara", "od 3 do 5 metara", "preko 5 metara"], answer: "od 3 do 5 metara", points: 2 },
    { id: "gq48", text: "U vozilu u kojem su ugrađeni sigurnosni pojasevi u toku vožnje sigurnosni pojas mora da koristi:", type: "radio", options: ["samo vozač", "vozač i putnici", "samo vozač i suvozač"], answer: "vozač i putnici", points: 2 },
    { id: "gq49", text: "Kad se vozilo za organizovani prevoz djece zaustavi na kolovozu radi ulaska, odnosno izlaska djece, vozač:", type: "radio", options: ["mora uključiti lijevi pokazivač pravca", "mora uključiti desni pokazivač pravca", "mora uključiti sve pokazivače pravca"], answer: "mora uključiti sve pokazivače pravca", points: 3 },
    { id: "gq50", text: "U naselju se saobraćajnim znakom motornim vozilima može ograničiti brzina kretanja najviše do:", type: "radio", options: ["80 km/h", "50 km/h", "60 km/h"], answer: "80 km/h", points: 2 },
    { id: "gq51", text: "Vozač vozila za organizovani prevoz djece kad zaustavi vozilo na kolovozu radi ulaska-izlaska djece mora:", type: "radio", options: ["uključiti lijevi pokazivač pravca", "uključiti sve pokazivače pravca", "uključiti desni pokazivač pravca"], answer: "uključiti sve pokazivače pravca", points: 3 },
    { id: "gq52", text: "Kada vozila na rаskrsnicu dolаze iz suprotnih smjerovа i skreću ulijevo mimoilaze se:", type: "radio", options: ["sa desne strane", "sa lijeve strane", "po dogovoru"], answer: "sa desne strane", points: 2 },
    { id: "gq53", text: "Prilikom uključivanja u saobraćaj vozač je dužan:", type: "radio", options: ["da upotrijebi zvučni znak upozorenja i da uključi odgovarajući pokazivač pravca", "da uključi sve pokazivače pravca", "da se uvjeri da to može učiniti na bezbjedan način i da uključi odgovarajući pokazivač pravca"], answer: "da se uvjeri da to može učiniti na bezbjedan način i da uključi odgovarajući pokazivač pravca", points: 3 },
    { id: "gq54", text: "Vozilo koje se kreće po šinama postavljenim na sredini kolovoza:", type: "radio", options: ["smije da se pretiče sa desne straneda upotrijebi zvučni znak upozorenja i da uključi odgovarajući pokazivač pravca", "smije da se pretiče sa lijeve strane", "ne smije da se pretiče"], answer: "smije da se pretiče sa desne strane", points: 2 },
    { id: "gq55", text: "Prilikom mimoilaženja sa pješakom, vozač je dužan da:", type: "radio", options: ["drži bezbjedno rastojanje između svog vozila i pješaka", "sirenom upozori pješaka kako bi pješak napustio kolovoz", "ubrza vozilo da se što prije mimoiđe sa pješakom"], answer: "drži bezbjedno rastojanje između svog vozila i pješaka", points: 3 },
    { id: "gq56", text: "Odstojanje između vučnog i vučenog motornog vozila, ako se vuče pomoću krute veze inosi:", type: "radio", options: ["od 3 do 5 metara", "preko 5 metra", "do 3 m"], answer: "drži bezbjedno rastojanje između svog vozila i pješaka", points: 2 },
    { id: "gq57", text: "Prolaženje vozilom pored drugog vozila koje se ne pomjera je radnja:", type: "radio", options: ["preticanja", "obilaženja", "prestrojavanja"], answer: "obilaženja", points: 2 },
    { id: "gq58", text: "Brzina kretanja teretnog vozila sa priključnim vozilom ograničena je na:", type: "radio", options: ["60 km/h", "70 km/h", "80 km/h"], answer: "70 km/h", points: 3 },
    { id: "gq59", text: "Vozač kome je dat znak za preticanje:", type: "radio", options: ["dužan je da pomjeri svoje vozilo ka desnoj ivici kolovoza", "dužan je da pomjeri svoje vozilo ka razdjelnoj liniji", "dužan je da pomjeri vozilo ka lijevoj ivici kolovoza"], answer: "dužan je da pomjeri svoje vozilo ka desnoj ivici kolovoza", points: 2 },
    { id: "gq60", text: "Da li vozila pod pratnjom smiju presijecati kolonu pješaka:", type: "radio", options: ["ne, ako je kolona duža od 30 metara", "ne, bez obzira na dužinu kolone", "da, bez obzira na dužinu kolone"], answer: "da, bez obzira na dužinu kolone", points: 2 },
    { id: "gq61", text: "U priključnom vozilu za stanovanje - kamp-prikolici:", type: "radio", options: ["smiju se prevoziti lica", "ne smiju se prevoziti lica", "ne smije se prevoziti više od pet lica"], answer: "ne smiju se prevoziti lica", points: 2 },
    { id: "gq62", text: "Teret na motornom vozilu može da pređe najudaljeniju tačku na prednjoj strani vozila:", type: "radio", options: ["do 1,5 metara", "do 1 metar", "nije ograničeno, ali se mora označiti propisanom tablom"], answer: "do 1 metar", points: 3 },
    { id: "gq63", text: "Mladi vozač je vozač:", type: "radio", options: ["koji ima manje od 12 mjeseci vozačkog iskustva", "do 24 godine života", "do 21 godinu života"], answer: "do 24 godine života", points: 2 },
    { id: "gq64", text: "Ako u kretanju vozilom na putu naiđete na saobraćajni znak 'djeca na putu' postupićete tako što ćete:", type: "radio", options: ["sa naročitom opreznošću nastaviti kretanje kako bi mogli blagovremeno zaustaviti vozilo", "prilagoditi brzinu prema opštem ograničenju za datu dionicu puta", "prilagoditi brzinu vremenskim uslovima"], answer: "sa naročitom opreznošću nastaviti kretanje kako bi mogli blagovremeno zaustaviti vozilo", points: 3 },
    { id: "gq65", text: "Kada se vozilom krećeš pored autobusa zaustavljenog na stajalištu postupićeš tako:", type: "radio", options: ["što ćeš zaustaviti vozilo i sačekati ulaz putnika u autobus, a zatim nastaviti kretanje", "što ćeš uključiti sirenu i nastaviti kretanje bez dodatne pažnje na lica koja ulaze u autobus, odnosno izlaze", "što ću se kretati smanjenom brzinom da ne ugrožavam lica koja u autobus ulaze, odnosno izlaze"], answer: "što ću se kretati smanjenom brzinom da ne ugrožavam lica koja u autobus ulaze, odnosno izlaze", points: 2 },
    { id: "gq66", text: "Vozač dok upravlja putničkim motornim vozilom u saobraćaju mora u vozilu:", type: "radio", options: ["imati najmanje dva prsluka sa reflektujućim osobinama", "imati prsluka sa reflektujućim osobinama koliko ima i mjesta za sjedenje", "imati jedan prsluk sa reflektujućim osobinama"], answer: "imati jedan prsluk sa reflektujućim osobinama", points: 3 },
    { id: "gq67", text: "Na putu u naselju na kojem brzina nije ograničena saobraćajnim znakom, vozač ne smije da se kreće brže od:", type: "radio", options: ["50 km/h", "60 km/h", "70 km/h"], answer: "50 km/h", points: 2 },
    { id: "gq68", text: "Kada se vozač uključuje vozilom sa zemljanog puta na put sa asfaltnim zastorom, potrebno je:", type: "radio", options: ["da zaustavi vozilo i ukloni blato sa točkova nakon uključenja", "da naizmjenično ubrza i smanji brzinu vozila nakon uključenja, kako bi blato spalo sa točkova", "da zaustavi vozilo i ukloni blato sa točkova prije uključenja"], answer: "da zaustavi vozilo i ukloni blato sa točkova prije uključenja", points: 2 },
    { id: "gq69", text: "Prilikom kretanja vozilom po kolovozu vozač je dužan da vozilo drži:", type: "radio", options: ["što bliže desnoj ivici kolovoza", "sredinom kolovozne trake", "bliže razdjelnoj liniji"], answer: "što bliže desnoj ivici kolovoza", points: 3 },
    { id: "gq70", text: "Saobraćajnu traku namijenjenu za kretanje vozila za gradski prevoz putnika mogu koristiti:", type: "radio", options: ["vozila za odvoz smeća", "vozila sa prevenstvom prolaza", "putnička vozila pri preticanju"], answer: "vozila sa prevenstvom prolaza", points: 2 },
    { id: "gq71", text: "Kada se iza vozila zbog spore vožnje formira kolona vozila, vozač je dužan da:", type: "radio", options: ["nastavi kretanje bez obaveze prema drugim učesnicima u saobraćaju", "na odgovarajućem mjestu na putu omogući vozilima da ga bezbjedno preteknu, obiđu ili prođu", "nastavi kretanje do prve raskrsnice sa lokalnim putem i isključi se iz saobraćaja"], answer: "na odgovarajućem mjestu na putu omogući vozilima da ga bezbjedno preteknu, obiđu ili prođu", points: 2 },
    { id: "gq72", text: "Vozač smije da zaustavi ili parkira svoje vozilo na trotoaru:", type: "radio", options: ["ako trotoar ima širinu veću od 1,6 metara", "ako je saobraćajnim znakom dozvoljeno, bez obzira na širinu trotoara i prolaza za pješake", "ako je dozvoljeno saobraćajnom signalizacijom, i ako ostane prolaz za pješake najmanje širine 1,6 metara, koji ne smije biti uz ivicu kolovoza"], answer: "ako je dozvoljeno saobraćajnom signalizacijom, i ako ostane prolaz za pješake najmanje širine 1,6 metara, koji ne smije biti uz ivicu kolovoza", points: 3 },
    { id: "gq73", text: "Vozilo koje se kreće po šinama postavljenim uz desnu ivicu kolovoza pretiče se:", type: "radio", options: ["sa bilo koje strane", "sa lijeve strane", "sa desne strane"], answer: "sa lijeve strane", points: 2 },
    { id: "gq74", text: "Za vrijeme kretanja vozila unazad:", type: "radio", options: ["moraju biti uključeni svi pokazivači pravca", "ne moraju biti uključeni svi pokazivači pravca", "mora biti uključen samo desni pokazivač pravca"], answer: "moraju biti uključeni svi pokazivači pravca", points: 2 },
    { id: "gq75", text: "Vozačka dozvola za kategoriju B može se izdati licu koje je navršilo:", type: "radio", options: ["17 godina", "17 godina i 6 mjeseci", "18 godina"], answer: "18 godina", points: 3 },
    { id: "gq76", text: "Vozač koji na kolovozu bez ulične rasvjete zaustavi ili parkira vozilo, noću ili u uslovima smanjene vidljivosti, mora na vozilu uključiti:", type: "radio", options: ["oborena svijetla", "parkirna, odnosno poziciona svijetla", "svijetla za maglu"], answer: "parkirna, odnosno poziciona svijetla", points: 2 },
    { id: "gq77", text: "Odstojanje na kojem učesnik u saobraćaju može jasno vidjeti kolovoz je:", type: "radio", options: ["preglednost", "vidno polje", "vidljivost"], answer: "vidljivost", points: 2 },
    { id: "gq78", text: "Za vožnju bicikla, gdje ne postoji posebna staza, odnosno traka, može da se koristi kolovoz:", type: "radio", options: ["u širini do 1 metra od desne ivice kolovoza", "u širini do 1,5 metara od desne ivice kolovoza", "u širini do 1,2 metra od desne ivice kolovoza"], answer: "u širini do 1 metra od desne ivice kolovoza", points: 3 },
    { id: "gq79", text: "Brzina kretanja vozila na javnom putu kada prevozi opasne materije van naselja ograničena je:", type: "radio", options: ["na 60 km/h", "na 70 km/h", "na 80 km/h"], answer: "na 70 km/h", points: 2 },
    { id: "gq80", text: "Vozač može da se uključi vozilom u saobraćaj kada:", type: "radio", options: ["uključi zvučni signal i sve pokazivače pravca", "uključi samo pokazivač pravca", "se uvjeri da ne ometa i na propisan način obavijesti ostale učesnike"], answer: "se uvjeri da ne ometa i na propisan način obavijesti ostale učesnike", points: 3 },
    { id: "gq81", text: "Kada se vozilom vrši prevoz djeteta u bezbjednosnom sjedištu:", type: "radio", options: ["dijete ne mora biti vezano sigurnosnim pojasom", "dijete ne mora biti vezano, ako je sjedište pričvršćeno sigurnosnim pojasom", "dijete mora biti vezano sigurnosnim pojasom"], answer: "dijete mora biti vezano sigurnosnim pojasom", points: 2 },
    { id: "gq82", text: "Na javnom putu gdje su kolovozne trake fizički odvojene, vozač smije vozilom da se kreće:", type: "radio", options: ["kolovoznom trakom namijenjenom za saobraćaj vozila iz suprotnog smjera", "desnom kolovoznom trakom", "lijevom i desnom kolovoznom trakom"], answer: "desnom kolovoznom trakom", points: 2 },
    { id: "gq83", text: "Lice koje se prevozi vozilom ne smije:", type: "radio", options: ["da piše poruke na telefonskom uređaju", "da ometa vozača u upravljanju", "da koristi slušalice"], answer: "da ometa vozača u upravljanju", points: 3 },
    { id: "gq84", text: "Kad se vozilom kreće unazad vozač je:", type: "radio", options: ["dužan da propusti vozilo koje dolazi iza njegovog vozila", "dužan da uključi lijevi pokazivač pravca", "nije dužan da propusti vozilo koje dolazi iza njegovog vozila"], answer: "dužan da propusti vozilo koje dolazi iza njegovog vozila", points: 2 },
    { id: "gq85", text: "Sredstvo kojim se ometa rad uređaja za mjerenje brzine kretanja vozila:", type: "radio", options: ["ne smije se koristiti na dijelu puta gdje postoji dopunska tabla radarska kontrola", "smije se koristiti na dijelu puta gdje ne postoji dopunska tabla radarska kontrola", "ne smije se koristiti i nalaziti u vozilu"], answer: "ne smije se koristiti i nalaziti u vozilu", points: 2 },
    { id: "gq86", text: "Ako se vozač nalazi na kolovozu van svog vozila:", type: "radio", options: ["dužan je da nosi prsluk sa svjetlosno reflektujućim osobinama", "nije dužan da nosi prsluk sa svjetlosno reflektujućim osobinama", "dužan je da položajem ruku upozori ostale učesnike o svom prisustvu"], answer: "dužan je da nosi prsluk sa svjetlosno reflektujućim osobinama", points: 3 },
    { id: "gq87", text: "Kada na raskrsnici vozila dolaze iz suprotnih smjerova i skreću ulijevo mimoilaze se sa:", type: "radio", options: ["desne strane", "lijeve strane", "lijeve i desne strane"], answer: "desne strane", points: 2 },
    { id: "gq88", text: "U toku kretanja za vrijeme magle na vozilu moraju da budu uključena:", type: "radio", options: ["velika svijetla", "oborena svijetla", "pokazivači pravca"], answer: "oborena svijetla", points: 2 },
    { id: "gq89", text: "Vozač koji se približava raskrsnici dužan je da:", type: "radio", options: ["poveća brzinu kretanja da što brže prođe kroz raskrsnicu", "prilagodi vožnju uslovima saobraćaja na raskrsnici", "vozi brzinom koja je propisana opštim ograničenjem"], answer: "prilagodi vožnju uslovima saobraćaja na raskrsnici", points: 3 },
    { id: "gq90", text: "U bezbjednosnom sjedištu mora da se prevozi dijete do:", type: "radio", options: ["7 godina", "6 godina", "5 godina"], answer: "5 godina", points: 2 },
    { id: "gq91", text: "Na istoj osovini vozila pneumatici moraju da budu jednaki:", type: "radio", options: ["po dimenzijama, nosivosti, brzinskim karakteristikama, vrsti konstrukciji, marki i tipu", "samo po merki, tipu, dimenzijama, novosti, vrsti i dubini šare", "samo po dimenzijama, marki i tipu"], answer: "po dimenzijama, nosivosti, brzinskim karakteristikama, vrsti konstrukciji, marki i tipu", points: 2 },
    { id: "gq92", text: "Svijetla za maglu na motornom vozilu treba da budu postavljena tako da osvjetljavaju put ispred vozila koji nije duži od:", type: "radio", options: ["15 metara", "30 metara", "35 metara"], answer: "35 metara", points: 3 },
    { id: "gq93", text: "Naslon za glavu mora biti ugrađen na sjedištu kod kojeg sigurnosni pojas:", type: "radio", options: ["je vezan u dvije tačke", "nije vezan", "je vezan u tri tačke"], answer: "je vezan u tri tačke", points: 2 },
    { id: "gq94", text: "Kad kod povrijeđenog hoćemo da zaustavimo krvarenje upotrebljavamo:", type: "radio", options: ["jod i sterilnu gazu", "kompresivni zavoj", "alkohol i sterilnu gazu"], answer: "kompresivni zavoj", points: 3 },
    { id: "gq95", text: "Broj hitne pomoći je:", type: "radio", options: ["122", "123", "124"], answer: "124", points: 2 },
    
];

const generalQuestions2 = [

    { id: "q1", text: "Radno kočenje ne mora da ima:", type: "radio", options: ["poluprikolica sa tri osovine", "putničko vozilo do 750 kg sopstvene mase", "laka prikolica"], answer: "laka prikolica", points: 1 },
    { id: "q2", text: "Svijetlo za maglu na zadnjoj strani vozila je:", type: "radio", options: ["crvene boje", "žute boje", "bijele boje"], answer: "crvene boje", points: 1 },
    { id: "q3", text: "Blatobrani na motornom vozilu moraju da budu postavljeni tako da pokrivaju širinu:", type: "radio", options: ["samo zadnjih točkova", "samo prednjih točkova", "svih točkova"], answer: "svih točkova", points: 1 },
    { id: "q4", text: "Učesnika u saobraćajnoj nezgodi koji je zadobio povrede grudnog koša postavljamo:", type: "radio", options: ["u ležeći položaj", "na bočnu stranu", "u polusjedeći položaj"], answer: "u polusjedeći položaj", points: 1 },
    { id: "q5", text: "Pod opekotinom podrazumijevamo povredu nastalu od:", type: "radio", options: ["upale kože", "djelovanja toplote", "uboda črvstog predmeta"], answer: "djelovanja toplote", points: 1 },
    { id: "q6", text: "Pod uređajem na vozilu koji omogućava normalnu vidljivost smatra se:", type: "radio", options: ["svijetlo za maglu", "poziciono svijetlo", "vjetrobran"], answer: "vjetrobran", points: 1 },
    { id: "q7", text: "Svjetlost pokazivača pravca mora da bude:", type: "radio", options: ["žute boje", "bijele boje", "crvene boje"], answer: "žute boje", points: 1 },
    { id: "q8", text: "Protiv blokirajući sistem (ABS) je dio sistema za:", type: "radio", options: ["osvjetljavanje kolovoza", "prenos snage", "za kočenje"], answer: "za kočenje", points: 1 },
    { id: "q9", text: "Pod imobilizacijom podrazumijevamo:", type: "radio", options: ["stavljanje sterilne gaze na povrijeđeni dio tijela", "stavljanje povrijeđenog dijela tijela u stanje mirovanja", "vraćanje povrijeđenog u stanje svijesti"], answer: "stavljanje povrijeđenog dijela tijela u stanje mirovanja", points: 1 },
    { id: "q10", text: "Koliki je broj otkucaja srca kod normalne zdrave osobe:", type: "radio", options: ["do 60 otkucaja u jednoj sekundi", "60 do 80 otkucaja u jednom minutu", "preko 100 otkucaja u jednom minutu"], answer: "60 do 80 otkucaja u jednom minutu", points: 1 },
    { id: "q11", text: "Slobodan hod točka upravljača na vozilu na motorni pogon ne smije biti veći od:", type: "radio", options: ["20 stepeni", "30 stepeni", "40 stepeni"], answer: "30 stepeni", points: 1 },
    { id: "q12", text: "Na motornom vozilu se serijski ugrađuju:", type: "radio", options: ["radna, pomoćna i parkirna kočnica", "radna i pomoćna kočnica i trajni usporivač", "radna i parkirna kočnica i trajni usporivač"], answer: "radna, pomoćna i parkirna kočnica", points: 1 },
    { id: "q13", text: "Najveća dozvoljena dužina motornog vozila osim autobusa je:", type: "radio", options: ["8 metara", "10 metara", "12 metara"], answer: "12 metara", points: 1 },
    { id: "q14", text: "Kada dodje do umora tokom vožnje potrebno je:", type: "radio", options: ["usporenim kretanjem nastaviti vožnju", "konzumirati energetske napitke i nastaviti vožnju", "napraviti pauzu za odmor"], answer: "napraviti pauzu za odmor", points: 1 },
    { id: "q15", text: "Krvarenje kod povrijeđenog je:", type: "radio", options: ["isticanje krvi iz krvnih sudova", "zatvoreni prelom podkoljenice", "zgrušavanje krvi u krvnom sudu"], answer: "isticanje krvi iz krvnih sudova", points: 1 },
    { id: "q16", text: "Od određene opreme u autobusu mora da postoje: ", type: "radio", options: ["tri kutije prve pomoći", "dvije kutije prve pomoći", "jedna kutija prve pomoći"], answer: "dvije kutije prve pomoći", points: 1 },
    { id: "q17", text: "Pod uređajima za davanje svjetlosnih znakova ne smatraju se:", type: "radio", options: ["stop-svijetla", "pokazivači pravca", "katadiopteri"], answer: "katadiopteri", points: 1 },
    { id: "q18", text: "Parkirnu kočnicu kod vozila vozač koristi:", type: "radio", options: ["da zaustavi vozilo kada naiđe na iznenadnu prepreku", " da spriječi pokretanje zaustavljenog vozila", "da spriječi pokretanje vozila samo dok je parkirano u garaži"], answer: " da spriječi pokretanje zaustavljenog vozila", points: 1 },
    { id: "q19", text: "Arterijsko krvarenje kod povrijeđenog prepoznaje se po:", type: "radio", options: ["laganom isticanju krvi i zgrušavanju na povrijeđenom dijela tijela", "krvi u mlazevima", "otoku i modrim podlivima povrijeđenog dijela tijela"], answer: "krvi u mlazevima", points: 1 },
    { id: "q20", text: "Ako je licu u saobraćajnoj nezgodi povrijeđena glava i vrat:", type: "radio", options: ["povrijeđenog što manje pomjerati", "postaviti ga u sjedeći položaj", "postaviti ga na bok u ležeći položaj"], answer: "postaviti ga na bok u ležeći položaj", points: 1 },
    { id: "q21", text: "Sastavni dio motora sa unutrašnjim sagorijevanjem je:", type: "radio", options: ["koljenasto vratilo", "kardansko vratilo", "poluvratilo"], answer: "koljenasto vratilo", points: 1 },
    { id: "q22", text: "Servo uređaj za upravljanje:", type: "radio", options: ["smanjuje ugao zakretanja upravljačkih točkova", "smanjuje ukupnu silu djelovanja vozača kod zakretanja točka upravljača i obezbjeđuje lakoću upravljanja", "smanjuje prečnik putanje pri skretanja vozila"], answer: "smanjuje ukupnu silu djelovanja vozača kod zakretanja točka upravljača i obezbjeđuje lakoću upravljanja", points: 1 },
    { id: "q23", text: "Svijetla glavnih svjetala treba da budu:", type: "radio", options: ["bijele boje", "žute boje", "crvene boje"], answer: "bijele boje", points: 1 },
    { id: "q24", text: "Neposredno nakon saobraćaje nezgode, lice koje je učestvovalo u saobraćajnoj nezgodi:", type: "radio", options: ["smije da konzumira alkoholno piće", "smije da konzumira sedative za smirenje", "ne smije da konzumira alkoholno piće"], answer: "ne smije da konzumira alkoholno piće", points: 1 },
    { id: "q25", text: "Ako je lice koje je povrijeđeno u saobraćajnoj nezgodi bez svijesti treba ga:", type: "radio", options: ["postaviti u ležeći položaj na leđa", "postaviti u ležeći položaj na stomak", "postaviti u bočni položaj"], answer: "postaviti u bočni položaj", points: 1 },
    { id: "q26", text: "Pod opremom motornih i priključnih vozila ne smatra se:", type: "radio", options: ["bočni retrovizor", "rezervni točak", "rezervne sijalice"], answer: "bočni retrovizor", points: 1 },
    { id: "q27", text: "Svjetlost dnevnog svijetla treba da bude:", type: "radio", options: ["žute boje", "plave boje", "bijele boje"], answer: "bijele boje", points: 1 },
    { id: "q28", text: "Minimalna dubina šare na gazećoj površini pneumatika za zimsku upotrebu treba da bude:", type: "radio", options: ["2 mm", "4 mm", "1,6 mm"], answer: "4 mm", points: 1 },
    { id: "q29", text: "Broj policije je:", type: "radio", options: ["124", "112", "122"], answer: "122", points: 1 },
    { id: "q30", text: "Kod povrijeđenog lica na ranu se prvo stavlja:", type: "radio", options: ["alkohol", "voda", "sterilna gaza"], answer: "sterilna gaza", points: 1 },
    { id: "q31", text: "Vozila koja imaju ugrađene brisače vjetrobrana moraju imati i:", type: "radio", options: ["sunđer za pranje stakala", "perače vjetrobrana", "uređaj za zagrijavanje vjetrobrana"], answer: "perače vjetrobrana", points: 1 },
    { id: "q32", text: "Svjetlosni snop oborenog svijetla treba da bude:", type: "radio", options: ["izveden kao lijevi asimetrični", "simetričan", "izveden kao desni asimetrični"], answer: "izveden kao desni asimetrični", points: 1 },
    { id: "q33", text: "Uređaji za odvođenje i ispuštanje izduvnih gasova ne smiju da prelaze dimenzije vozila:", type: "radio", options: ["po dužini ili širini", "po visini", "više od 0,1 metar po dužini"], answer: "po dužini ili širini", points: 1 },
    { id: "q34", text: "Mrtvačke pjege i hladno tijelo su:", type: "radio", options: ["stanja povrijeđnog usled gubljenja svijesti zbog hladnoće", "sigurni znak smrti", "sigurni znak umora"], answer: "sigurni znak smrti", points: 1 },
    { id: "q35", text: "Broj telefona vatrogasne službe je:", type: "radio", options: ["123", "122", "124"], answer: "123", points: 1 },
    { id: "q36", text: "Svijetla za vožnju unazad kod motornih vozila moraju biti:", type: "radio", options: ["bijele boje", "crvene boje", "žute boje"], answer: "bijele boje", points: 1 },
    { id: "q37", text: "Radna kočnica motornih vozila treba da djeluje:", type: "radio", options: ["na sve točkove", "samo na prednje točkove", "samo na zadnje točkove"], answer: "na sve točkove", points: 1 },
    { id: "q38", text: "Motorno vozilo koje pored sjedišta za vozača ima još najviše osam sjedišta je:", type: "radio", options: ["autobus", "teretno vozilo", "putničko vozilo"], answer: "putničko vozilo", points: 1 },
    { id: "q39", text: "U pružanju prve pomoći u saobraćajnoj nezgodi ranu kod povrijeđenog:", type: "radio", options: ["treba isprati vodom", "treba isprati alkoholom", "ne treba ispirati tečnošću"], answer: "ne treba ispirati tečnošću", points: 1 },
    { id: "q40", text: "Pod dejstvom alkohola je vozač:", type: "radio", options: ["ako se u organizmu utvrdi sadržaj alkohola veći od 0,3 g/kg", "ako se u organizmu utvrdi sadržaj alkohola do 0,3 g/kg", "ako se u organizmu utvrdi sadržaj alkohola do 0,2 g/kg"], answer: "ako se u organizmu utvrdi sadržaj alkohola veći od 0,3 g/kg", points: 1 },
    { id: "q41", text: "Sastavni dio uređaja za upravljanje je:", type: "radio", options: ["pneumatik", "točak upravljača", "amortizer"], answer: "točak upravljača", points: 1 },
    { id: "q42", text: "Sastavni dio uređaja za osvjetljavanje puta na motornim vozilima je:", type: "radio", options: ["stop svijetlo", "gabaritno svijetlo", "svijetlo za vožnju unazad"], answer: "svijetlo za vožnju unazad", points: 1 },
    { id: "q43", text: "Sastavni dio prenosnika snage kod motornog vozila je:", type: "radio", options: ["mjenjač", "točak upravljača", "ručica parkirne kočnice"], answer: "mjenjač", points: 1 },
    { id: "q44", text: "Prilikom imobilizacije povrijeđenog lica osnovno pravilo je:", type: "radio", options: ["imobilisati cijelo tijelo povrijeđenog", "imobilisati dva susjedna zgloba", "imobilisati samo zglob koji je najbliži povrijeđenom mjestu"], answer: "imobilisati dva susjedna zgloba", points: 1 },
    { id: "q45", text: "Povrijeđeno lice koje izgubi dosta krvi ima:", type: "radio", options: ["dosta povišen krvni pritisak", "dosta usporen puls", "ubrzano i nepravilno disanje"], answer: "ubrzano i nepravilno disanje", points: 1 },

];

function getRandomQuestions() {
    const selectedQuestions = [
        ...shuffleAndSlice(crossroadsQuestions, 10),
        ...shuffleAndSlice(generalQuestions, 10),
        ...shuffleAndSlice(generalQuestions2, 10),
        ...shuffleAndSlice(signsQuestions, 13)
    ];

    function shuffleAndSlice(arr, count) {
        return arr
            .sort(() => 0.5 - Math.random())
            .slice(0, count);
    }

    return adjustPointsToTotal(selectedQuestions);
}

function adjustPointsToTotal(questions) {
    const TARGET_POINTS = 80;
    let currentTotal = questions.reduce((sum, q) => sum + q.points, 0);

    if (currentTotal === TARGET_POINTS) return questions;

    questions.sort((a, b) => a.points - b.points);

    while (currentTotal !== TARGET_POINTS) {
        if (currentTotal < TARGET_POINTS) {
            for (let q of questions) {
                q.points++;
                currentTotal++;
                if (currentTotal === TARGET_POINTS) break;
            }
        } else {
            for (let i = questions.length - 1; i >= 0; i--) {
                questions[i].points--;
                currentTotal--;
                if (currentTotal === TARGET_POINTS) break;
            }
        }
    }

    return questions;
}

function loadQuestions() {
    const questionnaire = document.getElementById("questionnaire");
    questionnaire.innerHTML = "";

    const selectedQuestions = JSON.parse(sessionStorage.getItem("selectedQuestions")) || getRandomQuestions();
    sessionStorage.setItem("selectedQuestions", JSON.stringify(selectedQuestions)); // Save questions to sessionStorage

    selectedQuestions.forEach(q => {
        let questionDiv = document.createElement("div");
        questionDiv.className = "question-step";

        if (q.image) {
            let img = document.createElement("img");
            img.src = q.image;
            img.alt = "Question Image";
            questionDiv.appendChild(img);
        }

        let label = document.createElement("label");
        label.textContent = q.text;
        questionDiv.appendChild(label);

        q.options.forEach(option => {
            let radioContainer = document.createElement("div");
            let input = document.createElement("input");
            input.type = "radio";
            input.name = q.id;
            input.value = option;

            let savedAnswers = JSON.parse(sessionStorage.getItem("userAnswers")) || {};
            if (savedAnswers[q.id] === option) {
                input.checked = true;
            }

            input.addEventListener("change", () => {
                let userAnswers = JSON.parse(sessionStorage.getItem("userAnswers")) || {};
                userAnswers[q.id] = input.value;
                sessionStorage.setItem("userAnswers", JSON.stringify(userAnswers));
            });

            let optionLabel = document.createElement("label");
            optionLabel.textContent = option;

            radioContainer.appendChild(input);
            radioContainer.appendChild(optionLabel);
            questionDiv.appendChild(radioContainer);
        });

        // Add Points Display BELOW the question text but position it at the bottom-right
        let pointsContainer = document.createElement("div");
        pointsContainer.className = "points-container";

        let pointsDisplay = document.createElement("div");
        pointsDisplay.className = "question-points";
        pointsDisplay.textContent = `Poeni: ${q.points}`;
        
        pointsContainer.appendChild(pointsDisplay);
        questionDiv.appendChild(pointsContainer); 

        questionnaire.appendChild(questionDiv);
    });
}

let startTime = sessionStorage.getItem("startTime");

if (!startTime) {
    startTime = Date.now();
    sessionStorage.setItem("startTime", startTime);
}

function updateTimer() {
    const now = Date.now();
    const elapsedTime = Math.floor((now - startTime) / 1000); // Convert to seconds

    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    document.getElementById("timer-display").textContent =
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

const timerInterval = setInterval(updateTimer, 1000);

function showResult() {
    let correctAnswers = 0;
    let totalPoints = 0;
    let formData = new FormData(document.getElementById('questionnaire-form'));
    let selectedQuestions = JSON.parse(sessionStorage.getItem("selectedQuestions")) || [];
    
    const resultContainer = document.getElementById("review-questions");
    resultContainer.innerHTML = "";

    selectedQuestions.forEach(q => {
        let userAnswer = formData.get(q.id) || "";
        let questionDiv = document.createElement("div");
        questionDiv.className = "question-step result-review";

        if (q.image) {
            let img = document.createElement("img");
            img.src = q.image;
            img.alt = "Question Image";
            questionDiv.appendChild(img);
        }

        let label = document.createElement("label");
        label.textContent = q.text;
        questionDiv.appendChild(label);

        let userGotItRight = userAnswer === q.answer;

        q.options.forEach(option => {
            let radioContainer = document.createElement("div");
            let optionLabel = document.createElement("label");
            optionLabel.textContent = option;

            if (option === q.answer) {
                optionLabel.classList.add("correct-highlight");
            }
            if (userAnswer === option && !userGotItRight) {
                optionLabel.classList.add("incorrect-answer-label");
            }

            radioContainer.appendChild(optionLabel);
            questionDiv.appendChild(radioContainer);
        });

        let pointsDisplay = document.createElement("div");
        pointsDisplay.className = "question-points";
        pointsDisplay.textContent = `Poeni: ${q.points}`;
        questionDiv.appendChild(pointsDisplay);

        if (userGotItRight) {
            questionDiv.classList.add("correct-answer");
            correctAnswers++;
            totalPoints += q.points;
        } else {
            questionDiv.classList.add("incorrect-answer");
        }

        resultContainer.appendChild(questionDiv);

        clearInterval(timerInterval);
        const now = Date.now();
        const elapsedTime = Math.floor((now - startTime) / 1000);
    
        const hours = Math.floor(elapsedTime / 3600);
        const minutes = Math.floor((elapsedTime % 3600) / 60);
        const seconds = elapsedTime % 60;
    
        let timeTaken = `Vreme završetka testa: ${hours}h ${minutes}m ${seconds}s`;
    
        document.getElementById("time-taken").textContent = timeTaken;
    
        sessionStorage.setItem("testCompleted", "true");
    });

    // Updated result text with colored pass/fail message
    let resultMessage = totalPoints >= 68
        ? '<span style="color: green;">Položili ste!</span>' 
        : '<span style="color: red;">Niste položili...</span>';
    
    document.getElementById("result-text").innerHTML = `
        <center>Odgovorili ste ${correctAnswers} tačnih odgovora.</center><br>
        <strong><center>Poeni: ${totalPoints}/80</center></strong><br>
        <strong><center>${resultMessage}</center></strong>
    `;

    document.getElementById("questionnaire").style.display = 'none';
    document.getElementById("result").style.display = 'block';
    document.getElementById("submit-btn").style.display = 'none';
    sessionStorage.setItem("testCompleted", "true");

    // Scroll to the top of the page
    window.scrollTo(0, 0);
}

function restartTest() {
    sessionStorage.removeItem("userAnswers");
    sessionStorage.removeItem("selectedQuestions");
    sessionStorage.removeItem("testCompleted");
    sessionStorage.clear();
    window.scrollTo(0, 0);
    location.reload();
}

document.getElementById("submit-btn").addEventListener("click", function() {
    // Scroll to the top of the page instantly
    window.scrollTo(0, 0);

    // Call the showResult function
    showResult();
});

document.getElementById("restart-btn").addEventListener("click", restartTest);


window.onload = function () {
     if (sessionStorage.getItem("testCompleted") === "true") {
         showResult();
     } else {
         loadQuestions();
         updateTimer();
     }
};