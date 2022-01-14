//Mudança do conteúdo do elemento h1

/*upperLevelTitle.textContent = 'Hello, World!';*/

//Exemplo de uso de variáveis e condicionais

/*let iceCream = "chocolate";

if(iceCream === "chocolate") {
  alert(iceCream);
} else {
  iceCream = "Not is chocolate";
  alert(iceCream);
}*/

/*function multiply(num1, num2) {
  return num1 * num2;
}

alert(multiply(10, 20));*/

/*const root = document.querySelector("html");
root.onclick = function() {
  alert('Isso dói, para de me clicar!');
}*/

const programmingImage = document.querySelector("img");
programmingImage.onclick = function() {
  const programmingImageSrc = programmingImage.getAttribute("src");
  if(programmingImageSrc === "images/programming-code.jpg") {
    programmingImage.setAttribute("src", "images/programming-languages-names.jpg");
  } else {
    programmingImage.setAttribute("src", "images/programming-code.jpg");
  }
}

const upperLevelTitle = document.querySelector('h1');
const changeUserBtn = document.querySelector("button");

function setUserName() {
  const firstName = prompt("Insira seu nome");

  if(!firstName) {
    setUserName();
  } else {
    localStorage.setItem('firstName', firstName);
  }

  if(!localStorage.getItem('firstName')) {
    setUserName();
  } else {
    upperLevelTitle.textContent = "Hello, " + localStorage.getItem('firstName');
  }
}

setUserName();

changeUserBtn.onclick = function() {
  setUserName();
}
