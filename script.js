const icon = document.querySelector("#button");
const ul = document.querySelector('ul');

icon.addEventListener("click", () => {
    ul.classList.toggle('ul-show')

})

const showbtn = document.querySelector('.show-more');
const hideinfo = document.querySelector('.hide-about');
showbtn.addEventListener('click', () => {
    hideinfo.classList.toggle('show-about');
    if (showbtn.innerHTML === 'show more') {
        showbtn.innerHTML = 'show less';
    }
    else {
        showbtn.innerHTML = 'show more'
    }
})
const li = document.querySelectorAll('li');
li.forEach(item => {
    item.addEventListener('click', () => {
        ul.classList.remove('ul-show')
    })
})
const up = document.querySelector('.up');
up.addEventListener('click', () => {
    window.scrollTo({ top: 0, behaviour: 'smooth' })

})
