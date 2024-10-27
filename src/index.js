module.exports = function toReadable (number) {
    const ones = number % 10;
    const tens = Math.floor(number % 100 / 10);
    const hundreds = Math.floor(number % 1000 / 100);

    const DIGITS = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

    const TEENS = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };

    const TENSES = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };

    if (number === 0) return DIGITS[0];

    let result = '';

    if (hundreds > 0) {
        result += `${DIGITS[hundreds]} hundred`;
    }

    const lastTwoDigits = number % 100;

    if (lastTwoDigits > 9 && lastTwoDigits < 20) { // 10-19
        result += (result ? ' ' : '') + TEENS[lastTwoDigits];
    } else {
        if (tens > 1) {
            result += (result ? ' ' : '') + TENSES[tens];
        }
        if (ones > 0) {
            result += (result && ones > 0 && tens !== 1 ? ' ' : '') + DIGITS[ones];
        }
    }

    return result.trim();
}
