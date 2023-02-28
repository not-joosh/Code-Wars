/*
        8 kyu
        Find out whether the shape is a cube
        803890% of 1,723212 of 10,571Thomas_J1 Issue Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        To find the volume (centimeters cubed) of a cuboid you use the formula:

        volume = Length * Width * Height

        But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

        It's up to you to find out whether the cuboid has equal sides (= is a cube).

        Return true if the cuboid could have equal sides, return false otherwise.

        Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

        Note: side will be an integer
*/
export function cubeChecker(volume: number, side: number): boolean {
    if (volume <= 0 || side <= 0) {
        return false;
    }
    return Math.pow(side, 3) === volume;
}
/*
TEST RESULTS:
        Time: 2907ms Passed: 2Failed: 0
        Test Results:
        Cube?
        Basic tests
        Random tests
        Completed in 5ms
        You have passed all of the tests! :)
*/