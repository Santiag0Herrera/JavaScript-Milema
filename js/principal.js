
let stock= [];
let numReferencia = stock.length;

$.ajax({
    url: "data/catalogo.json",
    dataType: "json",
    success: (respuesta) => {
        cargarProductos(respuesta);
    },
});

//FUNCIONES
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})

function cargarProductos(respuesta){
    stock = respuesta;
    stock.forEach((producto, indice)=>{
        $("#lista").append(
            `<li class="articulos">
                <div class="card">
                    <div id="articuloHoverModal" data-bs-toggle="modal" data-bs-target="#exampleModal${indice}">
                        <img src="`+producto.imagen+`"alt="Artiuclos de decoracion minimalistas vitage" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title" id="title">`+producto.nombre+`</h5>
                            <p class="card-text" id="textDesc">`+producto.descripcion+`.</p>
                            <h6 class="card-text" id="textPrecio">$`+producto.precio+`</h6>
                        </div>
                    </div>
                    <a class="btn btn-primary" id="btn-carrito-add" onClick="addCarrito(${indice})"> Agregar al Carrito </a>
                </div>
            </a>
            </li>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal${indice}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="card">
                                <img src="`+producto.imagen+`"alt="Artiuclos de decoracion minimalistas vitage" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title" id="title">`+producto.nombre+`</h5>
                                <h6 class="card-text" id="textDesc">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.<h6>
                                <h6 class="card-text" id="textPrecio">$`+producto.precio+`</h6>
                            </div>
                        </div>
                    </div>
                        <div class="modal-footer">
                            <a class="btn btn-primary" onClick="addCarrito(${indice})"> Agregar al Carrito </a>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>`
            
        );
        
        localStorage.setItem("stock", JSON.stringify(stock));
    });
}


//ANIMACIONES
$("#top").slideDown("slow");
$("#fotoPrincipal").slideDown("slow");
$("#formularioCreacion").fadeIn("slow");
$(".Titulo").fadeIn("slow");
