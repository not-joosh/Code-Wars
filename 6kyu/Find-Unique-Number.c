/*
        6 kyu
        Find the unique number
        205649290% of 8,792323 of 99,137isqua7 Issues Reported
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        There is an array with some numbers. All numbers are equal except for one. Try to find it!

        finduniq((const float[]){1, 1, 1, 2, 1, 1}, 5);  --> 2 
        finduniq((const float[]){0, 0, 0.55, 0, 0}, 5);  --> 0.55 
        It’s guaranteed that array contains at least 3 numbers.

        The tests contain some very huge arrays, so think about performance.

        This is the first kata in series:

        Find the unique number (this kata)
        Find the unique string
        Find The Unique
*/
#include <stddef.h>
#include <stdlib.h>

float finduniq(const float *nums, size_t n) {
    if (nums[0] == nums[1] && nums[1] == nums[2]) {
        for (size_t i = 3; i < n; i++) {
            if (nums[i] != nums[i - 1]) {
                return nums[i];
            }
        }
    } else {
        if (nums[0] != nums[1]) {
            return nums[0];
        } else {
            return nums[2];
        }
    }
    return 0./.0; // return NaN to indicate error
}
/*
Test Results
        Generic_Test
        should_return_the_unique_number
        (6 of 6 Assertions)
        Completed in 1.8849ms
        Random_Test
        should_return_the_uncheated_unique_number
        (135 of 135 Assertions)
        Completed in 6585.9292ms
        You have passed all of the tests! :)
*/

/*

        HASH MAP SOLUTION? <--- It times out though.. rip.

*/
#include <stdlib.h>

struct hash_map {
    size_t size;
    size_t capacity;
    float *keys;
    int *values;
};

struct hash_map *hash_map_create(void) {
    struct hash_map *map = malloc(sizeof(struct hash_map));
    map->size = 0;
    map->capacity = 16;
    map->keys = malloc(map->capacity * sizeof(float));
    map->values = malloc(map->capacity * sizeof(int));
    return map;
}

void hash_map_destroy(struct hash_map *map) {
    free(map->keys);
    free(map->values);
    free(map);
}

int hash_map_get(struct hash_map *map, float key) {
    for (size_t i = 0; i < map->size; i++) {
        if (map->keys[i] == key) {
            return map->values[i];
        }
    }
    return 0;
}

void hash_map_set(struct hash_map *map, float key, int value) {
    for (size_t i = 0; i < map->size; i++) {
        if (map->keys[i] == key) {
            map->values[i] = value;
            return;
        }
    }
    if (map->size == map->capacity) {
        map->capacity *= 2;
        map->keys = realloc(map->keys, map->capacity * sizeof(float));
        map->values = realloc(map->values, map->capacity * sizeof(int));
    }
    map->keys[map->size] = key;
    map->values[map->size] = value;
    map->size++;
}
float finduniq(const float *nums, size_t n) {
    struct hash_map *map = hash_map_create();
    for (size_t i = 0; i < n; i++) {
        int count = hash_map_get(map, nums[i]);
        hash_map_set(map, nums[i], count + 1);
    }
    for (size_t i = 0; i < n; i++) {
        int count = hash_map_get(map, nums[i]);
        if (count == 1) {
            float result = nums[i];
            hash_map_destroy(map);
            return result;
        }
    }
    hash_map_destroy(map);
    return 0./.0; // return NaN to indicate error
}