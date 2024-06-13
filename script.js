document.addEventListener('DOMContentLoaded', () => {
    const emojis = [
        { code: '&#8986;', decimal: '8986' },
        { code: '&#8987;', decimal: '8987' },
        { code: '&#9193;', decimal: '9193' },
        { code: '&#9194;', decimal: '9194' },
        { code: '&#9195;', decimal: '9195' },
        { code: '&#9196;', decimal: '9196' },
        { code: '&#9200;', decimal: '9200' },
        { code: '&#9203;', decimal: '9203' },
        { code: '&#9748;', decimal: '9748' },
        { code: '&#9749;', decimal: '9749' },
        { code: '&#9800;', decimal: '9800' },
        { code: '&#9801;', decimal: '9801' },
        { code: '&#9802;', decimal: '9802' },
        { code: '&#9803;', decimal: '9803' },
        { code: '&#128512;', decimal: '128512' },
        { code: '&#128513;', decimal: '128513' },
        { code: '&#128514;', decimal: '128514' },
        { code: '&#128515;', decimal: '128515' },
        { code: '&#128516;', decimal: '128516' },
        { code: '&#128517;', decimal: '128517' },
        { code: '&#128518;', decimal: '128518' },
        { code: '&#128519;', decimal: '128519' },
        { code: '&#128520;', decimal: '128520' },
        { code: '&#128521;', decimal: '128521' },
        { code: '&#128522;', decimal: '128522' },
        { code: '&#128523;', decimal: '128523' },
        { code: '&#10160;', decimal: '10160' },
        { code: '&#10175;', decimal: '10175' },
        { code: '&#11035;', decimal: '11035' },
        { code: '&#11036;', decimal: '11036' },
        { code: '&#11088;', decimal: '11088' },
        { code: '&#11093;', decimal: '11093' }
    ];

    const emojiGallery = document.getElementById('emoji-gallery');

    emojis.forEach(emoji => {
        const emojiItem = document.createElement('div');
        emojiItem.classList.add('emoji-item');
        emojiItem.innerHTML = `
            <span>${emoji.code}</span>
            <code>${emoji.decimal}</code>
        `;
        emojiGallery.appendChild(emojiItem);
    });
});