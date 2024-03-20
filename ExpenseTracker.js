const addExpense = document.querySelector('.Add');
const list = document.querySelector('.List');


let obj;

addExpense.addEventListener('click',function(event){
    event.preventDefault();

    const amount = document.getElementsByClassName('Amount');
    const description=document.getElementsByClassName('Description');
    const categories = document.getElementById('Categories');
    
    
      obj = { 
         Amount:amount.useramount.value,
         Description:description.userdescription.value,
         Categories:categories.value
        }
    
     
    
     
    let myobj = JSON.stringify(obj);
    localStorage.setItem(categories.value,myobj);
   

     const newLi = document.createElement('li');
     const Litext = document.createTextNode('ExpenseAmount-'+obj.Amount+' Description-'+obj.Description+' category- '+obj.Categories);
     newLi.appendChild(Litext);
     list.appendChild(newLi);
    
     const delbtn = document.createElement('button');
     const deltext = document.createTextNode('Delete');
     delbtn.appendChild(deltext); 
     delbtn.className=" Delete-btn ";
     newLi.appendChild(delbtn);
     


     const editbtn = document.createElement('button');
     const edittext = document.createTextNode('Edit');
     editbtn.appendChild(edittext);
     editbtn.className=" Edit-btn "
     newLi.appendChild(editbtn);

     
     
   
      
      
    
     
  });
   
  list.addEventListener('click',function(event){
 
  if(event.target.classList.contains('Delete-btn')){
   const removelist = event.target.parentElement;
   list.removeChild(removelist);
   localStorage.removeItem(obj.Categories);
    document.getElementsByClassName('Amount').value = obj.Amount;

    
} });  
list.addEventListener('click',function(event){
 
if(event.target.classList.contains('Edit-btn')){
   const editlist = event.target.parentElement;
    list.removeChild(editlist);
    localStorage.removeItem(obj.Categories)

    document.getElementsByClassName('Amount').value=obj.Amount;
    document.getElementsByClassName('Description').value=obj.Description;
    document.getElementById('Categories').value=obj.Categories; 
   }
 });  
 
   


 








