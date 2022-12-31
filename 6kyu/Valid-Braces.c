// 6 kyu
// Valid Braces
// 260554191% of 6,227201 of 57,469xDranik
// C
// TRAINNEXT KATA
// Details
// Solutions
// Forks (53)
// Discourse (577)
// Collect|
// DESCRIPTION:
// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

#include <stdbool.h>
#include <stdlib.h>

bool valid_braces(const char *braces) {
    const size_t braces_len = strlen(braces);
    char *stack = malloc(braces_len + 1);
    size_t stack_top = 0;
    for (size_t i = 0; i < braces_len; i++) {
        switch (braces[i]) {
            case '(':
            case '[':
            case '{':
                stack[stack_top++] = braces[i];
                break;
            case ')':
                if (stack_top == 0 || stack[--stack_top] != '(') {
                    free(stack);
                    return false;
                }
                break;
            case ']':
                if (stack_top == 0 || stack[--stack_top] != '[') {
                    free(stack);
                    return false;
                }
                break;
            case '}':
                if (stack_top == 0 || stack[--stack_top] != '{') {
                    free(stack);
                    return false;
                }
                break;
        }
    }
    const bool result = stack_top == 0;
    free(stack);
    return result;
}

/*

    My first solution below 

*/

struct Stack {
    char *items;
    int top;
    int size;
};

bool valid_braces(const char *braces) {
    struct Stack *stack = malloc(sizeof(struct Stack));
    stack->size = 100;
    stack->top = -1;
    stack->items = malloc(stack->size * sizeof(char));
    for (int i = 0; braces[i] != '\0'; i++) {
        if (braces[i] == '(' || braces[i] == '{' || braces[i] == '[') {
            stack->items[++stack->top] = braces[i];
        } 
        else if (braces[i] == ')' && stack->items[stack->top] == '(' ||
        braces[i] == '}' && stack->items[stack->top] == '{' ||
        braces[i] == ']' && stack->items[stack->top] == '[') {
                stack->top--;
        } 
        else {
            free(stack->items);
            free(stack);
            return false;
        }
    }
    bool result = stack->top == -1;
    free(stack->items);
    free(stack);
    return result;
}
