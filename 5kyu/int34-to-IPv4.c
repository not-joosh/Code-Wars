/*

        5 kyu
        int32 to IPv4
        62315291% of 1,772932 of 18,686sahglie1 Issue Reported
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Take the following IPv4 address: 128.32.10.1

        This address has 4 octets where each octet is a single byte (or 8 bits).

        1st octet 128 has the binary representation: 10000000
        2nd octet 32 has the binary representation: 00100000
        3rd octet 10 has the binary representation: 00001010
        4th octet 1 has the binary representation: 00000001
        So 128.32.10.1 == 10000000.00100000.00001010.00000001

        Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

        Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

        Examples
        2149583361 ==> "128.32.10.1"
        32         ==> "0.0.0.32"
        0          ==> "0.0.0.0"

*/
#include <inttypes.h>
#include <stdio.h>
#include <string.h>

void uint32_to_ip (uint32_t number, char *IPv4) {
    // Extract the octets from the number
    uint8_t octets[4];
    for(int i = 0; i < 4; i++) {
        octets[i] = number & 0xff;
        number >>= 8;
    }
    // Convert each octet to its decimal representation and store it in IPv4
    *IPv4 = '\0';
    for (int i = 3; i >= 0; i--) {
        int result = sprintf(IPv4 + strlen(IPv4), "%d", octets[i]);
        if (result < 0) {
            fprintf(stderr, "Error: sprintf returned %d\n", result);
            exit(1);
        }
        if (i > 0) {
            result = sprintf(IPv4 + strlen(IPv4), ".");
            if (result < 0) {
                fprintf(stderr, "Error: sprintf returned %d\n", result);
                exit(1);
            }
        }
    }
}
/*
Test Results:
        Time: 639ms Passed: 105Failed: 0
        Show All
        Test Results:
        STDERR
        You have passed all of the tests! :)
*/
