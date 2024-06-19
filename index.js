const hiddenDiv = document.querySelector('.hidden-share')
const shareDivBtn = document.querySelector('.share-div')

const avatar = document.querySelector('.avatar')
const shareBTN  = document.querySelector('.share-btn')

const toggleSection = () =>{
    hiddenDiv.classList.add('shown')
    avatar.classList.add('hidden')
}

const showAvatar = () =>{
    hiddenDiv.classList.remove('shown')
    avatar.classList.remove('hidden')
}

shareBTN.addEventListener('click', function() {
    toggleSection()
})

shareDivBtn.addEventListener('click', function() {
    showAvatar()
})