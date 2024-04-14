

function keyHasBeenPressed() {
    let textAreaContent = document.querySelector('textarea');

    let charCount = document.querySelector('.charCount');
    charCount.innerHTML = String(textAreaContent.value).length;

    let wordCount = document.querySelector('.wordCount');
    wordCount.innerHTML = String(textAreaContent.value).split(' ').length;
    
    let charLimit = 200;

    let charLimitElement = document.querySelector('.charLimitSpan')
    charLimitElement.innerHTML = charLimit - textAreaContent.value.length;

    if(textAreaContent.value.length > charLimit){
        textAreaContent.value = String(textAreaContent.value).substring(0, charLimit);
    }
   
}

document.querySelector('.clearButton').addEventListener('click', ()=> {
    document.querySelector('textarea').value = '';
    document.querySelector('.charCount').innerHTML = 0;
    document.querySelector('.wordCount').innerHTML = 0;
})
