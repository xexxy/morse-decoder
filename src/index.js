const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '_____': ' ',
};

function decode(expr) {
    const words = expr.match(/.{1,10}/g);
    let answer = '';



    console.log(words);
    for (item of words) {
        const word = item.match(/.{1,2}/g);
        let string = '';

        for (item of word) {
            if (item == 10) {
                string += '.';
            } else if (item == 11) {
                string += '-';
            } else if (item == '**') {
                string += '_';
            } else {
                continue;
            }
        }
        answer += MORSE_TABLE[string];
    }
    return answer;
}

module.exports = {
    decode
}