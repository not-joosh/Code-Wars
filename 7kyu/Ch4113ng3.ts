/*
        7 kyu
        Ch4113ng3
        271088% of 502120 of 2,805phju
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"
*/
export function nerdify(txt: string): string {
    const replaceChars: Record<string, string> = {
        a: "4",
        A: "4",
        e: "3",
        E: "3",
        l: "1",
    };
    let result = "";
    for (const char of txt) {
        result += replaceChars[char] || char;
    }
    return result;
}
/*
TEST RESULTS:
        Time: 2922ms Passed: 53Failed: 0
        Test Results:
        Test Cases
        Should return 'My Litt13 P4nc4k3'
        Should return ''
        Should return 'W4§svv5=4444444111L1LL1.Q44'
        Completed in 1ms
        Random Cases
        Should return 'Hlih01zU'
        Should return 'HzuSOXMbqhMMYtzHzRe4Nm9J5NhqyA5d5Ejw'
        Should return 'Jotxe8rO6'
        Should return 'T'
        Should return 'r0RZX5cWR5LoV2NWUJlCdotcb'
        Should return 'r7IH8KVECt9qisCWRNTpsP'
        Should return 'dJWGerKG45dVaXnAVPNmcGhaDvif4XmjpT8cXznq1tA'
        Should return 'o71v4O6gdzfNBi4sq0uzcABWAo7qimymj6EFoKHNXAh8IAXi'
        Should return 'J42FrGm6qcUHRfOy'
        Should return 'dMfN2'
        Should return 'zltwdxaVzrK'
        Should return 'SCB2BD6RaIMdAKD3Lh5D'
        Should return 'Nd'
        Should return 'Yp1Bm2fRr4ScJfAtCzaLgVHMOcjoFIKVm'
        Should return 'HwlmPR0rRslkUDam5piYXp8Ls1Wg8ngKgEhgO'
        Should return 'rbqvyZepJMhLPAOTAQ'
        Should return 'hoR7hwMxEGouSUuxoE'
        Should return 'lgYYoamSTCKUNyauIptzZ6httVimEnVClqfNho27'
        Should return 'thoj3Z1FKvOy23Ce1aWnw6T8klJhmlqu5zn'
        Should return 'IVfUTL7X0txexKNBz'
        Should return 'ugoO36Cjd2tly35ZZP7sBz0qBIP05Ra3'
        Should return 'NJVcE5372uT'
        Should return 'gCCZHK1dW84B9zkNv821Yg6Yqw3ejhyUN'
        Should return 'g'
        Should return 'Lg7wpIDPw2EqkrhxGT3KTv'
        Should return 'HqxphIJEHud6FpjuOMU4yBEazCvmEDLz26n7M0g3yt'
        Should return 'C50nRIS85uYi7y9DHjlt'
        Should return '8tEIeBThc8F58wxAwMDv6eJSFT43xQ3XKdzP4'
        Should return 'KVAmMlx24Bon3Stk36isZM'
        Should return 'AVvqzxSfsOpQhydBPqIF'
        Should return '2nTgN912RNmXLW6'
        Should return '3uRNb2yUHC8B1PI1TH'
        Should return '24RUQMMSn9D'
        Should return 'ujT6VDtuK'
        Should return 'plQJXe6Sy1TFTyNVKM8zaaGOkLAi2SpZ'
        Should return 'cxUCO6lKjeCz1PAep3sw6OyU1J4dKGZ69eFgnJErnMzpvIMiZ'
        Should return 'xZgCV2oGAsEaiIlaxZDk37'
        Should return '5BDolTpzgcqc4dlfQD7D2de'
        Should return 'krdd940NmoxESmsUl8JuB50JchHpGCIhsgxtMnOB6'
        Should return 'Q80Fs74UmVIQfaIlZCUv47Cpg5V6bdMqUc5gMaFywrl0Byn'
        Should return 'TKGGZE331fLSRM57WOooWtDafXfFFoZpMEDYzw'
        Should return 'yKwXockEoRSMkNkGHzUuXcHT'
        Should return '3Lr0MIP5uWJD5ya75Ud5qI7zqo'
        Should return '5Abjp08zsTPeASl14sCN9gRysNLcvImSSRIKI6NWRB586svcK'
        Should return 'nih9FFx9C9IpyeqvDqwOGzQ7rBQCz6xUZTj'
        Should return 'iV'
        Should return 'zhABbCneG9ZHw'
        Should return 'fqy5TOLIJCJFhvm'
        Should return 'dqaWkgmZlB8br0rBIdR8uqmFpZatsmDiYDDjrcFiODDVVH'
        Should return 'k6PkOcPJ0GRUqxMV'
        Completed in 2ms
        You have passed all of the tests! :)
*/