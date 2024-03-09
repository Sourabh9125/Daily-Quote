const url ="https://api.quotable.io/random";
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn=document.querySelector("#btn");
let getQuote = async()=>{
    let response = await fetch(url)
    let data = await response.json()
    quote.innerText = data.content;
    author.innerText = data.author;
}
window.addEventListener("load",getQuote());
btn.addEventListener("click",getQuote());

