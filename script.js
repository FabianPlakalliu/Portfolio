 const elements = document.querySelectorAll('.fade-in')

window.addEventListener('scroll', () => {
elements.forEach(el => {
const top = el.getBoundingClientRect().top

if(top < window.innerHeight - 100){
el.classList.add('show')
}
})
})


document.querySelectorAll('a').forEach(link=>{
link.addEventListener('click',function(e){
if(this.getAttribute('href').startsWith('#')){
e.preventDefault()
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior:'smooth'
})
}
})
})