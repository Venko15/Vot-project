const loaderElement = document.getElementById('loader');


async function makeRequest(apiUrl){
    showLoader();
    let resp;
    resp = await fetch(apiUrl, {method:"GET"}).then(response => response.json());
    hideLoader();
    return resp;
}

function showLoader() {
    loaderElement.style.display = 'block';
  }
  
  function hideLoader() {
    loaderElement.style.display = 'none';
  }