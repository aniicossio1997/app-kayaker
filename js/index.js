

  let contentHeader = `
  <nav class="menu">
  <a href="index.html">
  <span class="logo"> 【YaKer】</span>
  </a>
  <span class="btn_menu">
    <i class="fas fa-bars"></i>
  </span>
  <ul class="menu_items">
    <li>
      <a href="index.html" class="btn_link active"
        ><i class="fas fa-home"></i> home</a
      >
    </li>
    <li>
      <a href="gallery.html" class="btn_link"
        ><i class="far fa-image"></i> Galeria</a
      >
    </li>
    <li>
      <a href="servicios.html" class="btn_link"
        ><i class="fas fa-globe"></i> Servicio</a
      >
    </li>
  
    <li>
      <a href="descuentos.html" class="btn_link"
        ><i class="fas fa-tag"></i> descuentos</a
      >
    </li>
    <li>
      <a href="contacto.html" class="btn_link"
        ><i class="fas fa-envelope"></i> Contacto</a
      >
    </li>
  </ul>
  
  </nav>
      `;
    let contentFooter = `  <div>
    <p class="footer-text">
      Dolore quisquam nisi voluptate eveniet omnis cupiditate laboriosam
    </p>
  </div>
  <div>
    <ul class="social-icons">
      <li>
        <a class="facebook" href="https://www.facebook.com/" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a class="instagram" href="https://www.instagram.com/" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a class="twitter" href="http://twitter.com/" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
      </li>
    </ul>
  </div>`
    document.getElementById("idHeader").innerHTML = (contentHeader);
    document.getElementById("idFooter").innerHTML = (contentFooter);
  
  

window.addEventListener("load", (event) => {
  console.log("window addEventListener load event");
  const btn_menu = document.querySelector('.btn_menu')
  const menu_items = document.querySelector('.menu_items')
  const btn_link = document.querySelectorAll('.btn_link')



  if (btn_menu) {
    btn_menu.addEventListener('click', () => {
      menu_items.classList.toggle('show')
    })
  }
});



  // for (var i=0; i< btn_link.length; i++) {
  //   //Añades un evento a cada elemento
  //   btn_link[i].addEventListener("click", () => {
  //      //Aquí la función que se ejecutará cuando se dispare el evento
  //      location.reload();


  //   })
  // }


