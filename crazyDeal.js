let btns = document.querySelectorAll("#crazy-deals-container button")
btns.forEach(function(el){
    console.log(el);
    el.addEventListener("click",function(){
        alert("You clicked me");
    })
})
