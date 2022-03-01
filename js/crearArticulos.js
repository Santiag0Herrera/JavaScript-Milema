let stock2= [];
$("#crearArticulo").click( function crearArticulo(){
    let nombrev = $("#nombreArticulo").val();
    let descripcionv = $("#descripcionArticulo").val();
    let preciov = $("#precioArticulo").val();
    let imagenv = $("#basic-url").val();
    let Articulo = {
        nombre: nombrev,
        descripcion: descripcionv,
        precio: preciov,
        imagen: imagenv};
    stock2.push(Articulo);
    localStorage.setItem("artCreado", JSON.stringify(stock2));
    cantidadArticulos = cantidadArticulos+1;
});

function leerLocalArticulos (){
    if(localStorage.getItem("artCreado")){
        const almacenados = JSON.parse(localStorage.getItem("artCreado"));
        almacenados.forEach((producto, indice) => {
            $("#lista").append(
                `<li class="articulos">
                    <div class="card">
                        <img src="`+producto.imagen+`"alt="Artiuclos de decoracion minimalistas vitage" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title" id="title">`+producto.nombre+`</h5>
                        <p class="card-text" id="textDesc">`+producto.descripcion+`.</p>
                        <h6 class="card-text" id="textPrecio">$`+producto.precio+`</h6>
                        <a class="btn btn-primary"  id="btn-carrito-delete" onClick = "removeProduct(${indice})"> Quitar del Carrito </a>
                        </div>
                    </div>
                </li>`);
                
            stock2.push(producto);
        });
    }
}
leerLocalArticulos();

const removeProduct = (indice) => {
    stock2.splice(indice, 1);
    actualizarStorage(stock2);
    leerLocalArticulos();
};

const actualizarStorage = (stock2) => {
    localStorage.setItem("artCreado", JSON.stringify(stock2));
};

if (localStorage.getItem("artCreado")) {
    stock2 = JSON.parse(localStorage.getItem("artCreado"));
}