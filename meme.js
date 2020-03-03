const form = document.querySelector(".meme-form");
const imageUrl= document.querySelector("input[name='url']");
const topText = document.querySelector("input[name='top-text']");
const bottomText = document.querySelector("input[name='bottom-text']");
const memeDiv = document.querySelector("#complete");
const topDiv=document.querySelector(".top-text-div");
const bottomDiv= document.querySelector(".bottom-text-div");
const completeImage=document.querySelector(".complete-image");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('submit')
    const newMeme = makeMeme (imageUrl.value);
    completeImage.appendChild(newMeme);
    imageUrl.value="";

    const headText = document.createElement('div');
    headText.className="header";
    headText.innerHTML=topText.value;
    completeImage.appendChild(headText);
    topText.value="";

    const footerText= document.createElement('div');
    footerText.className="footer";
    footerText.innerHTML=bottomText.value;
    completeImage.appendChild(footerText);
    bottomText.value="";
});


function makeMeme(url) {
   const image = document.createElement('img');
    //const text =document.createElement('h1');
    image.src =url;
    //text.innerHTML= top;
    //text.innerHTML= bottom;
   
    return image ;
    //return text;
}

//topText.value, 
    //bottomText.value

    completeImage.addEventListener('click', function(e){
        console.dir(e); //(e.target);
        e.target.nextElementSibling.remove();
        e.target.nextElementSibling.remove();
        e.target.remove();
    })