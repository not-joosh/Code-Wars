/*
        6 kyu
        Take a Ten Minutes Walk
        292350290% of 16,37548,181 of 146,125JKphobic17 Issues Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

        Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/
function isValidWalk(walk) {
    let dx = 0;
    let dy = 0;
    const dt = walk.length;
    const dirMap = {
      n: () => dy--,
      s: () => dy++,
      w: () => dx--,
      e: () => dx++,
    };
  
    for (const dir of walk) {
      dirMap[dir]();
    }
    return dt === 10 && dx === 0 && dy === 0;
}
/*
Test Results:
        Time: 796ms Passed: 104Failed: 0
        Test Results:
        Walk Validator
        should return false if walk is too short
        should return false if walk is too long
        should return false if walk does not bring you back to start
        should return true for a valid walk
        Completed in 1ms
        Random Walk Validator
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return true for a valid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return true for a valid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return true for a valid walk
        should return true for a valid walk
        should return true for a valid walk
        should return true for a valid walk
        should return true for a valid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return true for a valid walk
        should return true for a valid walk
        should return true for a valid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return false for an invalid walk
        should return false for an invalid walk
        Completed in 4ms
        You have passed all of the tests! :)
*/