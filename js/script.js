function generateQuote() {
    const quotes = [
        {
            quote: "it does not matter how slow you go as long as you dont stop",
            author: "Confuscious", 
        },
        {
            quote: "in three words i can sum up everything ive learned about life: it goes on.",
            author: "Robert Frost" 
        },
        {
            quote: "if you dont like the weather in New England, wait a minute",
            author: "Mark Twain",
        }
        {
            quote: "Nothing is impossible, the world itself says 'I'm possible':",
            author: "Audrey Hepburn",
        }
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("qutation").innerHTML = "&quot;" + quotes[arrayIndex].quote + "&quot;";
    document.getElementById("author").innerHTML = "&by; " + quotes[arrayIndex].author;
    //console.log(arrayIndex);
    
}

window.onload =function () {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote)

}