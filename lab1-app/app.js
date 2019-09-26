const randomQuotes = require('random-quotes').default;

const formatQuote = function() {
  const quote = randomQuotes();
  return `${quote.body} --${quote.author}`
}

console.log(formatQuote());
