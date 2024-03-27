import "../css/components.css";
// import webpackLogo from "../assets/img/webpack-logo.png";

export const saludar = (nombre = "Sin nombre") => {
  console.log("Creando etiqueta h1, en el HTML");
  const h1 = document.createElement("h1");
  h1.innerText = `Hola, ${nombre}!!!`;
  document.body.append(h1);

  // Img
  // const img = document.createElement("img");
  // img.src = webpackLogo;
  // document.body.append(img);
};
