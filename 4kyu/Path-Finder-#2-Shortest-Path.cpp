/*
        4 kyu
        Path Finder #2: shortest path
        50712996% of 649703 of 3,452evk
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Task
        You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return the minimal number of steps to exit position [N-1, N-1] if it is possible to reach the exit from the starting position. Otherwise, return -1.

        Empty positions are marked .. Walls are marked W. Start and exit positions are guaranteed to be empty in all test cases.
*/
#include <iostream>
#include <string>
#include <queue>
#include <set>

using namespace std;

int path_finder(string maze) {
    int N = 0;
    for (char c : maze) {
        if (c == '\n') break;
        N++;
    }
    vector<vector<int>> grid(N, vector<int>(N));
    int i = 0, j = 0;
    for (char c : maze) {
        if (c == ' ') continue;
        if (c == '\n') {
            i++;
            j = 0;
            continue;
        }
        grid[i][j] = (c == 'W') ? -1 : 0;
        j++;
    }
    queue<pair<int, int>> q;
    set<pair<int, int>> visited;
    q.push(make_pair(0, 0));
    visited.insert(make_pair(0, 0));
    while (!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();
        if (x == N-1 && y == N-1) {
            return grid[x][y];
        }
        vector<pair<int, int>> neighbors = {
            {x+1, y}, {x-1, y}, {x, y+1}, {x, y-1}
        };
        for (auto neighbor : neighbors) {
            int nx = neighbor.first;
            int ny = neighbor.second;
            if (nx >= 0 && nx < N && ny >= 0 && ny < N &&
                grid[nx][ny] == 0 && visited.count(neighbor) == 0) {
                grid[nx][ny] = grid[x][y] + 1;
                q.push(neighbor);
                visited.insert(neighbor);
            }
        }
    }
    return -1;
}
/*
TEST RESULTS:
        Time: 3362ms Passed: 5Failed: 0
        Test Results:
        your_path_finder_function
        should_work_for_a_few_simple_fixed_tests_involving_small_mazes
        should_work_for_an_edge_case_involving_a_1_by_1_matrix
        should_work_for_a_number_of_snake_labyrinths
        should_work_for_50_small_random_mazes
        should_work_for_10_large_random_mazes
        You have passed all of the tests! :)
*/
