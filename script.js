const shareBtn= document.getElementsByClassName('share-btn-1')[0];
const shareBtn2= document.getElementsByClassName('share-btn-2')[0];

const active= document.getElementById("active");




shareBtn.addEventListener('click', ()=>{
    active.classList.toggle('active-state');
})

shareBtn2.addEventListener('click', ()=>{
    active.classList.toggle('active-state')
})