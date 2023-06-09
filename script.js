const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const newQuote = document.querySelector('.new-quote')

function getQuote() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://type.fit/api/quotes')
  xhr.onreadystatechange = function() {
    if(this.status === 200 && this.readyState === 4) {
      const data = JSON.parse(this.responseText)
      const random = Math.floor(Math.random() * data.length)
      quoteText.textContent = data[random].text;
      quoteAuthor.textContent = data[random].author;
    }
  }
  xhr.send()
}
newQuote.addEventListener('click', getQuote)