
let imgCarousel=document.getElementsByClassName('imgCarousel')
let desliza=1
let imga=document.getElementsByClassName('imgClass')
let carousel=document.getElementsByClassName('carousel')


setInterval(()=>{
    for(let i=0;i<imgCarousel.length; i++){
        imgCarousel[i].style.transform=`translate(${-desliza*(imga[i].width+100)}px)`
    }
    desliza++
    if(desliza>=imgCarousel.length){
        desliza=0
    }
    
},10000)
carousel.addEventListener('click', function(){
    for(let i=0;i<imgCarousel.length; i++){
        imgCarousel[i].style.transform=`translate(${-desliza*(imga[i].width+100)}px)`
    }
    desliza++
    if(desliza>=imgCarousel.length){
        desliza=0
    }
})

