window.onload = function () { 
 
}
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});

  const btn_menu = document.querySelector('.btn_menu')
  const menu_items = document.querySelector('.menu_items')
  const btn_link = document.querySelectorAll('.btn_link')
 
  if(btn_menu){
    btn_menu.addEventListener('click', () =>{
    menu_items.classList.toggle('show')
     })
  }
   
  for (var i=0; i< btn_link.length; i++) {
    //Añades un evento a cada elemento
    btn_link[i].addEventListener("click", () => {
       //Aquí la función que se ejecutará cuando se dispare el evento
       location.reload();


    })
  }

