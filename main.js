import JSConfetti from 'js-confetti';


document.getElementById("confettiBtn").addEventListener("click",function(e){
  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti()
})



function createSquare(){
  const stars = document.querySelector('.stars');
  const square = document.createElement('span');
  var size = Math.random() * -10;
  
  square.style.width = 6 + size + 'px';
  square.style.height = 6 + size + 'px';
  
  square.style.top = Math.random() * innerHeight + 'px';
  square.style.left = Math.random() * innerWidth + 'px';
  
  stars.appendChild(square);

};
let counter = 0;
var interval = setInterval(() => {
    counter++
    if(counter < 300){
      createSquare();
    }else{
      clearInterval(interval);
    }
}, 100);


document.getElementById("hamburgerBtn").addEventListener("click", function(){ 
  const resMenu = document.getElementById("hamburger-menu");
  resMenu.classList.toggle("show-hidden");
})

window.addEventListener("scroll", function(){
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const nav = document.getElementById("menu");
  const menuList = document.querySelectorAll(".list-items");
  hamburgerBtn.classList.toggle("hamburger-res", window.scrollY > 100);
  nav.classList.toggle("sticky-menu", window.scrollY > 100);
  menuList.forEach(item => {
    item.classList.toggle("new-menu-lists", window.scrollY > 100);
  })
  document.getElementById("lineShape").classList.toggle("small-line", window.scrollY > 500)
  document.getElementById("brands-lineShape").classList.toggle("small-line", window.scrollY > 1150);
})