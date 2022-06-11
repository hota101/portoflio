let btn = document.getElementById('scroll');

window.onscroll = function(){
    if(scrollY >= 1202){
        btn.style.display = 'block';
    }else{
        btn.style.display = 'none';
    }
}

btn.onclick = function(){
    scroll({
        right:0,
        top:0,
        behavior:"smooth"
    })
}