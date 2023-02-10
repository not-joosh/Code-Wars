/*
        4 kyu
        Text align justify
        113315389% of 9072,282 of 5,868kesheshyan23 Issues Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

        Here are the rules:

        Use spaces to fill in the gaps between words.
        Each line should contain as many words as possible.
        Use '\n' to separate lines.
        Gap between words can't differ by more than one space.
        Lines should end with a word not a space.
        '\n' is not included in the length of a line.
        Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
        Last line should not be justified, use only one space between words.
        Last line should not contain '\n'
        Strings with one word do not need gaps ('somelongword\n').
        Example with width=30:

        Lorem  ipsum  dolor  sit amet,
        consectetur  adipiscing  elit.
        Vestibulum    sagittis   dolor
        mauris,  at  elementum  ligula
        tempor  eget.  In quis rhoncus
        nunc,  at  aliquet orci. Fusce
        at   dolor   sit   amet  felis
        suscipit   tristique.   Nam  a
        imperdiet   tellus.  Nulla  eu
        vestibulum    urna.    Vivamus
        tincidunt  suscipit  enim, nec
        ultrices   nisi  volutpat  ac.
        Maecenas   sit   amet  lacinia
        arcu,  non dictum justo. Donec
        sed  quam  vel  risus faucibus
        euismod.  Suspendisse  rhoncus
        rhoncus  felis  at  fermentum.
        Donec lorem magna, ultricies a
        nunc    sit    amet,   blandit
        fringilla  nunc. In vestibulum
        velit    ac    felis   rhoncus
        pellentesque. Mauris at tellus
        enim.  Aliquam eleifend tempus
        dapibus. Pellentesque commodo,
        nisi    sit   amet   hendrerit
        fringilla,   ante  odio  porta
        lacus,   ut   elementum  justo
        nulla et dolor.
        Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).

        Have fun :)
*/
function justify(str, len) {
    var words = str.split(' ');
    var lines = [];
    var lastLine = words.reduce(function(line, word) {
        if (line) {
            if (line.length + word.length + 1 <= len)
                return line + ' ' + word;
            lines.push(line);
        }
        return word;
    });
    lines = lines.map(function(line) {
        if (line.indexOf(' ') >= 0)
        for (var lineLen = line.length; lineLen < len; )
            line = line.replace(/ +/g, function(spaces) {
                return spaces + (lineLen++ < len ? ' ' : '');
            });
        return line;
    });
    lastLine && lines.push(lastLine);
    return lines.join('\n');
}
/*
TEST RESULTS:
        Time: 844ms Passed: 27Failed: 0
        Test Results:
        Fixed tests
        should work on simple examples
        should work for the example of the description
        Completed in 1ms
        Random tests
        should work with width 22
        should work with width 101
        should work with width 87
        should work with width 93
        should work with width 77
        should work with width 51
        should work with width 95
        should work with width 22
        should work with width 90
        should work with width 105
        should work with width 67
        should work with width 69
        should work with width 109
        should work with width 75
        should work with width 104
        should work with width 98
        should work with width 17
        should work with width 92
        should work with width 106
        should work with width 106
        should work with width 13
        should work with width 15
        should work with width 200
        should work with width 759
        should work with width 800
        Completed in 15ms
        You have passed all of the tests! :)
*/