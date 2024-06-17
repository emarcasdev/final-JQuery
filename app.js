$(document).ready(function () {
  $(function () {
    // Utilizo la API de Google Books
    $.getJSON("https://www.googleapis.com/books/v1/volumes?q=quilting", function (data) {
      var libros = data.items;

      for (var i = 0; i < libros.length; i++) {
        var libro = libros[i].volumeInfo;
        var titulo = libro.title;
        var portada = libro.imageLinks?.thumbnail;

        var carta = ` 
              <div class="carta">
                <img class="imagenCarta" src="${portada}"</img>
                <div class="informacion">
                  <h1 class="nombre">${titulo}</h1>
                  <p class="info">Disponible en La casa de los libros (en físico)</p>
                </div>
              </div>
            `;
        $(".contenido-grid").append(carta);
      }
    });
  });

  $(this).find('.botones').hide();

  $(document).ready(function () {
    $('.grid-item2').hover(
      function () {
        $(this).find('.datos').hide();
        $(this).find('.botones').show();
      },
      function () {
        $(this).find('.botones').hide();
        $(this).find('.datos').show();
      }
    );
  });
});
