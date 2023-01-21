const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    const morseArray = Object.keys(MORSE_TABLE);
    const binaryValueArray = morseArray.map(el => {
        const binRaw = '0000000000' + el
            .split('')
            .map(sym => sym === '-' ? '11' : '10')
            .join('');
        const bin = binRaw.slice(-10);
        return {
            binary: bin,
            value: MORSE_TABLE[el],
        }
        }
    )
    const pattern = new RegExp(".{1," + 10 + "}", "ig");
    let res = expr.match(pattern).map(item => item);
    
    return res
        .map(bin => [{binary: '**********', value: ' '}, ...binaryValueArray].find(el => el.binary === bin).value)
        .join('');
}

module.exports = {
    decode
}