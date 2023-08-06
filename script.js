const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})


document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}))


 function toggle(){
     var blur = document.getElementById('blur');
     blur.classList.toggle('active');
     var popup = document.getElementById('popup');
     popup.classList.toggle('active');
    }

const form = [...document.querySelector('.form').children];

form.forEach((item,i)=>{
    setTimeout(()=>{
        item.computedStyleMap.opacity=1;
    }, i*100);
})

//form validation

const name = document.querySelector('.name') || null;
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.submit-btn');

if(name ==null){
    

}else{
    submitBtn.addEventListener('click',()=>{
        fetch('/register-user',{
            method: 'post',
            headers: new Headers({'Content-Type':'application/json'}),
            body: JSON.stringify({
                name: name.value,
                email:email.value,
                password:password.value
            })
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.name){
                alert('register succesful');
            }else{
                alert('data');
            }
        })
    })
}

