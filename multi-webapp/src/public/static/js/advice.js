const adviceTextElement = document.getElementById('adviceText');
const Btn = document.getElementById('getAdviceBtn');

getAdviceBtn.addEventListener('click', async () => {
    let apiUrl = '/advices/getAdvice';
    var resp = await makeRequest(apiUrl);


    if(resp.code!=200){
        alert("losho");
        return
    }
    adviceTextElement.textContent = resp.advice
})