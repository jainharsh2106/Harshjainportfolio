// dark mode
let darkmodeicon = document.getElementById('darkMode-icon');
darkmodeicon.onclick = () => {
    darkmodeicon.classList.toggle('bxs-moon');
    document.body.classList.toggle('dark-mode');
};
// professional skill circle
const circles=document.querySelectorAll('.circle');
circles.forEach(
  elem=>{
    var dots=elem.getAttribute("data-dots");
    var marked=elem.getAttribute("data-percent");
    var percent=Math.floor(dots*marked/100)
    var points="";
    var rotate = 360/dots;
    for(let i=0 ; i<dots; i++){
      points+=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML=points;
    const pointsmarked=elem.querySelectorAll('.points');
    for(let i=0 ; i<percent; i++){
      pointsmarked[i].classList.add('marked')
    }
  }
)