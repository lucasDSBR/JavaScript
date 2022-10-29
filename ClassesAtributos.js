const menu = document.querySelector('.menu');


//Mostra todas as classes do elemento
console.log(menu.classList());

//Adicionando uma nova classe:
menu.classList.add('testeClasse');


//Removendo classe:
menu.classList.remove('testeClasse');
menu.classList.toggle('testeClasse');
menu.classList.toggle('testeClasse');

//Verificar se há a classe(true or false):
menu.classList.contains('testeClasse');

const img = document.querySelector('.img');

console.log(img.attributes);

img.getAttribute('src');
img.setAttribute('alt', 'É uma raposa');
img.hasAttribute('alt');
