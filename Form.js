const submit = document.querySelector('button');
const form = document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
   let Userdetails = {
        Username : event.target.username.value,
        Useremail: event.target.useremail.value,
        Userphone: event.target.userphone.value
   }
     
    let CoUserdetails = JSON.stringify(Userdetails);
  
    localStorage.setItem('Userdetails',CoUserdetails);

})
