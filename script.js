const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".image_container");
const imgsEl = document.getElementsByTagName("img");  

let CurrentImg = 1;
let timeout;

nextEl.addEventListener("click",()=>{
    CurrentImg++
    clearTimeout(timeout)
    updateImg()
});

prevEl.addEventListener("click",()=>{
    CurrentImg--
    clearTimeout(timeout)
    updateImg()
});

updateImg()

function updateImg(){
        if(CurrentImg > imgsEl.length){
            CurrentImg = 1;
        }
        else if(CurrentImg < 1){
            CurrentImg = imgsEl.length;
        }
        imageContainerEl.style.transform = `translate(-${(CurrentImg-1)*500}px)`;
        // timeout = setTimeout(() => {
        //     CurrentImg++
        //     updateImg()
        // }, 2000);
}

