/*
        8 kyu
        Find out whether the shape is a cube
        924090% of 1,8565,585 of 12,548Thomas_J1 Issue Reported
        JavaScript
        Node v8.1.3
        VIM
        EMACS
        Instructions
        Output
        Past Solutions
        To find the volume (centimeters cubed) of a cuboid you use the formula:

        volume = Length * Width * Height

        But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

        It's up to you to find out whether the cuboid has equal sides (= is a cube).

        Return true if the cuboid could have equal sides, return false otherwise.

        Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

        Note: side will be an integer
*/
var cubeChecker = function(volume, side) {
    if (side <= 0) 
        return false; 
    var cubeVolume = side * side * side;
    return cubeVolume === volume;
};