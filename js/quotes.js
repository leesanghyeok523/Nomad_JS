const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "To Travel is to Live",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Never go on trips with anyone you do ntot love.",
    author: "Hemmingway",
  },
  {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "Hilaire Belloc",
  },
  {
    quote: "Travel expands the mind and fills the gap.",
    author: "Sheda Savage",
  },
];
// HTML 요소에서 id가 'quote-text'인 요소를 선택하여 변수에 저장
const quoteText = document.querySelector("#quote-text");

// HTML 요소에서 id가 'quote-author'인 요소를 선택하여 변수에 저장
const quoteAuthor = document.querySelector("#quote-author");

// 명언 배열에서 무작위로 하나의 명언을 선택
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// 선택된 명언의 quote 속성을 'quote-text' 요소의 텍스트로 설정
quoteText.innerText = todaysQuote.quote;

// 선택된 명언의 author 속성을 'quote-author' 요소의 텍스트로 설정
quoteAuthor.innerText = `— ${todaysQuote.author}`;
