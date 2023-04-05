/*
        8 kyu
        Alan Partridge II - Apple Turnover
        1061386% of 2,636200 of 20,776PG1
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Backstory

        As a treat, I'll let you read part of the script from a classic 'I'm Alan Partridge episode:

        Lynn: Alan, there’s that teacher chap.
        Alan: Michael, if he hits me, will you hit him first?
        Michael: No, he’s a customer. I cannot hit customers. I’ve been told. I’ll go and get some stock.
        Alan: Yeah, chicken stock.
        Phil: Hello Alan.
        Alan: Lynn, hand me an apple pie. And remove yourself from the theatre of conflict.
        Lynn: What do you mean?
        Alan: Go and stand by the yakults. The temperature inside this apple turnover is 1,000 degrees. If I squeeze it, a jet of molten Bramley apple is going to squirt out. Could go your way, could go mine. Either way, one of us is going down.
        Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.

        Task
        Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

        Note: Input will either be a positive integer (or a string for untyped languages).
*/
export function apple(x: number | string): string {
    const numX = Number(x);
    const xSquared = numX * numX;
    if (xSquared > 1000) {
        return "It's hotter than the sun!!";
    } else {
        return 'Help yourself to a honeycomb Yorkie for the glovebox.';
    }
}
/*
TEST RESUULTS:
        Time: 2892ms Passed: 101Failed: 0
        Test Results:
        Basic test
        Basic test should work
        Completed in 1ms
        Random test
        Testing №1 should work for 41
        Testing №2 should work for "2"
        Testing №3 should work for "50"
        Testing №4 should work for "42"
        Testing №5 should work for "16"
        Testing №6 should work for 55
        Testing №7 should work for 17
        Testing №8 should work for "4"
        Testing №9 should work for "14"
        Testing №10 should work for "2"
        Testing №11 should work for "14"
        Testing №12 should work for "54"
        Testing №13 should work for "18"
        Testing №14 should work for 7
        Testing №15 should work for 21
        Testing №16 should work for 39
        Testing №17 should work for "56"
        Testing №18 should work for 19
        Testing №19 should work for 31
        Testing №20 should work for "0"
        Testing №21 should work for "50"
        Testing №22 should work for "14"
        Testing №23 should work for 53
        Testing №24 should work for 13
        Testing №25 should work for 13
        Testing №26 should work for "60"
        Testing №27 should work for "10"
        Testing №28 should work for "30"
        Testing №29 should work for "50"
        Testing №30 should work for "14"
        Testing №31 should work for 21
        Testing №32 should work for 7
        Testing №33 should work for "4"
        Testing №34 should work for 39
        Testing №35 should work for "2"
        Testing №36 should work for "36"
        Testing №37 should work for 19
        Testing №38 should work for 45
        Testing №39 should work for 49
        Testing №40 should work for "20"
        Testing №41 should work for "32"
        Testing №42 should work for "60"
        Testing №43 should work for "54"
        Testing №44 should work for 7
        Testing №45 should work for 7
        Testing №46 should work for "2"
        Testing №47 should work for "32"
        Testing №48 should work for 31
        Testing №49 should work for 15
        Testing №50 should work for "36"
        Testing №51 should work for 7
        Testing №52 should work for 49
        Testing №53 should work for 41
        Testing №54 should work for "0"
        Testing №55 should work for 15
        Testing №56 should work for "48"
        Testing №57 should work for 55
        Testing №58 should work for "16"
        Testing №59 should work for "16"
        Testing №60 should work for "30"
        Testing №61 should work for "36"
        Testing №62 should work for "34"
        Testing №63 should work for 15
        Testing №64 should work for 39
        Testing №65 should work for "28"
        Testing №66 should work for "32"
        Testing №67 should work for "8"
        Testing №68 should work for "50"
        Testing №69 should work for "42"
        Testing №70 should work for 11
        Testing №71 should work for "28"
        Testing №72 should work for "54"
        Testing №73 should work for "32"
        Testing №74 should work for 3
        Testing №75 should work for "50"
        Testing №76 should work for 21
        Testing №77 should work for "26"
        Testing №78 should work for 25
        Testing №79 should work for "4"
        Testing №80 should work for "52"
        Testing №81 should work for "46"
        Testing №82 should work for "4"
        Testing №83 should work for 49
        Testing №84 should work for 27
        Testing №85 should work for "46"
        Testing №86 should work for 13
        Testing №87 should work for "34"
        Testing №88 should work for 39
        Testing №89 should work for 7
        Testing №90 should work for "42"
        Testing №91 should work for "4"
        Testing №92 should work for 5
        Testing №93 should work for 27
        Testing №94 should work for "46"
        Testing №95 should work for 11
        Testing №96 should work for 19
        Testing №97 should work for 55
        Testing №98 should work for 51
        Testing №99 should work for "54"
        Testing №100 should work for "34"
        Completed in 3ms
        You have passed all of the tests! :)
*/