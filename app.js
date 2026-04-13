const grid = document.getElementById("grid");

let index = 0;
const visible = 3;
const total = grid.children.length;
const imageWidth = 300;

function updateSlider(){
    grid.style.transform = `translateX(-${index * imageWidth}px)`;
}

function nextSlide(){
    index++;
    
    if(index > total - visible){
        index = 0;
    }

    updateSlider();
}

function prevSlide(){
    index--;

    if(index < 0){
        index = total - visible;
    }

    updateSlider();
}

// automatic animation
setInterval(nextSlide, 3000);


/*nav-menu*/

const hamMenu = document.querySelector(".ham-menu");
const navMenu = document.querySelector(".nav-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
 hamMenu.classList.remove("active");
 navMenu.classList.remove("active"); 
}))