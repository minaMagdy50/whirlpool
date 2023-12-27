var loginInput = document.getElementById('loginInput');
var emailInput = document.getElementById('emailInput');
var passwordInput  = document.getElementById('passwordInput');

var btn = document.getElementById('btn')





loginlist = [];


if(localStorage.getItem('lista2')  != null )  {


    loginlist = JSON.parse(localStorage.getItem('lista2'))

    
}


    

function addAccount(){
   var login = {
    name : loginInput.value,
    email : emailInput.value,
    password : passwordInput.value,

}

if(loginInput.value == "" && emailInput.value == "" && passwordInput.value == "" ){

    document.getElementById("test").click()
}

else if(valudationName() == true && valudationEmail() == true && valudationPassword() == true){

    loginlist.push( login )
    localStorage.setItem('lista2' , JSON.stringify( loginlist))
    cleardata()
    document.getElementById('successful').innerHTML = 'successful'

    window.location = './index.html'

}

else if(valudationName() == false && valudationEmail() == false && valudationPassword() == false){

    document.getElementById("test").click()


}

else if(valudationPassword() == false){
    document.getElementById("test").click()
}

else if(valudationEmail() == false){
    document.getElementById("test").click()
}

else if(valudationName() == false){
    document.getElementById("test").click()
}

}


btn.addEventListener( 'click' , addAccount  )



function cleardata(){
    loginInput.value = ""
    emailInput.value = ""
    passwordInput.value = ""
}




function valudationName(){
    var text = loginInput.value
    var regex = /^[a-zA-Z\s]{3,12}$/

    if( regex.test( text  )){

        return true;

    }
    else{

        return false;
 
 }
 
}
function valudationEmail(){
    
    var email = emailInput.value
    var regex2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if( regex2.test( email )){
        return true;

    }
    else{
        return false;
 
 }
 
}
function valudationPassword(){

    var password = passwordInput.value
    var regex3 = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

    if( regex3.test( password )){

        return true;
    }
    else{
        return false;
 
 }
 
}