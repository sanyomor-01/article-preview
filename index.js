const active = document.getElementById('active')
const shareBtn = document.getElementById('share-btn')


const shareBTN2  = document.getElementById('share-btn-2')


shareBtn.addEventListener('click', () => {
    active.classList.toggle('active-state')
})

shareBTN2.addEventListener('click', () =>{
    active.classList.toggle('active-state')
})