const $=document
const menu=$.querySelector('.navListOpen');
const hambergerIcon=$.querySelector('.iconMenu');
const closeMenu=$.querySelector('#closeMenu');
//open
hambergerIcon.addEventListener('click',function(){
menu.style.display='flex'
console.log('menu is opened!')
})
//close
closeMenu.addEventListener('click',function(){
menu.style.display='none'
console.log('menuBar is closed!')
})

