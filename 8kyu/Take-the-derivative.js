/*
        8 kyu
        Take the Derivative
        853092% of 2,3858,748 of 17,117K-Calderon-ASC1 Issue Reported
        JavaScript
        Node v8.1.3
        VIM
        EMACS
        Instructions
        Output
        This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

        Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

        For example:

        derive(7, 8)
        In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

        derive(7, 8) --> this should output "56x^7" 
        derive(5, 9) --> this should output "45x^8" 
        Notes:

        The output of this function should be a string
        The exponent will never be 1, and neither number will ever be 0
*/
function derive(coefficient, exponent) {
    const newCoefficient = coefficient * exponent;
    const newExponent = exponent - 1;
    return `${newCoefficient}x^${newExponent}`;
}
/*
TEST RESULTS:
        Time: 594ms Passed: 103Failed: 0
        Test Results:
        Tests the example test cases
        Test Passed: Value == '56x^7'
        Test Passed: Value == '45x^8'
        Completed in 3ms
        Tests exponent 1 is not truncated
        Test Passed: Value == '18x^1'
        Completed in 1ms
        Tests for random test cases
        Test Passed: Value == '35249x^348'
        Test Passed: Value == '106236x^226'
        Test Passed: Value == '49591x^490'
        Test Passed: Value == '50232x^272'
        Test Passed: Value == '62952x^171'
        Test Passed: Value == '8579x^372'
        Test Passed: Value == '154224x^475'
        Test Passed: Value == '33319x^232'
        Test Passed: Value == '17604x^488'
        Test Passed: Value == '21850x^45'
        Test Passed: Value == '410x^409'
        Test Passed: Value == '122145x^478'
        Test Passed: Value == '33649x^252'
        Test Passed: Value == '56280x^267'
        Test Passed: Value == '8892x^493'
        Test Passed: Value == '20368x^75'
        Test Passed: Value == '6900x^74'
        Test Passed: Value == '10051x^436'
        Test Passed: Value == '55200x^199'
        Test Passed: Value == '45724x^160'
        Test Passed: Value == '83782x^256'
        Test Passed: Value == '87945x^204'
        Test Passed: Value == '99424x^207'
        Test Passed: Value == '201760x^415'
        Test Passed: Value == '104940x^329'
        Test Passed: Value == '26588x^390'
        Test Passed: Value == '47088x^435'
        Test Passed: Value == '97929x^242'
        Test Passed: Value == '227734x^493'
        Test Passed: Value == '70347x^392'
        Test Passed: Value == '55375x^124'
        Test Passed: Value == '42333x^102'
        Test Passed: Value == '204294x^430'
        Test Passed: Value == '106714x^228'
        Test Passed: Value == '167902x^468'
        Test Passed: Value == '3177x^352'
        Test Passed: Value == '22356x^206'
        Test Passed: Value == '14550x^290'
        Test Passed: Value == '19434x^157'
        Test Passed: Value == '173452x^420'
        Test Passed: Value == '74908x^306'
        Test Passed: Value == '30228x^131'
        Test Passed: Value == '139797x^440'
        Test Passed: Value == '67150x^169'
        Test Passed: Value == '30429x^160'
        Test Passed: Value == '12628x^163'
        Test Passed: Value == '2352x^15'
        Test Passed: Value == '1044x^3'
        Test Passed: Value == '3348x^185'
        Test Passed: Value == '119054x^481'
        Test Passed: Value == '84480x^175'
        Test Passed: Value == '132300x^314'
        Test Passed: Value == '176396x^417'
        Test Passed: Value == '20800x^79'
        Test Passed: Value == '70488x^395'
        Test Passed: Value == '120094x^297'
        Test Passed: Value == '44844x^221'
        Test Passed: Value == '4620x^230'
        Test Passed: Value == '106488x^407'
        Test Passed: Value == '134717x^330'
        Test Passed: Value == '218736x^495'
        Test Passed: Value == '13827x^32'
        Test Passed: Value == '54050x^114'
        Test Passed: Value == '133835x^376'
        Test Passed: Value == '52578x^126'
        Test Passed: Value == '66752x^148'
        Test Passed: Value == '160384x^357'
        Test Passed: Value == '201894x^482'
        Test Passed: Value == '34692x^235'
        Test Passed: Value == '20552x^366'
        Test Passed: Value == '4956x^83'
        Test Passed: Value == '131340x^397'
        Test Passed: Value == '77190x^248'
        Test Passed: Value == '47912x^211'
        Test Passed: Value == '23030x^93'
        Test Passed: Value == '65124x^161'
        Test Passed: Value == '223153x^496'
        Test Passed: Value == '14893x^52'
        Test Passed: Value == '79200x^164'
        Test Passed: Value == '75026x^465'
        Test Passed: Value == '2312x^7'
        Test Passed: Value == '75810x^189'
        Test Passed: Value == '77751x^476'
        Test Passed: Value == '8888x^201'
        Test Passed: Value == '25500x^101'
        Test Passed: Value == '229341x^468'
        Test Passed: Value == '35629x^78'
        Test Passed: Value == '12480x^51'
        Test Passed: Value == '75388x^187'
        Test Passed: Value == '57524x^291'
        Test Passed: Value == '8671x^22'
        Test Passed: Value == '55735x^354'
        Test Passed: Value == '243x^80'
        Test Passed: Value == '92944x^313'
        Test Passed: Value == '2635x^16'
        Test Passed: Value == '5200x^24'
        Test Passed: Value == '108100x^469'
        Test Passed: Value == '72300x^299'
        Test Passed: Value == '2032x^7'
        Test Passed: Value == '57128x^147'
        Completed in 6ms
        You have passed all of the tests! :)
*/