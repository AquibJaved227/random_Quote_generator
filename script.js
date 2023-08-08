const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('paragraph');


const apiURL = "https://api.quotable.io/random";

async function getQoute(){
try{
  btnEl.innerText = "Loading 🤨"
  btnEl.disabled = true;
  const response = await fetch(apiURL)
  const data = await response.json();
  const quoteContent = data.content;
 quoteEl.innerText = quoteContent;
  btnEl.innerText = "Get A Quote 😎"
  btnEl.disabled = false;
   
}catch(error){
  quoteEl.innerText = "ERROR, Plzz Try Again"
  btnEl.innerText = "Get A Quote 😎"
  btnEl.disabled = true;
}
}

btnEl.addEventListener('click',getQoute);



