const content = document.querySelector(".content");
const newQuote = document.querySelector("#new-quote");
const tweetQuote = document.querySelector("#tweet-quote");

async function fetchQuote() {
  const data = await fetch("https://api.quotable.io/random").then((response) =>
    response.json()
  );
  return data;
}

async function createQuote() {
  document.querySelector(".content").innerHTML = ``;
  const newQuote = await fetchQuote();
  const quote = document.createElement("div");
  quote.classList.add("quote");

  quote.innerHTML = `<p>“${newQuote.content}“</p>
                    <span>${newQuote.author}</span>`;

  document.querySelector(".content").append(quote);

  tweetQuote.addEventListener("click", () => {
    window.open(`https://twitter.com/intent/tweet/?text=${newQuote.content}`);
  });
}

newQuote.addEventListener("click", () => {
  createQuote();
});

createQuote();
