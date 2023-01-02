/*
        7 kyu
        Disemvowel Trolls
        233343589% of 23,20098,712 of 246,830osuushi3 Issues Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Trolls are attacking your comment section!

        A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

        Your task is to write a function that takes a string and return a new string with all vowels removed.

        For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

        Note: for this kata y isn't considered a vowel.
*/
function disemvowel(str) {
    // Use a regular expression to remove all vowels from the string
    return str.replace(/[aeiou]/gi, '');
}
/*
        Test Results:
        Time: 793ms Passed: 101Failed: 0
        Test Results:
        Basic tests
        Testing for fixed tests
        Completed in 1ms
        Random tests
        disemvowel("BQjraJolsSg vySvQ QmJU msUErDUIhIeKs hlEoOZuf") should equal "BQjrJlsSg vySvQ QmJ msrDhKs hlZf"
        disemvowel("ufqXPnXl sz") should equal "fqXPnXl sz"
        disemvowel("xNV hmSipivpOiauiiz IYCxPZI bX FuSUSEHEB zaUBM ZUvsGOtdTpcGLRyew") should equal "xNV hmSpvpz YCxPZ bX FSSHB zBM ZvsGtdTpcGLRyw"
        disemvowel("RSpnHlohgmeAJgjvvw yWEIt BukVTomIuJsqqxzEvOe iUvVKUGC sAIPUeupifvprCdpN puuAsuIAb") should equal "RSpnHlhgmJgjvvw yWt BkVTmJsqqxzv vVKGC sPpfvprCdpN psb"
        disemvowel("oCh mfjItrOHnGBmUWDpyI JIeglBywc EbLQsIWcFEq PEUoenEsuETMX") should equal "Ch mfjtrHnGBmWDpy JglBywc bLQsWcFq PnsTMX"
        disemvowel("cIXEUsBKPEMdOWeM PBGCx hGTWeZNiguVhSfF eHUZEchJAFUBCHigOOE TFBykUIhzMGEeUX XzgXlZPoP oLmOQDsDoOsImkBRba wLsUiDdMdUoOzlcgORI IxAei APFHew") should equal "cXsBKPMdWM PBGCx hGTWZNgVhSfF HZchJFBCHg TFBykhzMGX XzgXlZPP LmQDsDsmkBRb wLsDdMdzlcgR x PFHw"
        disemvowel("iukWmaIWHsKT") should equal "kWmWHsKT"
        disemvowel("IQAgWoHxXFJAtjpMIes utYkEEelAL vzoORusbjUuvtoECVZB DVDIB wnUIWQaQOgBIGCqWtrac DZQmTJNaUN Muy jpTBTSxijj cRYi") should equal "QgWHxXFJtjpMs tYklL vzRsbjvtCVZB DVDB wnWQQgBGCqWtrc DZQmTJNN My jpTBTSxjj cRY"
        disemvowel("OgmJJBuwS slmHgrCxDxefwxa ZrLExXscIEOFoePSu hBtApP") should equal "gmJJBwS slmHgrCxDxfwx ZrLxXscFPS hBtpP"
        disemvowel("LpaZrEHsfugT qAjtYhGTHeASqIseS AUAkczwpoBbaHVHdK eKgKHrCaCAwvASpEdQ AlGFMZXevidUqcREe") should equal "LpZrHsfgT qjtYhGTHSqsS kczwpBbHVHdK KgKHrCCwvSpdQ lGFMZXvdqcR"
        disemvowel("nYUyAWgwuvuo AvEOgsnIvpUEgj") should equal "nYyWgwv vgsnvpgj"
        disemvowel("nnJREI uEUhnaejJ WaEUsYMIRUiQO NZTPCGa sefLVV GAmQ") should equal "nnJR hnjJ WsYMRQ NZTPCG sfLVV GmQ"
        disemvowel("xAjjuRSxeVNOvzieUYlt fCwojeolljxvpg") should equal "xjjRSxVNvzYlt fCwjlljxvpg"
        disemvowel("NTaeqAXXkmOWZmxIf dwgxoCUOxO zbsMiReFnDIBVXDB FBkXUioUxQIKBPRhPit duUjwovUEqOIw IL zGiJdx WiVOe") should equal "NTqXXkmWZmxf dwgxCx zbsMRFnDBVXDB FBkXxQKBPRhPt djwvqw L zGJdx WV"
        disemvowel("LUAbTGlWYESmMoFB j LZ") should equal "LbTGlWYSmMFB j LZ"
        disemvowel("csrTUJZprMr GzPBUi JzToofDeeuE Fx UZSjDOlwOo uTrbMDlosya rjEdDsKres RuJAazyauPtJey") should equal "csrTJZprMr GzPB JzTfD Fx ZSjDlw TrbMDlsy rjdDsKrs RJzyPtJy"
        disemvowel("SVSSSXOJlJqZMbM HH FEAEBxciGpW OucAJyXVjVfptzLeuE sEVEegsjqwxAZSEGgcAa ZEjKpOHaimeqat") should equal "SVSSSXJlJqZMbM HH FBxcGpW cJyXVjVfptzL sVgsjqwxZSGgc ZjKpHmqt"
        disemvowel("YZmGwOlziz oAyfTDSlfEohgW fOWHsiAQhMIw") should equal "YZmGwlzz yfTDSlfhgW fWHsQhMw"
        disemvowel("ZRXIGuP SeLRvlNtIwAifdDMpBi pMJtJvyXvcL HScJqdiBEBBo nKa") should equal "ZRXGP SLRvlNtwfdDMpB pMJtJvyXvcL HScJqdBBB nK"
        disemvowel("hOhSopwspoPJvOOcRE JaqWALmDGaeHViAT iHCDVeK") should equal "hhSpwspPJvcR JqWLmDGHVT HCDVK"
        disemvowel("PAYz i FZIToCiapuUoxC aaEKtpOFNAegG") should equal "PYz  FZTCpxC KtpFNgG"
        disemvowel("Zpyufz hIdmiyefpo V ZeBitPmJ yrKIErRaqXqnOzkKJGo pznRQMUtAKAN YKJhaaUiZEhC cgEYO") should equal "Zpyfz hdmyfp V ZBtPmJ yrKrRqXqnzkKJG pznRQMtKN YKJhZhC cgY"
        disemvowel("AINkOqAEDYDKwZgwaO NzLkCsoBeke YZFz tLTK mAodjoeChAlUBHxE a yguTIcIuaQEcBWAmCi XTVKLowKuYurHqtIN SPUImedqbXupM") should equal "NkqDYDKwZgw NzLkCsBk YZFz tLTK mdjChlBHx  ygTcQcBWmC XTVKLwKYrHqtN SPmdqbXpM"
        disemvowel("tMumUadujXaEar FOZW OPCSUsNHj HWoao CUGovIqEu RuZ RtbMwOlIup LVZIodTi") should equal "tMmdjXr FZW PCSsNHj HW CGvq RZ RtbMwlp LVZdT"
        disemvowel("PePMpIAWQoXwqf qOqheyWuOvneoO GJOEjDBVvEE ipuqSeTxybWGvfoFLoT GRUaLP aAghciMvBsYyFyRIjYgL FTt uxL") should equal "PPMpWQXwqf qqhyWvn GJjDBVv pqSTxybWGvfFLT GRLP ghcMvBsYyFyRjYgL FTt xL"
        disemvowel("idvAZIUEarxSObfU NrYibIEkleVwT qzzzYCeoJDEMhEcZ WaNTuSnPKbJYawAafzZJ HvaesisROObOlkED") should equal "dvZrxSbf NrYbklVwT qzzzYCJDMhcZ WNTSnPKbJYwfzZJ HvssRblkD"
        disemvowel("ixieUZvlsgoYSxOk OQHKUiYOaNntwTftEuy eASkpzfsU dBVUEDacA YdnYDnzGFcPkqgPRtI") should equal "xZvlsgYSxk QHKYNntwTfty Skpzfs dBVDc YdnYDnzGFcPkqgPRt"
        disemvowel("aKyiFCLlAK QUoxw") should equal "KyFCLlK Qxw"
        disemvowel("JoXBXaEuibaCC AOXQcw LJDOTED awiCZ tnNAdYKKjdWO ZBYKAM") should equal "JXBXbCC XQcw LJDTD wCZ tnNdYKKjdW ZBYKM"
        disemvowel("mUDnDiiEVlqdJ s EIOQeuXbyWjUMia x Cjo vjYSfowIfa kerzxlPnjAfuh mdsuxEhtNX KIRIieodPuFQolV PhOmKCZE") should equal "mDnDVlqdJ s QXbyWjM x Cj vjYSfwf krzxlPnjfh mdsxhtNX KRdPFQlV PhmKCZ"
        disemvowel("ZewLTLFTfer zI Kj cOqNYuHkGOsYBhvf") should equal "ZwLTLFTfr z Kj cqNYHkGsYBhvf"
        disemvowel("PNxXlzhFAlu") should equal "PNxXlzhFl"
        disemvowel("ZiuIIcIAoPNa dUOpNoRtBEPLrVtMZKHf AUaorEYQiGVl JtOEreHPhUiUTzWuTuZ P nYrceBXUtRsrzHNSUReQ ToDsDNrdNWA") should equal "ZcPN dpNRtBPLrVtMZKHf rYQGVl JtrHPhTzWTZ P nYrcBXtRsrzHNSRQ TDsDNrdNW"
        disemvowel("UK gnIJzZZviWLQDKUEErRu mWwZurjHSIo") should equal "K gnJzZZvWLQDKrR mWwZrjHS"
        disemvowel("rRMBpzGXeCzsiaDHBmE") should equal "rRMBpzGXCzsDHBm"
        disemvowel("soYZlN VEiYInOQgEKwByCZAUe UhFMpszdgaYOUEncD IAwSONcO lDHLlIoeelVewU") should equal "sYZlN VYnQgKwByCZ hFMpszdgYncD wSNc lDHLllVw"
        disemvowel("wDBXDXbtobULbr OpadSOvjdNgEaquNOE UDucMvWWT") should equal "wDBXDXbtbLbr pdSvjdNgqN DcMvWWT"
        disemvowel("WosoJjtOAxaoXgl HrfnyEhEWROdaxtgO NgrnKXWHKRY bIOhZOaWuEmOxZtVgdpa AMAmqlyEITLPFHAgH") should equal "WsJjtxXgl HrfnyhWRdxtg NgrnKXWHKRY bhZWmxZtVgdp MmqlyTLPFHgH"
        disemvowel("uTFKEW UxmQgPlPoP PoOIrJEIfIlouZDd pGdKNInoCSaxGnlDUI aSUHLcxYJMOOHJ") should equal "TFKW xmQgPlPP PrJflZDd pGdKNnCSxGnlD SHLcxYJMHJ"
        disemvowel("CyuNOC QiMSACbCdBU ZGiLmBrjF AXBSVKx") should equal "CyNC QMSCbCdB ZGLmBrjF XBSVKx"
        disemvowel("sULdow") should equal "sLdw"
        disemvowel("eJUHbrM dVeZaotbo LIuEAQ MOngR m NcDaffhVZHnpe hwJbzkAsgyowwUQ AQxIXZGukdOAhO BjHYy vSXoeu") should equal "JHbrM dVZtb LQ MngR m NcDffhVZHnp hwJbzksgywwQ QxXZGkdh BjHYy vSX"
        disemvowel("WAjdeP XAIBQIjd mMyoiexEDoTUU lqjVOPgOSwIkgvE JuqbH OYaEHrauaaJTiZicX t YjFGmZosRFtEpGsyAo fLdNML JLEeegOLTN") should equal "WjdP XBQjd mMyxDT lqjVPgSwkgv JqbH YHrJTZcX t YjFGmZsRFtpGsy fLdNML JLgLTN"
        disemvowel("FV EUqSauQbfn sUl fiQUxHVuuIjOdUCltei BQbuUIyebiP jGUZrUimyahEo Zkb aLLTtgyHA iAnsRa") should equal "FV qSQbfn sl fQxHVjdClt BQbybP jGZrmyh Zkb LLTtgyH nsR"
        disemvowel("gjcDQfnrVDwjISI AmlHSIcBAvdtp s dZHEuOHJHilhoIJDJaT bMiAqFhLeraouTtNISpu UMgLRVWIL iCCOTSUFzH MosDPgqpeKLtWguAT y o") should equal "gjcDQfnrVDwjS mlHScBvdtp s dZHHJHlhJDJT bMqFhLrTtNSp MgLRVWL CCTSFzH MsDPgqpKLtWgT y "
        disemvowel("ypeixf mXveXUpWOxJyAAArv IWb VBURdY t APUxbDQbIEonzcERbiCF TmmX C UAS SGqQWHcLyDnpswmE") should equal "ypxf mXvXpWxJyrv Wb VBRdY t PxbDQbnzcRbCF TmmX C S SGqQWHcLyDnpswm"
        disemvowel("gOiOtmj NUqtRvwUl IeEpfbcXoAg DEAATHtxwuIUpUBaQZY XfrhWpXlwiveO OOBKtGSnSpZie QVtObQ tyGmIya") should equal "gtmj NqtRvwl pfbcXg DTHtxwpBQZY XfrhWpXlwv BKtGSnSpZ QVtbQ tyGmy"
        disemvowel("OaPIdRGO fiuyYUxVBTVAfMArZZzY fnugkidvQyXAOaBMvZW kYNaoi") should equal "PdRG fyYxVBTVfMrZZzY fngkdvQyXBMvZW kYN"
        disemvowel("eEgFUjb rUichtZHTAnvHTc dkpaLvCfe PazIloIMaiIxPzV UjuIVTTwHiyCcuIGkZ aceMedpWmNRAMRq iMaemjiizYGb qaDUUm NMAXKYNuVME iKnEeLvleJ") should equal "gFjb rchtZHTnvHTc dkpLvCf PzlMxPzV jVTTwHyCcGkZ cMdpWmNRMRq MmjzYGb qDm NMXKYNVM KnLvlJ"
        disemvowel("wpqrmGvE HfiAaSrYh WHuVn EZ Qv") should equal "wpqrmGv HfSrYh WHVn Z Qv"
        disemvowel("sostEVrF ugZeLcrFNw ahXZBVOMt MvE fWEuAaveHcL") should equal "sstVrF gZLcrFNw hXZBVMt Mv fWvHcL"
        disemvowel("aAKU QLGnPAEBEA XSy HsJLxFnADRQEXr hWqkoEmSH cceDDZaWgm Af JqSVICvJiGxuSh") should equal "K QLGnPB XSy HsJLxFnDRQXr hWqkmSH ccDDZWgm f JqSVCvJGxSh"
        disemvowel("tilyVPinPnYh pSA JQbaZuWj bhSVxXZgx oFSfsIrAOzkjKdBuX uQxAnEzYBL WbKIwvErTohdl ihTNrlJUnA rdmLNGQYvihI") should equal "tlyVPnPnYh pS JQbZWj bhSVxXZgx FSfsrzkjKdBX QxnzYBL WbKwvrThdl hTNrlJn rdmLNGQYvh"
        disemvowel("hJbuYJgGfVooiePJ oadxymYPyVOQ tSmnNXPyQd xOziEwwKDPuKRHN ekczVlm NY") should equal "hJbYJgGfVPJ dxymYPyVQ tSmnNXPyQd xzwwKDPKRHN kczVlm NY"
        disemvowel("nSEneguLO IEbN CfBuaeilVEsZxkXaAkCE vfEjf tcYhUbjDQoHuKeaUuae NUBENsGeKUNlpPS suGTDFhgOnTOIYe") should equal "nSngL bN CfBlVsZxkXkC vfjf tcYhbjDQHK NBNsGKNlpPS sGTDFhgnTY"
        disemvowel("HbIhJSiIMlcPbB mCUeu KjUqJlnGuLK OxCnUPstUIdnKtuUkTs") should equal "HbhJSMlcPbB mC KjqJlnGLK xCnPstdnKtkTs"
        disemvowel("oWrpoVaAAuYCwEpiiGUi fItrTnpoIdet VCIEUTvNabmA IPoRscpUIjXGEXLT oicEIh bdnubRqqCpQyCeViLOo OPHFj") should equal "WrpVYCwpG ftrTnpdt VCTvNbm PRscpjXGXLT ch bdnbRqqCpQyCVL PHFj"
        disemvowel("tZqNkFedrnTuzfyEaU aWlOGoWLmlCq EIQJOS dXvo z oymFDyIHfiTxCq OmrsQRJ WefGkeRClH") should equal "tZqNkFdrnTzfy WlGWLmlCq QJS dXv z ymFDyHfTxCq mrsQRJ WfGkRClH"
        disemvowel("sfAPeWWCJDqOcVuuus KUANX apQwJQJZEtnq qF") should equal "sfPWWCJDqcVs KNX pQwJQJZtnq qF"
        disemvowel("AEzpxEziqqrKEjuoFfA sgjWsALeli P BHnVSt oDHxpFaad ZtYUGbuBnIdB uKmdSwxvncYO IXIeciRaR") should equal "zpxzqqrKjFf sgjWsLl P BHnVSt DHxpFd ZtYGbBndB KmdSwxvncY XcRR"
        disemvowel("UjeeEPHTKAroUKc oV se TaKsdpopEKWSZyRKWF aJiOVQwR qjoOLUVAQmNWkaZQ XW") should equal "jPHTKrKc V s TKsdppKWSZyRKWF JVQwR qjLVQmNWkZQ XW"
        disemvowel("xioaMiQNYs ioAQhEOJ TrwIyiSoeoAOxOi UEy I cmf rYXHnCdGrAIdVTuoEm tzMRrbPPKhMswZZ NCcOAai ImvaJUxocelHuamHsg") should equal "xMQNYs QhJ TrwySx y  cmf rYXHnCdGrdVTm tzMRrbPPKhMswZZ NCc mvJxclHmHsg"
        disemvowel("nBzERptUHFvWuItEOs iaosEIEHuJuWNVwhFi jXZuSvm au cvk") should equal "nBzRptHFvWts sHJWNVwhF jXZSvm  cvk"
        disemvowel("I DWeeLOgkgCzuONlpWs") should equal " DWLgkgCzNlpWs"
        disemvowel("FgTAqNOONTUWU jnXpwettD kKe tYLl") should equal "FgTqNNTW jnXpwttD kK tYLl"
        disemvowel("UiP lOeccER xm okEGHJxmb caTHIdhJhaDuAOAv koiADcDPNHDOEImaki hTh IJxEkniXmBITwlOFUi") should equal "P lccR xm kGHJxmb cTHdhJhDv kDcDPNHDmk hTh JxknXmBTwlF"
        disemvowel("qaqOrOHaKbsdaah Tis bKujofUfbOYZls OUzYroDZjHCu SAKfgaGZFBaY") should equal "qqrHKbsdh Ts bKjffbYZls zYrDZjHC SKfgGZFBY"
        disemvowel("wbMKossbrRXMrIF aU oKU CXiipDmZaFjFTyy JbygzPcItsOXth nsIlzpYFrWpezyH U nRwPgV") should equal "wbMKssbrRXMrF  K CXpDmZFjFTyy JbygzPctsXth nslzpYFrWpzyH  nRwPgV"
        disemvowel("AowwCDYnfUiOeGAnQS RSoaBiCdy FTWUt imFBD AIwL MNlgdOjzEgQnxXWHL CiHShI pMYuhkpIqeOfga vWNzoqfehmIVxU") should equal "wwCDYnfGnQS RSBCdy FTWt mFBD wL MNlgdjzgQnxXWHL CHSh pMYhkpqfg vWNzqfhmVx"
        disemvowel("yrSZcRrZrez nEeVAhqoyWhKx") should equal "yrSZcRrZrz nVhqyWhKx"
        disemvowel("zlhe zlkMabETkaiimxlRLZDi R GerWROAyspsQ utGyWbahESRjuzNWIHt") should equal "zlh zlkMbTkmxlRLZD R GrWRyspsQ tGyWbhSRjzNWHt"
        disemvowel("ABNIRfaeMK yCFwETUUMHbczudEjuSH UmqUwVwBuSldbM HUXRJhs") should equal "BNRfMK yCFwTMHbczdjSH mqwVwBSldbM HXRJhs"
        disemvowel("ZWBmAoxRvUADaNAdsuEC sKcLArdTofCbUYzzsE sbfWaWN OUHOzglqZkOeqhr RZTaxNxKEnmoD aeO tLunUjn xaWizynPvHNYDiErVNU") should equal "ZWBmxRvDNdsC sKcLrdTfCbYzzs sbfWWN HzglqZkqhr RZTxNxKnmD  tLnjn xWzynPvHNYDrVN"
        disemvowel("OeIaUVvZsekEcyP") should equal "VvZskcyP"
        disemvowel("MFABNS E xTiVEsFnGfiWIMkUd SlOXVg") should equal "MFBNS  xTVsFnGfWMkd SlXVg"
        disemvowel("sCEcLBRbU xIDbRuewbKAfA") should equal "sCcLBRb xDbRwbKf"
        disemvowel("BInxoiusOXiUiOVv oEJYWyinKkOaUEfEyQeC") should equal "BnxsXVv JYWynKkfyQC"
        disemvowel("jaEGgBHBIoqMVvEZLd CqiIc VDYAlUaVUrAsjsDeUwNK LeUIuE Ea QINUEUkKgVHIn Ld RYOgpOQoClVuyHbiU") should equal "jGgBHBqMVvZLd Cqc VDYlVrsjsDwNK L  QNkKgVHn Ld RYgpQClVyHb"
        disemvowel("EqiePODgxhDTleUxPqCe bkXPpYTOSKRI VUFAIIPuVOwM QZpNpEbcV pvRTwkiDXi cQeHOKu OjRpetYhXkGEmRJ") should equal "qPDgxhDTlxPqC bkXPpYTSKR VFPVwM QZpNpbcV pvRTwkDX cQHK jRptYhXkGmRJ"
        disemvowel("sJMqXCSuOoR UHnOREOyuxNahwPeCEfo fnxeXYtAaAeOefVxEwl COYOYXDwdIUFhwa NhxGMirW aWQedvliWSLKJihCQP ul ZEe") should equal "sJMqXCSR HnRyxNhwPCf fnxXYtfVxwl CYYXDwdFhw NhxGMrW WQdvlWSLKJhCQP l Z"
        disemvowel("rjYUahVdOxLjDOTMyo rLVrmiHumepg fEbSUvZJQZD tDwLwGVsd AnNuBESa") should equal "rjYhVdxLjDTMy rLVrmHmpg fbSvZJQZD tDwLwGVsd nNBS"
        disemvowel("sAfjIAUkIhcjEdOQFkL LbXHCIUYiyKo JaoHDCO iuqlUOKqesZo") should equal "sfjkhcjdQFkL LbXHCYyK JHDC qlKqsZ"
        disemvowel("JgfhXmtnnXO ASOEeo robLnIKwbm JziACNqWFwliksDq") should equal "JgfhXmtnnX S rbLnKwbm JzCNqWFwlksDq"
        disemvowel("nUsENNgILjmEKJ oSENbB tzB lkiZbbrEn kadEpXpNvz") should equal "nsNNgLjmKJ SNbB tzB lkZbbrn kdpXpNvz"
        disemvowel("QETxLLIzPaEYOqUEFc") should equal "QTxLLzPYqFc"
        disemvowel("jMDeh BBDrRqdjdKOpeWE CAWaGsFiA siU E") should equal "jMDh BBDrRqdjdKpW CWGsF s "
        disemvowel("pwgjQWmzfOmiWUKotlze ypaOeouSSuEiLQypuAP IsnhTuAvEswROc") should equal "pwgjQWmzfmWKtlz ypSSLQypP snhTvswRc"
        disemvowel("wOcHoaIIzedbv HjNVAiG rUPRWE cPGCobIhyZYeZ BwWIkir AUanps eHDX DfVOzYulNgICoVLMi ansyliEXsG vUgXahJyWRZJVMGJGOIr") should equal "wcHzdbv HjNVG rPRW cPGCbhyZYZ BwWkr nps HDX DfVzYlNgCVLM nsylXsG vgXhJyWRZJVMGJGr"
        disemvowel("AbXiTkXlJuPa AoC JHWZODNasHh mkGrUsiIsLlnMzD") should equal "bXTkXlJP C JHWZDNsHh mkGrssLlnMzD"
        disemvowel("WbRqEyOkFLolunpZSi nDa IINWiVrAaDmT") should equal "WbRqykFLlnpZS nD NWVrDmT"
        disemvowel("WOeCiauIfJNcIFmIUbvX uvObEIwiOFzH lOuwVgoImQQoan WKoahw OJGyzDsyizpNuXXouff bkOKDOOfuUEEoNcrU") should equal "WCfJNcFmbvX vbwFzH lwVgmQQn WKhw JGyzDsyzpNXXff bkKDfNcr"
        disemvowel("FdIpBJCM affXUUcaqQ yLIyUEtdoEUPYodt VhgGyUubYImOCD WHIZIsvv") should equal "FdpBJCM ffXcqQ yLytdPYdt VhgGybYmCD WHZsvv"
        disemvowel("yzFQhxAMO wvtkzGbnhLsE DjhtoEsgCA RTLUerESEuRLI xfZqYUHuYBlEYU GMyOcfOtbxLLDlFtLBF") should equal "yzFQhxM wvtkzGbnhLs DjhtsgC RTLrSRL xfZqYHYBlY GMycftbxLLDlFtLBF"
        disemvowel("iwfUlAakcKoaWH eNpSBWGW NZfuGFAOtmbXak") should equal "wflkcKWH NpSBWGW NZfGFtmbXk"
        disemvowel("OIjaiDieEkNl uGoZsUDD pLePQDVqIFpUsdAnO DeUeUiPtmk WOOZGQI") should equal "jDkNl GZsDD pLPQDVqFpsdn DPtmk WZGQ"
        disemvowel("oOUsTOSqxw eMZQ BgIbkRaiufuTkiqw oTsULiU UTkOieUcuoTiBlvXDN eyazFtwn cueCiUnkod iIOgIdNgvBn s OhsLAQhYityDg") should equal "sTSqxw MZQ BgbkRfTkqw TsL TkcTBlvXDN yzFtwn cCnkd gdNgvBn s hsLQhYtyDg"
        disemvowel("dsaAhNfNyeOFiFhj UaNu wFjRPCNeeVBbeXXaqa") should equal "dshNfNyFFhj N wFjRPCNVBbXXq"
        disemvowel("StjMPnOXxpLtEcU") should equal "StjMPnXxpLtc"
        disemvowel("EZeJIAesbicwJ WuTNJASUIAbhDDqFOV iQMrkFauOgWVwkGwpqA zEodZAiFaxVg ckuoOwDTrYA fDXw wcDaMiEy fQH yvDrHitrHBtAugQumts TEylOnnFQCrdl") should equal "ZJsbcwJ WTNJSbhDDqFV QMrkFgWVwkGwpq zdZFxVg ckwDTrY fDXw wcDMy fQH yvDrHtrHBtgQmts TylnnFQCrdl"
        disemvowel("uoKELciedQy iulOJNnXEAVzo ikujiPdoOPCRxFj A") should equal "KLcdQy lJNnXVz kjPdPCRxFj "
        Completed in 5ms
        You have passed all of the tests! :)
*/