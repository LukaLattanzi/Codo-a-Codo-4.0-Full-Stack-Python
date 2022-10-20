/* header section */

const toggle = document.querySelector(".toggle");
const links = document.querySelector(".links");
const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");
const span3 = document.querySelector(".span3");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("rotate");
  links.classList.toggle("active");
  span1.classList.toggle("rotate-1");
  span2.classList.toggle("rotate-2");
  span3.classList.toggle("rotate-3");
});

/* header section */

/* home section */

function imgClick(anything) {
  document.getElementById("img-click").src = anything;
}

/* home section */

/* news section */

function imgHover(anything) {
  document.getElementById("imghover").src = anything;
}

/* news section */

/* video section */

function videoUrl(anything) {
  document.getElementById("iframe").src = anything;
}

/* video section */

/* product section */

const open1 = document.getElementById("open1");
const open2 = document.getElementById("open2");
const open3 = document.getElementById("open3");
const open4 = document.getElementById("open4");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open1.addEventListener("click", () => {
  modal_container.classList.add("show");
});

open2.addEventListener("click", () => {
  modal_container.classList.add("show");
});

open3.addEventListener("click", () => {
  modal_container.classList.add("show");
});

open4.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});


function iphone(id, modelo) {
  const h4 = document.getElementById("modal-h4");
  h4.innerHTML = modelo;

  const options = {
    method: "GET",
    headers: {
      "X-BLOBR-KEY": "bipHzBcWAKqO632qiBTazppmOjPOq6FE",
    },
  };

  const url = "https://apis.dashboard.techspecs.io/f9g3z21kiqc0hz9s/en/v3/product/detail?productId=" + id;

  fetch(url, options)
    .then((res) => res.json())
    .then((response) => {

      const tdDimensiones = document.getElementById("dimensiones");
      tdDimensiones.innerHTML = response.data.product[0].Design.Height + " x " + response.data.product[0].Design.Width;

      const tdPantalla = document.getElementById("pantalla");
      tdPantalla.innerHTML = response.data.product[0].Display.Diagonal + ", " + response.data.product[0].Display["Resolution (H x W)"] + ", " + response.data.product[0].Display["Refresh Rate"];

      const tdChip = document.getElementById("chip");
      tdChip.innerHTML = response.data.product[0].Inside.Processor.CPU + ", " + response.data.product[0].Inside.Processor["CPU Clock Speed"];

      const tdCamara = document.getElementById("camara");
      tdCamara.innerHTML = response.data.product[0].Camera["Front Camera"].Resolution + ", " + response.data.product[0].Camera["Front Camera"]["Resolution (H x W)"];

      const tdBateria = document.getElementById("bateria");
      tdBateria.innerHTML = response.data.product[0].Inside.Battery.Capacity;

      const tdOs = document.getElementById("os");
      tdOs.innerHTML = response.data.product[0].Inside.Software["OS Version"];

    })
    .catch((err) => console.error(err));
}

/* product section */

/* contact section */

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const textarea = document.getElementById("textarea");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  parrafo.innerHTML = "";
  if (nombre.value.length <= 2) {
    warnings += `El nombre no es valido | Minimo 2 caracteres <br>`;
    entrar = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += `El email no es valido | Formato no reconocido <br>`;
    entrar = true;
  }
  if (textarea.value.length <= 30) {
    warnings += `El mensaje no es valido | Minimo 30 caracteres <br>`;
    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
});

/* contact section */
