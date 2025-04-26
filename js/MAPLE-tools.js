// MAPLE-tools.js
// Tools for MAPLE.js

MAPLE.plusCodeToBigNumber = function plusCodeToBigNumber(code) {
    code = code.replace(/\+/g, '').toUpperCase();
    let bigNum = BigInt(0);
    for (let c of code) {
        let value = MAPLE.OLC_ALPHABET.indexOf(c);
        if (value === -1) continue;
        bigNum = bigNum * BigInt(20) + BigInt(value);
    }
    return bigNum;
}

MAPLE.bigNumberToPlusCode = function bigNumberToPlusCode(bigNum) {
    let chars = '';
    while (bigNum > 0) {
        chars = MAPLE.OLC_ALPHABET[Number(bigNum % BigInt(20))] + chars;
        bigNum = bigNum / BigInt(20);
    }
    while (chars.length < 11) chars = '2' + chars;
    return chars.slice(0, 8) + '+' + chars.slice(8);
}
