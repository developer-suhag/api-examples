const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}

const displayQuotes = (quote) => {
    const quoteElement = document.getElementById('quotes');
    quoteElement.innerHTML = `<q> ${quote.quote} </q>`;
}