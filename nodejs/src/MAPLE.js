// MAPLE.js

module.exports = function(MAPLE) {
    MAPLE.encode = function encode(code) {
        if (!MAPLE.wordList1.length) throw new Error("Word lists not loaded yet.");

        if (code.length !== 12) {
            throw new Error("Plus Code must be exactly 12 characters long!");
        }

        const bigNum = MAPLE.plusCodeToBigNumber(code);

        const base4 = BigInt(MAPLE.wordList4.length);
        const base3 = BigInt(MAPLE.wordList3.length);
        const base2 = BigInt(MAPLE.wordList2.length);

        const i1 = bigNum / (base2 * base3 * base4);
        const i2 = (bigNum / (base3 * base4)) % base2;
        const i3 = (bigNum / base4) % base3;
        const i4 = bigNum % base4;

        const word1 = MAPLE.wordList1[Number(i1)];
        const word2 = MAPLE.wordList2[Number(i2)];
        const word3 = MAPLE.wordList3[Number(i3)];
        const word4 = MAPLE.wordList4[Number(i4)];

        return `MAPLE//${word1}-${word2}-${word3}-${word4}`;
    }

    MAPLE.decode = function decode(MAPLEcode) {
        if (!MAPLEcode.startsWith("MAPLE//")) {
            throw new Error("Invalid MAPLE code.");
        }

        if (!MAPLE.wordList1.length) throw new Error("Word lists not loaded yet.");

        const input = MAPLEcode.trim().replace("MAPLE//", "").split(/\s*-\s*/);
        if (input.length !== 4) throw new Error("Please enter 4 hyphen-separated words.");

        const i1 = MAPLE.wordList1.indexOf(input[0]);
        const i2 = MAPLE.wordList2.indexOf(input[1]);
        const i3 = MAPLE.wordList3.indexOf(input[2]);
        const i4 = MAPLE.wordList4.indexOf(input[3]);

        if (i1 === -1 || i2 === -1 || i3 === -1 || i4 === -1) {
            throw new Error("One or more words not found in word lists.");
        }

        const base4 = BigInt(MAPLE.wordList4.length);
        const base3 = BigInt(MAPLE.wordList3.length);
        const base2 = BigInt(MAPLE.wordList2.length);

        const bigNum = BigInt(i1) * base2 * base3 * base4 +
            BigInt(i2) * base3 * base4 +
            BigInt(i3) * base4 +
            BigInt(i4);

        const code = MAPLE.bigNumberToPlusCode(bigNum);
        return code;
    }
}