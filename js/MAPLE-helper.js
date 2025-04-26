// MAPLE-helper.js
// Helper for MAPLE.js

const MAPLE = {
    OLC_ALPHABET: '23456789CFGHJMPQRVWX',
    wordList1: [],
    wordList2: [],
    wordList3: [],
    wordList4: [],

    loadLists: async function () {
        const baseUrl = (typeof window.wordsUrl !== 'undefined' && window.wordsUrl) || 'assets/dist/';
        
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
    }
};