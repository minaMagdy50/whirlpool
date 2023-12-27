var test=[]

if(localStorage.getItem('lista2') != null  ){


test = JSON.parse(localStorage.getItem('lista2'))



}


for(var i=0 ; i < test.length ; i++  ){


    document.getElementById('demo').innerHTML = test[i].name


}

console.log('test1')
var btn2 = document.getElementById('btn2')
console.log(btn2)

btn2.addEventListener(  'click'  ,function(){
    window.location.href = './index.html'
}  )

