const quoteTextElement = document.getElementById('quoteText');
const quoteAuthorElement = document.getElementById('quoteAuthor');
const btn = document.getElementById('getQuoteBtn');
const quoteTypeSelect = document.getElementById('quoteType');
btn.addEventListener('click', async () => {
  var type = quoteTypeSelect.value;
  let apiUrl = '/quotes/getQuote';

  showLoader();

  if (type !== 'any') {
    apiUrl += `?type=${type}`;
  }

  btn.disabled = true; 
  var resp = await makeRequest(apiUrl);
  btn.disabled = false; 

  console.log(resp);
  quoteTextElement.textContent = resp.quote.text;
  quoteAuthorElement.textContent = resp.quote.author


});
