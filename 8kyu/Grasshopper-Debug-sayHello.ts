/*
        8 kyu
        Grasshopper - Debug sayHello
        1483887% of 4,025606 of 42,508danleavitt0
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Debugging sayHello function
        The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

        Example output:

        Hello, Mr. Spock
*/
export function sayHello(name: string): string {
    return `Hello, ${name}`;
}
/*
TEST RSULTS:
        Time: 3067ms Passed: 101Failed: 0
        Test Results:
        Basic tests
        Should pass basic tests
        Random tests
        Testing №1 should work for kVOuNqUznv eCqMvx
        Testing №2 should work for cBMUPcW
        Testing №3 should work for eEftAPVnAmZqTDAAPOTfm
        Testing №4 should work for tHs
        Testing №5 should work for .
        Testing №6 should work for vONvRETxEuSXz.PzWVMbd
        Testing №7 should work for FytQHdMBjkZXKxByOVnBufvag
        Testing №8 should work for bcCy
        Testing №9 should work for Q
        Testing №10 should work for IEmUCUynsM
        Testing №11 should work for IHYTRGwatdfGffudCVfuGlR .g
        Testing №12 should work for tG.
        Testing №13 should work for SVug.BybSpwHCYoYfimfBniqsVeZ
        Testing №14 should work for SfIiAou.YVHHXbyf.DivUzn
        Testing №15 should work for bs.
        Testing №16 should work for v
        Testing №17 should work for .VDoBZycLZIBtiDxp
        Testing №18 should work for bdM.paJVZcTQyyPRSqH.bZYv
        Testing №19 should work for iigNuJAzgbxfEQfNWNUjTDlk
        Testing №20 should work for SgVThvdcxpLPkT.ZkZbtu
        Testing №21 should work for kT
        Testing №22 should work for ooiTa
        Testing №23 should work for OcUxhqCcBtEnnqtZ. gKPAM
        Testing №24 should work for MNQnehRCCIiLQfZoSYUqPztpBIfqX
        Testing №25 should work for cmoXexXhJns.
        Testing №26 should work for QRmNSDEJTleVSjbXSQWmPdTFIqC
        Testing №27 should work for DyJMchlH syotafAYxcLPpN
        Testing №28 should work for vdYQTDgMvBAp
        Testing №29 should work for XNxXQgPapgdURP
        Testing №30 should work for LqygNFhtPCypqLp
        Testing №31 should work for vF
        Testing №32 should work for bYDOp.nGTkDtbubsyLP LmFS.eEgb
        Testing №33 should work for mADKyGsIjtyTPaYIo
        Testing №34 should work for cjMPOpmPkHBCqnBJuyUwflQ
        Testing №35 should work for ZK.
        Testing №36 should work for rEYLNPLaruzKEJ Vpte.
        Testing №37 should work for DTHQRA.hSQDbHki
        Testing №38 should work for UR toSyWRWKCwEQ
        Testing №39 should work for aFYkNdOzqsbBKtADl q
        Testing №40 should work for myRHNQuiInPmP
        Testing №41 should work for IRFqFOCQfpaaszOKMXpobO
        Testing №42 should work for i.
        Testing №43 should work for vXoa
        Testing №44 should work for BnHmyiJHDn
        Testing №45 should work for qDNkycYXa.dr
        Testing №46 should work for nuqEjJpPgSWdtuIrip
        Testing №47 should work for p
        Testing №48 should work for roILnoTsaf yzNOQZcaiFiTpsZh
        Testing №49 should work for UjhwpCVQMfRcTMg
        Testing №50 should work for  NXXn
        Testing №51 should work for VusrGHuAjBZgfrR
        Testing №52 should work for hodhusITwZneHbE
        Testing №53 should work for QtljOdvMZfCWlHKjOCdPn
        Testing №54 should work for jKkQaggQ
        Testing №55 should work for RkKCWEqRPYSuMmjBf.
        Testing №56 should work for GCZGOxPLT bW.GE
        Testing №57 should work for DtExzktykAKpUmHBCMGqJfkfRj
        Testing №58 should work for hPWElSIPzpbZbaocYgx zfEyImDMGE
        Testing №59 should work for uzxDbhBdS
        Testing №60 should work for NERgFUklVtDy x
        Testing №61 should work for IR.kzMYs
        Testing №62 should work for bABdDmjiUvCU gZuTVtEjMPfMDdHbn
        Testing №63 should work for .NWInvl.xlcssczq xI
        Testing №64 should work for BQhtnHibkw cRdx.maJXRs
        Testing №65 should work for QHefkrbgX
        Testing №66 should work for kWhBJFhGVQK
        Testing №67 should work for Xu.StQLODToSNqOh
        Testing №68 should work for ubVWDHOmrGx
        Testing №69 should work for RZLgUcQqykksSxAUCyHJFNbhp
        Testing №70 should work for HVmYgKwnwMImk
        Testing №71 should work for vq
        Testing №72 should work for IJjoOEHL
        Testing №73 should work for HJMqUoIqgrCCyWrGmjm kgse
        Testing №74 should work for pmDoNzIofbEPXrzBxD
        Testing №75 should work for YK
        Testing №76 should work for DEObqPbWpPmOnLSKtOOaR
        Testing №77 should work for tJhaaUDzQXFV qZh
        Testing №78 should work for izxwKXEOTStYFxopJmZeFqid
        Testing №79 should work for xmKcib
        Testing №80 should work for ViMRt. jKEvIjObcWTZDyTam
        Testing №81 should work for RlPtbAygECD
        Testing №82 should work for MGeexrEBkUqESertXSkyJXkrresLL
        Testing №83 should work for aovMPCjvRDA kxZQPaW
        Testing №84 should work for IlcTSKAuNhhdxbjqArPpKYJ
        Testing №85 should work for dDwNE BWIHZJOKdqpJrI
        Testing №86 should work for egsGBAIYmNQEAGWcLvcGOPpRy
        Testing №87 should work for  nEntQus.mFwBEeeov
        Testing №88 should work for woIXHohv
        Testing №89 should work for YZKvdwXGFjnQVPeiLAO l BVM
        Testing №90 should work for eOFFVMgozY ReqdrDK
        Testing №91 should work for YfiU
        Testing №92 should work for mlDPFdW
        Testing №93 should work for AN EFXInV
        Testing №94 should work for WvIrzfcsEiV
        Testing №95 should work for tKwLsdNGudSIXMTvY.BnO ZXRT
        Testing №96 should work for kDnlXKNYcsg.XK
        Testing №97 should work for UnsRYaBE
        Testing №98 should work for IREzZTFFOiGE
        Testing №99 should work for EXnWWONViubHREqgH
        Testing №100 should work for wQMojjJpujDDkOJQhYuXJvLLW
        Completed in 3ms
        You have passed all of the tests! :)
*/