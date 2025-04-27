// MAPLE-full.js
// The full MAPLE library, includes MAPLE.js, MAPLE-tools.js, and MAPLE-helper.js

const MAPLE = {
    OLC_ALPHABET: '23456789CFGHJMPQRVWX',
    wordList1: [],
    wordList2: [],
    wordList3: [],
    wordList4: [],

    loadLists: async function () {
        const baseUrl = (typeof window.wordsUrl !== 'undefined' && window.wordsUrl) || 'https://raw.githubusercontent.com/JEMcats-Software/MAPLE/refs/heads/main/assets/dist/';
        
        const [list1, list2, list3, list4] = await Promise.all([
            fetch(baseUrl + 'words_1.json').then(res => res.json()),
            fetch(baseUrl + 'words_2.json').then(res => res.json()),
            fetch(baseUrl + 'words_3.json').then(res => res.json()),
            fetch(baseUrl + 'words_4.json').then(res => res.json())
        ]);

        this.wordList1 = list1;
        this.wordList2 = list2;
        this.wordList3 = list3;
        this.wordList4 = list4;
    },

    plusCodeToBigNumber: function plusCodeToBigNumber(code) {
        code = code.replace(/\+/g, '').toUpperCase();
        let bigNum = BigInt(0);
        for (let c of code) {
            let value = MAPLE.OLC_ALPHABET.indexOf(c);
            if (value === -1) continue;
            bigNum = bigNum * BigInt(20) + BigInt(value);
        }
        return bigNum;
    },
    
    bigNumberToPlusCode: function bigNumberToPlusCode(bigNum) {
        let chars = '';
        while (bigNum > 0) {
            chars = MAPLE.OLC_ALPHABET[Number(bigNum % BigInt(20))] + chars;
            bigNum = bigNum / BigInt(20);
        }
        while (chars.length < 11) chars = '2' + chars;
        return chars.slice(0, 8) + '+' + chars.slice(8);
    },

    encode: function encode(code) {
        if (!MAPLE.wordList1.length) return alert("Word lists not loaded yet.");
      
        if (code.length !== 12) {
          alert("Plus Code must be exactly 12 characters long!");
          return;
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
      },
      
      decode: function decode(MAPLEcode) {
        if (!MAPLEcode.startsWith("MAPLE//")) {
          return alert("Invalid MAPLE code.");
        }
      
        if (!MAPLE.wordList1.length) return alert("Word lists not loaded yet.");
      
        const input = MAPLEcode.trim().replace("MAPLE//", "").split(/\s*-\s*/);
        if (input.length !== 4) return alert("Please enter 4 comma-separated words.");
      
        const i1 = MAPLE.wordList1.indexOf(input[0]);
        const i2 = MAPLE.wordList2.indexOf(input[1]);
        const i3 = MAPLE.wordList3.indexOf(input[2]);
        const i4 = MAPLE.wordList4.indexOf(input[3]);
      
        if (i1 === -1 || i2 === -1 || i3 === -1 || i4 === -1) {
          alert("One or more words not found in word lists.");
          return;
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
};