var test=[]

if(localStorage.getItem('lista2') != null  ){


test = JSON.parse(localStorage.getItem('lista2'))



}

var Usernameinput = document.getElementById('Usernameinput')

var passwordInput2 = document.getElementById('passwordInput2')



function singin(){


    for(  var i=0 ; i < test.length ; i++    ){

        if( test[i].email ==  Usernameinput.value  && test[i].password ==  passwordInput2.value ){

            window.location = './welcome.html'
        }



        else{
            
            document.getElementById("test").click()

        }

    }

}