/*
        7 kyu
        Vowel one
        422494% of 6906,462 of 8,284user60293331 Issue Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        vowelOne
        Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

        All non-vowels including non alpha characters (spaces,commas etc.) should be included.

        Examples:

        vowelOne( "abceios" ) // "1001110"

        vowelOne( "aeiou, abc" ) // "1111100100"
*/
function vowelOne(s) {
    const vowels = 'aeiouAEIOU'; 
    let result = ''; 
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (vowels.includes(char)) {
            result += '1'; 
        } else {
            result += '0';
        }
    }
    return result;
}
/*
TEST RESULTS:
        Time: 736ms Passed: 100Failed: 0
        Test Results:
        vowelOne
        should work for some examples
        Completed in 1ms
        Random tests
        Input: "A~.ieU0'oi\Eu:*uAJa`=]a;!U`EIi"
        Input: "uUEIu<,)rUZAOI?^iB'OeeovY)eo"
        Input: "U'ReVO9w;E(*nPU?AOi{u. ,<iaO^"
        Input: "u2+`1&&1-joI,e[UAoPUI~a^I_uoCH"
        Input: "i=De/Tn:^IoeefOeK7Xe8\e$e"K5"
        Input: "ae$3AO$IA4lE7[AAo5hiAai2O>#8t"
        Input: "I/1aRIiIeUIeqa:UNiCyE,UonQ=A;,"
        Input: "oduerc}Io@y|;aXAuAUiZu'a4fiWUI"
        Input: "oOCOUMe~5Wa-es*u%itEoBOiX=A1U"
        Input: "U?Bal'oe8UA6gUU#E\>SO^aIeaa2"
        Input: "Eke ]UPiEO8fUuojIA;neAO0WadpU$"
        Input: "Aio(U=Ve=3oZ.mOgAOaauO!UUioer>"
        Input: "E,]QZa!d4ocQoOA=L:AJ/3OoAIA5I"
        Input: "ojoAWEd^U%RP6Oi&\u66AGPo>"
        Input: "iuiikiCaei:P]o\>ZA_YoaoO<"
        Input: "AUIMcZ[AIZ#aaAiuNIIhuaEeexa7oI"
        Input: "AIcAreg}gOpbAEUU&oiUeaO.ILi@i"
        Input: "IOnKOcPOQ5iUBi:g)KAIuiEE)UUZAO"
        Input: "i%oNo~i}e2!EEx8UrEU-U>voEjnSAo"
        Input: "aoq5(oBUy4o3<:sNIuOTee}[uo6eO"
        Input: "IanA<u .aKA[RebeEoI8mi4ONI`Uif"
        Input: "EAXApj.UI*Un1!brVAO^TcWue(EAdE"
        Input: "E,F]psZiaih&-RCOsO'wdyPOTlt{"
        Input: "I/EeIEApe=oOIJEA5>lEe;rE$IE&jA"
        Input: "od+o7eu1{lkx}lNEXCAD5hiRusE+uI"
        Input: "O2<UITAA)aaO%a_oIWCa"oARnuE"
        Input: "uAA+AEjye1kOBMUP$e[AaADd:I"
        Input: "I,|qu"\$dqAmO1oUe3y]o+EROE"
        Input: "aa>oDuscH1}KwA[EaiersUeE^LU"
        Input: "iI]mei<UAIeOOAeO+eIua1XTeI%H&"
        Input: "o_$LAUmA>eOOoeO8&$iZ0lA>ObASAs"
        Input: "A%aakEdSipUf-VAoauagaDee-DOaQ"
        Input: "OU(AOwOAIe*eio*Ea)!@eEqqkm1GGa"
        Input: "AOE&O=fUC Ooe)i2I2XConO4UQa*}"
        Input: "o^aogI_O`'E~_AOA\0jIUU-e=coipe"
        Input: "U0uNaiuOO(FUtNHEEu_(KewzXuAE"
        Input: "Aa+oV:AUiUY%iSaI3xOonuS&<Eu?0"
        Input: "eAo]ucu.oOeea8!jOpLHuyeAIdP?gW"
        Input: "er'9o$va^("G!a}XaM#o'AUuFuzeR"
        Input: "A&hO7auU+u:EZUa=E;b^uE6OHYbY;"
        Input: "uAeipw?{FoeuSB >oioUuiAuPH>3C"
        Input: "OAuI+)2bUIrAaoZu{#AEuw5AwiOO "
        Input: "I!E/H]iM7EEa<4UIaU6rieuE Urb%T"
        Input: "I_Eeo=fdg~^uoIIoi_ihXIkuUai 7v"
        Input: "oOU'O_&/QIu=EU2n~UOUPEweaOUFUa"
        Input: "aI\ <PE-SHA-luuaOsGEu|~+LEz$I>"
        Input: "Uxa@oEapIUEuYor&ai4CKIACdR9IEE"
        Input: "ezjFoCeMAve`OZIiAI@/U?HIOA%OO"
        Input: "o}Ic%I-ootPUhuA`nIKuvIgEOI .O"
        Input: "oOb)`e1ioeAaaq}OmAWHu{o]43"
        Input: "IA:I"AE0+aeen'AoeiGesdUCn@riBo"
        Input: "UvAAEiEhE;XeluEEVxieO/{H,)1Ecu"
        Input: "IoeA=Iaa4BuRAcZl//WciLFuuaii"
        Input: "AA7<&deaZefuveu wuK)Lw>+f$,+aZ"
        Input: "OzlElpTaEA-;U@aAOupc3aUE,VU4QA"
        Input: "i[kzIYIFAUnqFo5ii2UUO6U9% r"
        Input: "iSi)a*BoIEAQN\@auE"NuoN$&ZAEE"
        Input: "EU?I2I~Jau V}Iua_U',iA"
        Input: "u4y~USRAF@lVu[eNEP$eID]OE]3E<a"
        Input: "uO?oewuOe0Ef*I/RE\!EP*,Ao@co"5"
        Input: "UuAceOiuxaNa>4rureCKeiAXuEIU"
        Input: "aaoBSAOOw]v5J>UUa8N<EAbEwVxfC"
        Input: "E&AriOaIuOeaJ8`UfIIA%.*xIUaO6("
        Input: "iF.iOreoAiLIiouU#EaEaIoi\o"
        Input: "EA[O(~o'O(E3|?e9K9|uheOO^o`eZi"
        Input: "E<iE*iAUGisc53aouUAuuve%zvOdiz"
        Input: "IzOa+ueo&a]u{jeOiao)*EAaEgU&%e"
        Input: "A;AuuqEa":9aD<O)Pu2)[FjOPJuR`i"
        Input: "ahpyaiUoKe0E2PO^QUu+ieMtnIoE"
        Input: "O.~o6AsuQze`[aoiuAa_?slo6AbDeE"
        Input: "a1E8,YWAooJUbA}`-E}[o_}eeixH.O"
        Input: "UOESRoe"!=OIG[ZeET  S!eioui,U"
        Input: "aUuORaG*OtsAoe3aUtoIuouio]=Ej"
        Input: "uUORP6HJ\kaJ,Ep~a|iOZ1lEX*OpqU"
        Input: "Oeuu!aO=<.aiaaso\:aoM<'nOiE>."
        Input: "EuxCJiEI|I-aaeaaG,yjUOs5PoXIYI"
        Input: "UaEyerIAIMAiMaOIO]AD~!ie4+,Qeu"
        Input: "uI/Dooo##IEXA8oaldsI#u#oU9aa"
        Input: "a=Oi0aIU}9O{85UI>OEweu}URBmeUI"
        Input: "uAa asOaaonE9aeOd=+ZYao_sAEEZe"
        Input: "aJIUE;Eyid|zaAMi=wU^hDuEAFPAY"
        Input: "Aube'5e/U>uaaEoo\OcsoIE=RO=GNU"
        Input: "ihiAA{=Gu9w(d\uB_AjoiaIaip?Laa"
        Input: "UuoL6iUAiu4oEOIO~dnEIOhaaEvee"
        Input: "aIeo%uI9aa.\u!EboqeUoUvf"
        Input: "u/lN{Uuioe#+MeL%E&oyoUaViWuoU%"
        Input: "UVNbu>^NSASeT.q$ihEeauO&!IZ"
        Input: "U1NaB.u[AOOOohauye(E6"EeeUo+a"
        Input: "e>1wAzE1UxidOIa}IA$a[IxoExOIjU"
        Input: "i}]we}aSUu(Ej;Ouae y#a%KeO+/ui"
        Input: "AtA;OaupU5(E@MfEACbsUmIO$os\a"
        Input: "eE]5JQUu^UaCEi,v,!/#U&.KwG "
        Input: "aU(3.Ie^u;EAu>eh Uu3eAQCiEpu9"
        Input: "UU"UiCELUU$aOEOP9nV e1U2REea"
        Input: "U2wEI|iyitIniasaoEF^r?Pk40U"
        Input: "aZ|OwJue^EmYOiT;[AO4)}JujNiIav"
        Input: "aUwuEfEaue:Eo=uieiV6eod)ezO=dc"
        Input: "O'IzjOeOiEkUADiI8BCOII+i4Ti+A*"
        Input: "IuoKu|ordVOaeai@aeOM(A1oUU8EA>"
        Completed in 3ms
        You have passed all of the tests! :)
*/