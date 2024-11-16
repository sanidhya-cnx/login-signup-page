const container = document.getElementById('container');
const rightbtn = document.getElementById('right');
const leftbtn = document.getElementById('left');

rightbtn.addEventListener('click',()=>{
    container.classList.add("active");
});
leftbtn.addEventListener('click',()=>{
    container.classList.remove("active");
});d