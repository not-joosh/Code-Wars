/*
        8 kyu
        Calculate BMI
        46611389% of 7,57132,647 of 87,244wichu1 Issue Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Write function bmi that calculates body mass index (bmi = weight / height2).

        if bmi <= 18.5 return "Underweight"

        if bmi <= 25.0 return "Normal"

        if bmi <= 30.0 return "Overweight"

        if bmi > 30 return "Obese"
*/
function bmi(weight, height) {
    const bmi = weight / (height ** 2);
    if (bmi <= 18.5) {
      return "Underweight";
    } else if (bmi <= 25.0) {
      return "Normal";
    } else if (bmi <= 30.0) {
      return "Overweight";
    } else {
      return "Obese";
    }
}
/*
TEST RESULTS:
        Time: 811ms Passed: 1Failed: 0
        Test Results:
        Tests
        test
        Completed in 1ms
        You have passed all of the tests! :)
*/