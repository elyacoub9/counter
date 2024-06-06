function countdown() {
    const targetDate = new Date("August 31, 2024").getTime();
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById("days").innerText = days;
}

function displayRandomQuote() {
    const quotes = [
        " (البقرة - 45) وَٱسۡتَعِينُواْ بِٱلصَّبۡرِ وَٱلصَّلَوٰةِۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلۡخَٰشِعِينَ",
        "(البقرة - 153) يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ ",
        "[ البقرة: 155] وَلَنَبۡلُوَنَّكُم بِشَيۡءٖ مِّنَ ٱلۡخَوۡفِ وَٱلۡجُوعِ وَنَقۡصٖ مِّنَ ٱلۡأَمۡوَٰلِ وَٱلۡأَنفُسِ وَٱلثَّمَرَٰتِۗ وَبَشِّرِ ٱلصَّـٰبِرِينَ",
        "(آل عمران - 120) إِن تَمۡسَسۡكُمۡ حَسَنَةٞ تَسُؤۡهُمۡ وَإِن تُصِبۡكُمۡ سَيِّئَةٞ يَفۡرَحُواْ بِهَاۖ وَإِن تَصۡبِرُواْ وَتَتَّقُواْ لَا يَضُرُّكُمۡ كَيۡدُهُمۡ شَيۡـًٔاۗ إِنَّ ٱللَّهَ بِمَا يَعۡمَلُونَ مُحِيطٞ",
        "(آل عمران - 200) يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱصۡبِرُواْ وَصَابِرُواْ وَرَابِطُواْ وَٱتَّقُواْ ٱللَّهَ لَعَلَّكُمۡ تُفۡلِحُونَ ",
        "(يونس - 109) وَٱتَّبِعۡ مَا يُوحَىٰٓ إِلَيۡكَ وَٱصۡبِرۡ حَتَّىٰ يَحۡكُمَ ٱللَّهُۚ وَهُوَ خَيۡرُ ٱلۡحَٰكِمِينَ ",
        "(هود - 11) إِلَّا ٱلَّذِينَ صَبَرُواْ وَعَمِلُواْ ٱلصَّـٰلِحَٰتِ أُوْلَـٰٓئِكَ لَهُم مَّغۡفِرَةٞ وَأَجۡرٞ كَبِيرٞ",
        "[ هود: 115] وَٱصۡبِرۡ فَإِنَّ ٱللَّهَ لَا يُضِيعُ أَجۡرَ ٱلۡمُحۡسِنِينَ",
        " [ النحل: 42] ٱلَّذِينَ صَبَرُواْ وَعَلَىٰ رَبِّهِمۡ يَتَوَكَّلُونَ",
        "اللهم إني أسألك الهدى والتقى والعفاف والغنى"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById("quote-text").innerText = randomQuote;
}

function displayDates() {
    document.getElementById("start-date").innerText = "April 31, 2024";
    document.getElementById("end-date").innerText = "August 31, 2024";
}

countdown();
displayRandomQuote();
displayDates();
setInterval(countdown, 1000 * 60 * 60 * 24); // Update every 24 hours
