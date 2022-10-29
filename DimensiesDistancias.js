const section = document.querySelector('.animins');

section.clientHeight; //height + padding
section.offsetHeight; //height + padding + border
section.scrollHeight; //height total, mesmo dentro de scroll


getBoundingClientRect();
/* Método que retorna um objeto com valores de width, height, distancias do elemento e mais */

const section2 = document.querySelector('.classe');
const rect = section.getBoundingClientRect();
