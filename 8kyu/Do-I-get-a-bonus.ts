/*
        8 kyu
        Do I get a bonus?
        27411791% of 5,866529 of 48,932PG11 Issue Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

        Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

        If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

        Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
*/
export class Kata {
    public static bonusTime(salary:number, bonus:boolean):string {
        if(bonus) return `£${salary*10}`;
        else return `£${salary}`;
    };
};
/*
TEST RESULTS:
        Time: 2871ms Passed: 2Failed: 0
        Test Results:
        Fixed Tests
        Basic tests
        Random Tests
        Completed in 2ms
        You have passed all of the tests! :)
*/