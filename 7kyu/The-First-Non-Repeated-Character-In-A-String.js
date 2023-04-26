/*
        7 kyu
        The First Non Repeated Character In A String
        512287% of 529928 of 2,513ALVO
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        You need to write a function, that returns the first non-repeated character in the given string.

        If all the characters are unique, return the first character of the string.
        If there is no unique character, return null in JS or Java, None in Python, '\0' in C.

        You can assume, that the input string has always non-zero length.

        Examples
        "test"   returns "e"
        "teeter" returns "r"
        "trend"  returns "t" (all the characters are unique)
        "aabbcc" returns null (all the characters are repeated)
*/
function firstNonRepeated(s) {
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if (s.indexOf(c) === i && s.indexOf(c, i + 1) === -1) {
            return c;
        }
    }
    return null;
};
/*
TEST RESULTS:
        Time: 1060ms Passed: 104Failed: 0
        Test Results:
        Fixed tests
        Testing for test
        Testing for teeter
        Testing for 1122321235121222
        Testing for rend
        Completed in 2ms
        Random tests
        Testing for mqttssolrwpknlqoprknm
        Testing for tsltnprmqmrplnoakkqos
        Testing for aonmqprljlknuqurpojmtsskt
        Testing for fijhmmjngpgnkplkohiol
        Testing for suonmtvrplltkopsmjkivrqqdujin
        Testing for ltjqiopmlkmmrpivsntujksqrounv
        Testing for klaomripltrqntsmqkjnpojsi
        Testing for ukjjnumspsrqmioltqntrpiwlok
        Testing for ihlqikjrhknjtmqslnrtostompupu
        Testing for ijhlnunojtpkluqqsptrmdoishvmkrv
        Testing for lgormnkjhlkprqjsgohkqnmisip
        Testing for qitujpihumlkprtmsnvskoohjqnvltr
        Testing for rquomskvkpppwrtslmnoxlxvtnwqu
        Testing for okmlrpnqttlkwqvpvurosmwzsun
        Testing for sowtpnllqqrrvjpknjptowuuskmvm
        Testing for ngkqlunpejsrksilttphgoriuhjqmmo
        Testing for jrostmtsmnolirpkpqmniqljk
        Testing for jrogrlplqhmionqpgknihkmnj
        Testing for mkpomlpviqnjgqnrglkhirjho
        Testing for oqmjmskrrkppllnojnpsq
        Testing for gflmfnojnlgoqikkhmdipjqph
        Testing for tkijukjlmmsnvkpoorspquvrwnilwqt
        Testing for mjlpnsktlrrpomttqonkqsj
        Testing for onsnlrkpqtqprtomlsmkq
        Testing for mifhniogljnhkgkpjoblfpm
        Testing for luomqudrwtprsnknvsmlpoktqwv
        Testing for jhnmrlrkpkhqmpiolqnroji
        Testing for nihggkjpklfomhpinojml
        Testing for iglgkpjhlojhmornqknqmriqp
        Testing for snmsqmpnfolorptlrkquutk
        Testing for imqjokhgmhgrnirnkoqpljjpl
        Testing for tnrijjfniohstposqlhmrkklggpqmfs
        Testing for prjjqhslsqkntrkihlmkmpntooi
        Testing for kjrtslnstprmldomkpquiuonqij
        Testing for rfnkliognrliqqkpommhgpjlhjf
        Testing for tponnsmqvyxmkyutlxvslwkpqurqwor
        Testing for jkvrtrulmzqovpnojkmnssqlput
        Testing for koojqhkplllqimnimjpnh
        Testing for tslomnktpoqijspllnjirmqrk
        Testing for ikonfjolmlfhgjmgnkihi
        Testing for gihnoiphrjmlrkkgqmjnolpqp
        Testing for mnnmlzjsrtktokrppjqqols
        Testing for ormqlmnlkvnuustrkjvtsoqpp
        Testing for ijpoankqmspjlmsqrlnohkihr
        Testing for dkjorumkmsjlntlqnqrstuopp
        Testing for ikmjqbljpirqopmknlorn
        Testing for lmkjidqkhlqjmoonhnppi
        Testing for phimmmffgjhrqkkljnonlporigq
        Testing for qqtbjsutkuopvllmnsvwkpwnrromj
        Testing for pqttsnsrvrwqmpkkvlmoujowxxunl
        Testing for orsulvotvkprnluuqpktsmqnm
        Testing for gmffkliohjijnlhkimngo
        Testing for trjklmutquskvvnwpsllnrxjqxwopmo
        Testing for mcrqonpvtjimrvlptlujsnksiqoku
        Testing for nqoppsklmrkjtnrjtblomsq
        Testing for ntpnrjhkiilhtmopkjqugolsqwgrsum
        Testing for gwkkqtsslpojruinmvijnptmoqurlwv
        Testing for uonoquptjvmtkjpilnsihmlvhqkfrsr
        Testing for lmrtoostnmspkhpkrlnqq
        Testing for fnkkmnjlgpgphlpoiihfjmo
        Testing for jsvpotnlrpijoqqmrktnswuumiklv
        Testing for xkulorxwunsptsmvqmrjmvjpnotkwlq
        Testing for iliktjrpnlsshjkgmhxnpgmqroqto
        Testing for koshorsinqlppmlmrzkhqinjj
        Testing for prnrqfsmqjostktjlonpmlk
        Testing for jmsirhroniltjhnltmpsqpomkkq
        Testing for jnusmrpikljotmiolwwqvsputkvnroq
        Testing for gmigthqpuimitsouprohkqrjsnllkjn
        Testing for tonjmmtlqknvpkqlrjropss
        Testing for jmokjnlwttqspprvlowuvsrqmknixux
        Testing for opkoprjrilbhknmiqqjmnlh
        Testing for nlsmoljqrpqiimknpjkro
        Testing for mrnpstxmnwutprskvlqxopwqluvko
        Testing for lvppsoqjtkunlwsqujrmomiirtwvnkp
        Testing for mmqlkrjuputnljzsoskntoprq
        Testing for dkhgffmonohmjijillgkn
        Testing for opqmjmnstiktmsvukqjllvuirnrop
        Testing for nktsrpronulomkupstmlqqm
        Testing for klmorqobmtjprqlnssjtknp
        Testing for hksjmiqsqhnklooomlprpinrj
        Testing for hrpsolqpqghlgmkkrijnxnsimjo
        Testing for ikojkmlqhploqninjpqmh
        Testing for tplqkpmkmnlojirrdiqnsotsj
        Testing for mqlliqpknnhopjimohjkc
        Testing for hjqlnimpmopjkkhttlorqirsins
        Testing for qlsjmispnrogpgkrmhjhnpikloqtt
        Testing for tqjgnglhnrsiqtoihrlkppkimsomj
        Testing for ycnmsovtuqqnpuploswkxlrymwkrvxt
        Testing for rxxottknswvwqqkrmulwupomsjljnpv
        Testing for ormiilhphjnsobqlmkgnrjgspqtkt
        Testing for sllstupnonrmkprmuloqqtk
        Testing for mtukmjxpjnpstronswcwukvlorqqlxv
        Testing for motksrslorqnlmptnkpcq
        Testing for moohlinkhgkjjipplqmnmqg
        Testing for qnvkkjlvjsrmpnuuostrlobmpqt
        Testing for ljkkqiunomsmsptrilpgtrjquno
        Testing for ghisoursqumpitjtzjknllpqrhmkgon
        Testing for iohngionkkgllpmhpjjmy
        Testing for ipjrlmsoqnlnopkqmutjikrst
        Testing for nhqiukvnipujpsmolkthljrrqtvuoms
        Completed in 7ms
        You have passed all of the tests! :)
*/