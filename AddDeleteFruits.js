const fruit = document.getElementsByClassName('fruit');
for(let i=0;i<fruit.length;i++){
    const edtbtn = document.createElement('button');
    const edttxt = document.createTextNode('Edit');
    edtbtn.appendChild(edttxt);

    fruit[i].appendChild(edtbtn);
    edtbtn.className='edit-btn';
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
