/*
 *Create an array of object and each object have two key-value, quote and author
 */
var arrOfQuotes = [
  {
    quote: `“So many books, so little time.”`,
    author: "― Frank Zappa",
  },
  {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    author: "― Albert Einstein",
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    author: "― Mae West",
  },
  {
    quote: `“Be the change that you wish to see in the world.”`,
    author: "― Mahatma Gandhi",
  },
];

/*
 *assign the quote value to the quote ID and the author value for the author ID
 */
var quote = document.getElementById("quote");
var author = document.getElementById("author");

/*
 *a function to loop through the array of objects and randomly select an object and print it to the user
 */
function generateQuote() {
  for (let i = 0; i < arrOfQuotes.length; i++) {
    var random = Number.parseInt(Math.random() * arrOfQuotes.length + 1);
    quote.innerHTML = arrOfQuotes[random].quote;
    author.innerHTML = arrOfQuotes[random].author;
  }
  showQuote();
}


var quoteDiv = document.getElementById("output-box");
function showQuote(){
  
    document.getElementById("output-box").style.display = "block";

}