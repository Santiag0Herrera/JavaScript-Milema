
//CONSTRUIR SECCIONES

//PAGINA INV
$("#topInv").append(`
<nav class="navbar navbar-light" style="background-color: #b99d9a;">
    <div class="container-fluid">
    <a class="navbar-brand" href="inicio.html"><h1>Milema</h1></a>
        <div id="barra">
            <button class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" id="botonCarrito"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
            </button>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="./nosotros.html">Sobre Nosotros</a>
                    </li>
                </ul>
            </div>
    </div>
</nav>`);

$("#fotoPrincipalIndexInv").append(`<div class="fotoInicial">
<div class="intro">
    <h2 class="animate__animated animate__rubberBand">¡Bienvenido a Milema Home & Deco!</h2>
</div>
</div>`);

//PAGINA ADMIN
$("#topAdm").append(`
<nav class="navbar navbar-light" style="background-color: #b99d9a;">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html"><h1>Milema</h1></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" href="./carrito.html">Carrito</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="./nosotros.html">Sobre Nosotros</a>
                <li class="nav-item">
                <a class="nav-link" href="./CrearArticulos.html">Crear Nuevos Articulos</a>
                </li>
                
            </ul>
        </div>
    </div>
</nav>`);

$("#fotoPrincipalIndexAdm").append(`<div class="fotoInicial">
<div class="intro">
    <h2 class="animate__animated animate__rubberBand">Bienvenido!</h2>
</div>
</div>`);

//HEADER PAGINAS RESTANTES
$("#top").append(`
<nav class="navbar navbar-light" style="background-color: #b99d9a;">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html"><h1>Milema</h1></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="./carrito.html">Carrito</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./nosotros.html">Sobre Nosotros</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`);

$("#fotoPrincipal").append(`<div class="fotoInicial">
<div class="intro">
    <h2 class="animate__animated animate__rubberBand">Tu Carrito de Compras</h2>
    <button type="button" class="btn-lg"><a href="index.html"><p> + Productos</p></a></button>
</div>
</div>`);