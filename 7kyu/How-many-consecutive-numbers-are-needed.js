/*
        7 kyu
        How many consecutive numbers are needed?
        722194% of 6841,899 of 4,418joh_pot1 Issue Reported
        JavaScript
        Node v8.1.3
        VIM
        EMACS
        Instructions
        Output
        Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

        For example:
        If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.
*/
function consecutive(arr) {
    arr.sort((a, b) => a - b);
    let count = 0;
    let i = 1;
    while (i < arr.length) {
        if (arr[i] - arr[i - 1] > 1) {
            count += arr[i] - arr[i - 1] - 1;
        }
        i++;
    }
    return count;
};
/*
TEST RESULTS:
        Time: 842ms Passed: 104Failed: 0
        Test Results:
        Test Passed: Value == 2
        Test Passed: Value == 0
        Test Passed: Value == 0
        Test Passed: Value == 0
        Random tests
        Test Passed: Value == 924
        Test Passed: Value == 880
        Test Passed: Value == 907
        Test Passed: Value == 916
        Test Passed: Value == 922
        Test Passed: Value == 927
        Test Passed: Value == 916
        Test Passed: Value == 871
        Test Passed: Value == 916
        Test Passed: Value == 861
        Test Passed: Value == 888
        Test Passed: Value == 882
        Test Passed: Value == 922
        Test Passed: Value == 885
        Test Passed: Value == 869
        Test Passed: Value == 908
        Test Passed: Value == 935
        Test Passed: Value == 890
        Test Passed: Value == 897
        Test Passed: Value == 927
        Test Passed: Value == 932
        Test Passed: Value == 932
        Test Passed: Value == 868
        Test Passed: Value == 922
        Test Passed: Value == 895
        Test Passed: Value == 900
        Test Passed: Value == 929
        Test Passed: Value == 853
        Test Passed: Value == 930
        Test Passed: Value == 903
        Test Passed: Value == 928
        Test Passed: Value == 885
        Test Passed: Value == 922
        Test Passed: Value == 920
        Test Passed: Value == 933
        Test Passed: Value == 920
        Test Passed: Value == 937
        Test Passed: Value == 916
        Test Passed: Value == 913
        Test Passed: Value == 921
        Test Passed: Value == 913
        Test Passed: Value == 934
        Test Passed: Value == 944
        Test Passed: Value == 846
        Test Passed: Value == 924
        Test Passed: Value == 896
        Test Passed: Value == 908
        Test Passed: Value == 875
        Test Passed: Value == 892
        Test Passed: Value == 891
        Test Passed: Value == 880
        Test Passed: Value == 894
        Test Passed: Value == 907
        Test Passed: Value == 938
        Test Passed: Value == 896
        Test Passed: Value == 929
        Test Passed: Value == 924
        Test Passed: Value == 919
        Test Passed: Value == 919
        Test Passed: Value == 930
        Test Passed: Value == 879
        Test Passed: Value == 915
        Test Passed: Value == 924
        Test Passed: Value == 888
        Test Passed: Value == 919
        Test Passed: Value == 884
        Test Passed: Value == 917
        Test Passed: Value == 899
        Test Passed: Value == 904
        Test Passed: Value == 920
        Test Passed: Value == 899
        Test Passed: Value == 914
        Test Passed: Value == 905
        Test Passed: Value == 891
        Test Passed: Value == 860
        Test Passed: Value == 920
        Test Passed: Value == 880
        Test Passed: Value == 880
        Test Passed: Value == 892
        Test Passed: Value == 933
        Test Passed: Value == 914
        Test Passed: Value == 857
        Test Passed: Value == 913
        Test Passed: Value == 911
        Test Passed: Value == 908
        Test Passed: Value == 894
        Test Passed: Value == 877
        Test Passed: Value == 916
        Test Passed: Value == 892
        Test Passed: Value == 891
        Test Passed: Value == 928
        Test Passed: Value == 902
        Test Passed: Value == 926
        Test Passed: Value == 884
        Test Passed: Value == 937
        Test Passed: Value == 875
        Test Passed: Value == 878
        Test Passed: Value == 898
        Test Passed: Value == 919
        Test Passed: Value == 907
        Completed in 39ms
        You have passed all of the tests! :)
*/