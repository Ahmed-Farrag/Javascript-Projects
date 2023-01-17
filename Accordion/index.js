// nextElemntSepling   - in css +
// scrollHeight
// target


let btn = document.getElementsByClassName('accordion');

for(let i = 0 ; i < btn.length; i++){
    btn[i].addEventListener('click',function(){
        let disc = this.nextElementSibling;
        if(disc.style.maxHeight){
            disc.style.maxHeight=null;
        }else{
            disc.style.maxHeight = disc.scrollHeight + "px"
        }
    })
}
