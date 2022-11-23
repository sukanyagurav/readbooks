const dropdown=document.querySelectorAll('.dropdown')
    dropdown.forEach(dropdown =>{
        const select= dropdown.querySelector('.select')
        const caret=dropdown.querySelector('.caret')
        const menu = dropdown.querySelector('.browse__menu')
        const options = dropdown.querySelectorAll('.browse__menu li')
        const selected = dropdown.querySelector('.selected')
        select.addEventListener('click',()=>{
            select.classList.toggle('select-clicked')
            caret.classList.toggle('caret-rotate')
            menu.classList.toggle('open-menu')
        })
        options.forEach(option=>{
            option.addEventListener('click',()=>{
                selected.innerText = option.innerText
                select.classList.remove('select-clicked')
                caret.classList.remove('caret-rotate')
                menu.classList.remove('open-menu')
                options.forEach(option=>{
                    option.classList.remove('active')
                })
                option.classList.add('active')
            })
        })
    })

const slides=document.querySelectorAll('.slides')
const carousel = document.querySelector('.carousel')
const leftBtn=document.getElementById('left')
const rightBtn=document.getElementById('right')
const slides_count=Math.floor(slides.length / 2);
console.log(slides_count)
let current_slide = 0;
leftBtn.addEventListener('click',()=>{
  current_slide--
  if(current_slide < 0){
    current_slide=slides_count 
 
  }
    updateCarousel()
  
})

rightBtn.addEventListener('click',()=>{
   current_slide++
  if(current_slide > (slides_count)){
    current_slide=0
 
  }
       updateCarousel()
  
})
function updateCarousel(){
    carousel.style.transform = `translateX(${-current_slide *  slides[0].offsetWidth}px)`
}