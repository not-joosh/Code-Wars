/*

        6 kyu
        Multiplication table
        4048092% of 2,055470 of 21,793Bugari
        C
        TRAINNEXT KATA
        Details
        Solutions
        Forks (11)
        Discourse (98)
        Collect|
        DESCRIPTION:
        Your task, is to create N×N multiplication table, of size provided in parameter.

        For example, when given size is 3:

        1 2 3
        2 4 6
        3 6 9
        For the given example, the return value should be:

        [[1,2,3],[2,4,6],[3,6,9]]
        Note: in C, you must return an allocated table of allocated rows

*/
int **multiplication_table(int n) {
    int **table = malloc(n * sizeof(int *)); // Allocate memory for the rows
    for (int i = 1; i <= n; i++) {
        table[i-1] = malloc(n * sizeof(int)); // Allocate memory for each row
        for (int j = 1; j <= n; j++) {
            table[i-1][j-1] = i * j; // Calculate the multiplication result and store it in the table
        }
    }
    return table;
}