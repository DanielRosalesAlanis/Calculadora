document.getElementById("calcForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const operacion = document.getElementById("operacion").value;

    const url = `/calculadora?a=${a}&b=${b}&operacion=${operacion}`;

    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById("respuesta").innerHTML =
                "Resultado cargado desde el servidor (abre en página nueva).<br><br>" +
                `<a href="${url}" target="_blank">Ver resultado</a>`;
        });
});
