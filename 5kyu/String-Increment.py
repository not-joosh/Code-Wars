
        # 5 kyu
        # String incrementer
        # 218241890% of 3,765302 of 33,642parceval5 Issues Reported
        # Python
        # 3.10
        # VIM
        # EMACS
        # Instructions
        # Output
        # Your job is to write a function which increments a string, to create a new string.

        # If the string already ends with a number, the number should be incremented by 1.
        # If the string does not end with a number. the number 1 should be appended to the new string.
        # Examples:

        # foo -> foo1

        # foobar23 -> foobar24

        # foo0042 -> foo0043

        # foo9 -> foo10

        # foo099 -> foo100

        # Attention: If the number has leading zeros the amount of digits should be considered.

def increment_string(strng):
    if not strng:
        return '1'
    
    num_str = ''
    for ch in strng[::-1]:
        if ch.isdigit():
            num_str += ch
        else:
            break
    
    if not num_str:
        return strng + '1'
    
    num = int(num_str[::-1])
    num += 1
    return strng[:len(strng)-len(num_str)] + str(num).zfill(len(num_str))

# Test Result:
#         Time: 459ms Passed: 113Failed: 0
#         Test Results:
#         Tests
#         Fixed Tests
#         (13 of 13 Assertions)
#         Random Tests
#         (100 of 100 Assertions)
#         Completed in 13.40ms
#         You have passed all of the tests! :)