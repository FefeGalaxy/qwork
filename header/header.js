function headerContent(e){
    const headerE = document.createElement("div");
    headerE.innerHTML = `
    <header class="header">
    <img class="section-1_contenido_img" src="./imgs/qworktitulo1.png" alt="">
    <div class="header_burger">
        <div class="barras1"></div>
        <div class="barras2"></div>
        <div class="barras3"></div>
    </div>
</header>

    <div class="header__menu">
    <a class="contenido__cerraduras" href="./cerradurasVer2.html?ver2-1">Cerraduras</a>
    <a class="contenido__candados" href="./candadosVer2.html?ver2-1">Candados</a>
    <a class="contenido__cerrojos" href="./cerrojosVer2.html?ver2-1">Cerrojos</a>
    <a class="contenido__herrajes" href="./herrajesVer2.html?ver2-1">Herrajes</a>
    <a class="contenido__llaveros_c" href="./llaveroscVer2.html?ver2-1">Llaveros cortos</a>
    <a class="contenido__llaveros_l" href="./llaveroslVer2.html?ver2-1">Llaveros largos</a>
    <a class="contenido__pasadores" href="./pasadoresVer2.html?ver2-1">Pasadores</a>
    </div>
    <section class="header__ventana">
    <div class="header__ventana-cierra">
    <button class="header__ventana-cierra-b">X</button>
    </div>
    <div class="header__ventana__contenido">
    <a class="menu-options" href="./menu/sobrenosotros/sobreNosotros.html">Sobre nosotros</a>
    <a class="menu-options" href="./menu/softwarefactory/softwaref.html">Software Factory</a>
    <a class="menu-options" href="./menu/iotyrobotica/iotyrobotica.html">IOT & Robotica</a>
    <a class="menu-options" href="./menu/cloudpos/cloudpos.html">CloudPos</a>
    <a class="menu-options" href="https://www.qwdomo.com.ar/">QWDOMO</a>
    <a class="menu-options" href="./menu/docpath/docpath.html">Docpath</a>
    <a class="menu-options" href="./menu/soporteyservicios/soporteyservicios.html">Soporte y servicios</a>
    <a class="menu-options" href="./menu/seguridadyvigilancia/seguridadyvigilancia.html">Seguridad y vigilancia</a>
    </div>
    </section>
    `

    const botonAbrir = headerE.querySelector(".header_burger");
    const botonCerrar = headerE.querySelector(".header__ventana-cierra");
    const ventana = headerE.querySelector(".header__ventana");
       
        botonAbrir.addEventListener("click", ()=>{
           ventana.style.display = "inherit";
        });
        botonCerrar.addEventListener("click", ()=>{
           ventana.style.display = "";
        });
        e.appendChild(headerE);

}