const fruit = document.getElementsByClassName('fruit');
for(let i=0;i<fruit.length;i++){
   
     const input = document.createElement('input');
     input.style.fontFamily = 'italic';


    const edtbtn = document.createElement('button');
    const edttxt = document.createTextNode('Edit');
    edtbtn.appendChild(edttxt);

    fruit[i].appendChild(edtbtn);
    fruit[i].appendChild(input);
    edtbtn.className='edit-btn';
    input.className='description';
}
const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit',function(event){
event.preventDefault();

const addFruit = document.getElementById('fruit-to-add');

const newLi = document.createElement('li');
const newLiText = document.createTextNode(addFruit.value);

newLi.appendChild(newLiText);
newLi.className='fruit';

const edtbtn = document.createElement('button');
const edttxt = document.createTextNode('Edit');
edtbtn.appendChild(edttxt);
edtbtn.className='edit-btn';

const delbtn = document.createElement('button');
const deltxt = document.createTextNode('x');
delbtn.appendChild(deltxt);
delbtn.className='delete-btn';

newLi.appendChild(delbtn);
newLi.appendChild(edtbtn);


fruits.appendChild(newLi);
});

fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitDel = event.target.parentElement;
       fruits.removeChild(fruitDel);
    }
})


const filter = document.getElementById('filter');
const fruitItems = document.getElementsByClassName('fruit');

filter.addEventListener('keyup',function(event){
    
    const textEntered = event.target.value.toLowerCase();
    
    for(let i=0;i<fruitItems.length;i++){
       const fruitStr = fruitItems[i].firstChild.textContent.toLowerCase();

       if(fruitStr.indexOf(textEntered)===-1){
          fruitItems[i].style.display='none';
       }
       else{
         fruitItems[i].style.display='flex';
       }



    }





})