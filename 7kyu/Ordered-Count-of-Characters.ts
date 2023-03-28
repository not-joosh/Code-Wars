/*
        7 kyu
        Ordered Count of Characters
        3009191% of 1,517156 of 11,515suic1 Issue Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

        Consult the solution set-up for the exact data structure implementation depending on your language.

        Example:

        orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/
export function orderedCount(text: string): [string, number][] {
    const map = new Map<string, number>();
    for (const char of text) {
        if (map.has(char)) {
            map.set(char, map.get(char)! + 1);
        } else {
            map.set(char, 1);
        }
    }
    return Array.from(map.entries());
}
/*
TEST RESULTS:
        Time: 3065ms Passed: 103Failed: 0
        Test Results:
        Fixed Tests
        text: "abracadabra"
        text: "Code Wars"
        text: "233312"
        Completed in 2ms
        Random Tests
        random test "WXBJL7lMk3bbloqMY0TmpP1FbAv1Vc7O0RQMwoqkE"
        random test "K3tZbDS9s5SAwdtEfSAQHACgwVbAiOJwGqkKU3LpTHqjXZsnz909PEHX4ZMTk1He6VsENj1"
        random test "6mUsT16jqobfVcocN5QG6H5UX9VZTzt5Lb15VWpNY8nVyxw5addaa1IyfkUbAhDIr8ToBmq3ZkWlm7ilSABWPE1eRoRfDVQ"
        random test "AtdmOVtYyC86uek"
        random test "igj0ImXvdR1ndo7C7cUQZtsyDbMUyx38q"
        random test "09aVfbz1hKxjNueBdtXlmDCPei8rmaWny"
        random test "QAJlFWWaTTn9TB3641nXvbvm0bfkPJ7GB0rfaJ11iOdevdgZR67DDC2i055PjUXw1cHAfR04ECF"
        random test "1cvSNDkPKCv3jpHsIxZCseIGFrkZeiNuWuDJjE4tsYSv7jf2cMimHfh0e2n3dFUB"
        random test "PVFOGTeJeIzYHDmd2K"
        random test "MW4grmWtNrGRMSn6eVffLP"
        random test "kBWVOVNZEnoCcsHRIodxMf"
        random test "FYc3eQvO1yYDf2PgDsBEQT65HnP5dMgjOBBkFeaN0WoOYSb748JLItNvEvvUMUrPdmCjJuihG5Yju"
        random test "kEd0bap3rg007kCbAl0bzzioCdlccVpq0M6GphYBtf5BC3IbJy7XD"
        random test "yrQt0UA1uRMhtLeDRUrwEPWxFUiPZ348xdeOLyYDICjp"
        random test "U2QkGPeTG1BQf7JDmY9mHdbv"
        random test "Do8FIgJQaW9NPdHaNo63gOT9u4FfQzfJkn4q55zHm0xxQ7PMc"
        random test "xtG7B4ox2CoqSH7OjJkBLKgLscuzvp4gSXvrA7Py8QN9CFkp"
        random test "V"
        random test "kbofd3aMpXNrXwwzWniq2EIV99Zm"
        random test "fs52flENRQnOrOvyWli0LU"
        random test "0BLMBI"
        random test "Pw"
        random test "ClIG9DykN6hP0wqJ2dpfMFjikp3lNc"
        random test "C1oDjseJakn8TkRc8KrBTZgSPIVxBmrsFkaEqYVxP6IPjeWEBO"
        random test "xjIfPaRXUSPBxbfudOYAOeW0rFKox6Qmzv2VpNtr63CTtz72chrIq0Zw2RWEkI20"
        random test "HxG61l5XpNWTNa4jmjdgMOKrfa39c8YX"
        random test "pGnl6SsBEE1cb33WB3PW0fvD7SYzj1ZAUdK5onG03h46MrV5mvyw1"
        random test "Q8O5b1FzRL"
        random test "XXIwafiQxjeZTzjy0a0ZRm5"
        random test "tcw8eVKX8SNvLxIUdzW"
        random test "bSHnEfylNISnLqgdMhPJTDFECWlfizYA6Cp0wfk7NeLcRtwj23Ylx9"
        random test "Do0DI5D1oX5yqZVwamyhX1zRelpBO1oxjpxlXk1sPjFpStnqQ54wiileiFY7I8o"
        random test "SckoW1zCNnJ29SLqDr71vBBNClo1VnwylkLKnDv0xlHfr4IzQ3dVfBULjjnqXUOLI"
        random test "KQVEAljkB50SA0A73GB1u67eHNnKFA9Ou9FqNIUj78ThNth0RIp22jbBnOxb0VRN"
        random test "Us4CbEcAWtopN0g92"
        random test "wyymC8qgBcBmEEo0OgPlX2xcOmBouU2vQ"
        random test "FdTixEZZlPgA5SccW1ezKmqHkcoTnqRFyBKGLgKNkWQ1bU7QtLTJwz7AlCn1IPYIEWWOpWGsJ2Coo6edUB8QmpfktbklnD"
        random test "oPfJkTqWDs6TNUaV7KTPkzsgvOXFBTSW9CYozVPdkBUs38a651J6V5qb3UIoSEfP88W7BknBH8ZKkDEbl5Juyr"
        random test "6Oq4Q05U6Ij7T9eQpp9VlFdb6571EVN8pJPezTNn1UgLhfW0Dh2l0DH5R46xLbt6I8w2xiyjATlt"
        random test "Tv5x4eAYPUFKg4WL8s8tdDoYKpff7GU08gSyVMAWBCHVmMOPUGCnuQ4Iyv"
        random test "HBYlzCbRDusay68UEWDbP9GcTBDsm1AUuVqy8hp3fsbumZUDS3hAIVVDUvI7aDFnflbL0tgGfNkQ"
        random test "Z3VIwhBOH4r3KMs1brjRwCmn7PQnRm5DU5KLhL7u9zsen0dIi1zfHQCSQtZg1i5"
        random test "VRlTUPGOu1s2Idkcg5XAijBAcJ9lBZV9YMbXtsJDLQBfAs"
        random test "f7Mra"
        random test "UrSBnsCrpnj45ERedWwEnuV5DP8sIW0lQVSN"
        random test "jqLotrRvMIIie3SNvrQ1yZVVDG"
        random test "pdZZZ9d5C4KuLlAEfJuZpmJAuYenLkbbfkjAF6aows55SnLSEzrJFEOVKnKtJ5sU8xQx0W6FeBLoUypaKmdIjstR"
        random test "SCE0hNHvPLETFNML5O4cbzw"
        random test "PItDtXnV50HO3pV9lJUjkV84WpfJ8ibawPGwlJzOrl4lmrbzFLL"
        random test "vBQJroaP7hdLlzbT1jw4acdvK3A"
        random test "rrLiIQv5kho7TA8yJzdBjpPYAseq6kTaAqXS33n1LG2iYerYEWcmPU8kCZk6glJzoXH2lCWSHepmG6DxPK"
        random test "4sr6BHETO44Ulfk3IvbP5Z41EMR8wQLwuci9c0SH0c1DBV7"
        random test "wlmzgWQ8NhUgHRjWmyAFQmSJ70ZTVKeAQj1lthUnXkNB4I93l4NH82zpfk4lusw2V3Tlfsi5wN3OrVlVK4N0pb"
        random test "9V6hRxwLJG2t2WiOpGh1rqiQGOc5xroc3ptUqc0YF3lWBAwpVLncc2ciPlNuuAErwUou7V4hwaja97eMsF"
        random test "JtcPedMhqjk8haRjkJJMWZTk9eyDxD5TqgaOzWTM0D7Wq6D77vRXtbw2GSuCiIqppWP2zZzwkxbSLfApW0AaFJZqxGUe"
        random test "o7P28RdGgiOplX1xG7ucs977XmLJR23WJtwO3XuDuFoYfwrGCmYFADjHQatagMi5iC"
        random test "rXF8sr"
        random test "8xx6ZeTX4TPPq0xPs4JvkDeIPEDV6ew"
        random test "Ik1tDeexF8FvB5qx7eH7RT54jvctHCZZ8QPlOvbq1F9vlpSwMYnMRnDJojK4ez7bpmnTMH"
        random test "YJljUou2Gj6mawGvElMRcx28zvAjsHliY9ntkfBhDdEvbO11W2AhnCiJaLEBQ13zutJt0lMJ13bShX63XQ6xu5IzYj2hPeljU"
        random test "JEeaMgVySKIjDSGNWF9eElDvtT2VZfANunzfYLMnZwhk1A0HNXirHglHYzXMrMCDM4GaW"
        random test "EDymYtBhaIbgncO5Dy8ENWuDFkHIy5hzkTTp0EWEahwvz2cCZrbZxqvYazZYWzJmkvN3kDIrkFpVzKPe"
        random test "i9ZFmfjqdocoQfPdf815inJMqxbQHU9a1igpdQtLvWkR4qQ5SoOpyY4MBqjMe5GTQT6By9qh7NwRj9lhQR9wKXHwsMlDm"
        random test "VJdResSo553TjctEm954tHK2UfdD99BtnBov7R2xOckp57AzFvMLT759TF1MbGTzMR6S5I1fyh54OV3d1mr"
        random test "iaXWjyptEcGXxaltGZ1jAN1SEDVWmr8gMoTum31lM1XCHFpTiTLmnuoZVWrzTjrEuN0aFStznPkvenyVJI174VPWKf1GodL8"
        random test "UazLPO1bLbOwME1vqbO2KpfvFi4iNrjpCAfa1RrtnBN28Uygvjuk"
        random test "jGa0ILugALdU0DA8pdDdrZ0V0yONnZzniMuIIDtU6a1mNv1"
        random test "fdUULApqm0I2"
        random test "cGPx9bUD9eGDgSj3cqDdCeCOsxtIrkJancOOb06p0bC0VLZsnWbbOLQE8fHXanMnFRiLqZeLoBOYicYIpBfAeRTnMZjoID"
        random test "ifC5Pw0ysuRHue9P3P11hOqzxAHwsNNPuforPecdUO0t0AQ0wYCvfgXrLibdfqX7sTp2HArS2C41r8WehTX5EFETXSMi"
        random test "vg3WSISTG7yXZ18Ish3tMVmqcBKS5zWmxd"
        random test "dwxr5ITUUZXojcNBCu88CUPLeL"
        random test "0Dzonv2xfhZUWV3rspuh2JJllkMgDWefAJtb5QuXPCS24UKEzjwxyu8Uldl9Fpq"
        random test "JNVnb6JimuM3VMgPaGqzasav"
        random test "ROClfR9knxMidmW1CAeaW6jtOhpaWcjrjC6hkomMeBhi9aHudzIa"
        random test "R8iIIuYNCFNa03b6WFTFKyWhdtQghO"
        random test "dJwsggnz6q9lPdej3LzmcFXQA7rJnjFiSHxgCQxHhj8ZDFpKkEgu4PcrD0e"
        random test "jMmaD4IZhpFGFu5nQnQCcBT3kg7M44ALEQMhlPVutkpd9cgMTvdYF9cYszFl"
        random test "ODoKc528mDDgXorwqeD9BUzw2Mnx5i5N0"
        random test "y9ru23SXp41PQiMykh6P5GabcL9gFqsoezazNjmpxl"
        random test "xXDvZMjw3ndfi1hpsjQ7kQJE2NL509MP3Xrl9lUfWM9OAtNA5Om"
        random test "oYp9mk3DCJ5hR4M4Hb5VAVSdLrjq6QDDJ"
        random test "grDwVTa4le8g3lCKElAnk1VyL0lrifGGQ5mbo9zi1FvF23L67MiCq1HWo1DUOI"
        random test "RDlYiyiF7BGkJoIfHBzA9idNtay5WwJ6"
        random test "8Oxw8GRVgArqZUuV32vY0qhWl68baap9fHhSg1B35JFWIqRiIMefavb4HZxtzSJhVFxrQQrJrefpSI69"
        random test "Cre3rvLQgGlHhY3jndcjSzY2ac2wR6mA5iXokiOO9Sui4AGd"
        random test "S2SAVoWHzs5FQX58T9X1xJSWEV1FaB6QxSzzS3HZTATEYywg6gIBsIv6oJ0PPnnE7rmSJA7xCm"
        random test "E1p"
        random test "kAVS9HokYJ3QS39IyjlKuE8OgWklJA98lchmDbGeOJU2u2GzdFbR4IUKF16STHAc"
        random test "Xq1CRSy26RcYfqIfEEaSz5Uf3MRTMvZNarfdetJqqzbXnsk4DGV1aF9oGHto8Wr3sPBlsSjN3KcN"
        random test "103651864897265436988381881043675380891523736774156161497585167599602821544205595543374"
        random test "8551217468607097169713"
        random test "55696298338427427926056825133625956033051390254466"
        random test "03684877965044441423643970974512"
        random test "1610761773147699745511030654274690787530610881586516444486648518459212107968064608419864130"
        random test "9307172561060221982520258271643356334003183394810730402906550101611025022236895"
        random test "75207651215670007085841921118291671151495334549030288268348274865331"
        random test "532167413164378331893863"
        random test "2648646517870416512616125"
        random test "546487783425986092656211956777719854"
        Completed in 10ms
        You have passed all of the tests! :)
*/