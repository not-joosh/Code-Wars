/*
        7 kyu
        Keep the Order
        451391% of 3881,317 of 2,639narayanswa306632 Issues Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Task:
        Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

        Do not modify the input.

        Some examples:
        keepOrder([1, 2, 3, 4, 7], 5) //=> 4
                            ^(index 4)
        keepOrder([1, 2, 3, 4, 7], 0) //=> 0
                ^(index 0)
        keepOrder([1, 1, 2, 2, 2], 2) //=> 2
                        ^(index 2)
        Also check out my other creations — Naming Files, Elections: Weighted Average, Identify Case, Split Without Loss, Adding Fractions, Random Integers, Implement String#transpose, Implement Array#transpose!, Arrays and Procs #1, and Arrays and Procs #2.

        If you notice any issues or have any suggestions/comments whatsoever, please don't hesitate to mark an issue or just comment. Thanks!
*/
function keepOrder(ary, val) {
    for (let i = 0; i < ary.length; i++) {
        if (val <= ary[i]) {
            return i;
        }
    }
    return ary.length;
}
/*
TEST RESULT:
        Time: 861ms Passed: 52Failed: 0
        Test Results:
        Full suite
        Fixed cases from examples
        More fixed cases
        Random test: ary = [-5, -4, -1, 2, 2, 2]; val = -3
        Random test: ary = [-5, 0, 0, 0, 2, 2, 5, 5]; val = -5
        Random test: ary = [-4, -3, 0, 0, 0, 5]; val = -5
        Random test: ary = [-3, -3, -2, -1, 0, 2, 3]; val = 3
        Random test: ary = [-5, -4, 2, 3, 4, 5]; val = 0
        Random test: ary = [-2, -1, 1, 4, 4]; val = 5
        Random test: ary = [-5, -3, 0, 0, 1, 2, 3, 3]; val = -1
        Random test: ary = [-4, -4, -2, -1, 0, 0, 5]; val = -7
        Random test: ary = [0, 1, 1, 2, 2, 3, 3]; val = 6
        Random test: ary = [-2, -1, 2, 2, 3]; val = 7
        Random test: ary = [-1, 1, 3, 5]; val = 6
        Random test: ary = [-2, 1, 3, 5, 5, 5]; val = 5
        Random test: ary = [-1, 0, 1, 2, 5, 5, 5, 5]; val = -1
        Random test: ary = [-5, -5, -5, -5, -4, 1, 5]; val = -7
        Random test: ary = [-5, -1, 2, 5]; val = -5
        Random test: ary = [-1, 0, 1, 2, 3]; val = -6
        Random test: ary = [-4, -1, 0, 0, 1, 4, 4]; val = -3
        Random test: ary = [-4, -4, -3, -3, -1, 2, 5]; val = -5
        Random test: ary = [0, 1, 2, 3, 3]; val = -5
        Random test: ary = [-3, -3, -3, -2, -1, 1, 3, 4]; val = 3
        Random test: ary = [-4, 0, 5, 5, 5]; val = 4
        Random test: ary = [-2, -1, 0, 2, 5]; val = 1
        Random test: ary = [-5, -4, 3, 3, 4]; val = -7
        Random test: ary = [-5, -5, -5, -2]; val = 0
        Random test: ary = [-5, -4, 0, 1, 5, 5]; val = 6
        Random test: ary = [0, 0, 0, 1, 2, 2]; val = 4
        Random test: ary = [-4, -4, -3, -2, -2, -1, 0, 0]; val = -1
        Random test: ary = [-2, -1, 0, 5]; val = 2
        Random test: ary = [-5, -5, 2, 5]; val = 6
        Random test: ary = [-5, -1, 1, 2, 3]; val = -6
        Random test: ary = [-4, -4, -3, -2, -1, 1, 2, 3, 5]; val = 1
        Random test: ary = [-1, 1, 2, 4, 4]; val = -7
        Random test: ary = [-5, -5, -3, 1, 2]; val = 5
        Random test: ary = [-4, -3, -3, -2, -1, 3]; val = -2
        Random test: ary = [-5, -5, -1, 0, 1, 2, 2, 3]; val = -6
        Random test: ary = [-5, -3, 0, 3]; val = 1
        Random test: ary = [-5, -5, 0, 2, 3, 4]; val = 7
        Random test: ary = [-2, 0, 0, 1, 1, 1, 1]; val = 0
        Random test: ary = [-5, -1, 0, 2, 5]; val = 6
        Random test: ary = [-4, -3, -1, 0, 2, 4]; val = -3
        Random test: ary = [-5, -4, 0, 5]; val = 5
        Random test: ary = [-5, -2, 1, 2]; val = 4
        Random test: ary = [-5, -2, 2, 3, 3, 3, 4, 5]; val = 5
        Random test: ary = [-5, -4, -4, -2, 1, 1, 5]; val = 6
        Random test: ary = [-1, 1, 2, 3, 4]; val = 0
        Random test: ary = [-4, -3, -3, -3, -2, -2, 0, 5]; val = 1
        Random test: ary = [-2, 0, 0, 1, 3, 3, 4, 5, 5]; val = -1
        Random test: ary = [-4, -3, -3, 0, 1, 5]; val = 1
        Random test: ary = [-3, -1, -1, 2, 5]; val = 4
        Random test: ary = [-4, -3, 1, 2, 2, 3, 3]; val = 1
        Completed in 8ms
        STDERR
        You have passed all of the tests! :)
*/