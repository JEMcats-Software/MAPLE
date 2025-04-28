// MAPLE-helper.js

const fetch = require('node-fetch'); // Import node-fetch for Node.js environments

const MAPLE = {
    OLC_ALPHABET: '23456789CFGHJMPQRVWX',
    wordList1: [],
    wordList2: [],
    wordList3: [],
    wordList4: [],
    loadLists: async function () {
        const baseUrl = (typeof global.wordsUrl !== 'undefined' && global.wordsUrl) || 'https://cdn.jemcats.software/MAPLE/latest/dist/';

        const [list1, list2, list3, list4] = await Promise.all([
            fetch(baseUrl + 'words_1.json').then(res => res.json()),
            fetch(baseUrl + 'words_2.json').then(res => res.json()),
            fetch(baseUrl + 'words_3.json').then(res => res.json()),
            fetch(baseUrl + 'words_4.json').then(res => res.json())
        ]);

        MAPLE.wordList1 = list1;
        MAPLE.wordList2 = list2;
        MAPLE.wordList3 = list3;
        MAPLE.wordList4 = list4;
    }
};

module.exports = MAPLE;
