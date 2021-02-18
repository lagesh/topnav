let burgerMenu = document.querySelector('.mobile');

let myFunction = () => {
  burgerMenu.classList.toggle('nav-dropdown')
}

burgerMenu.onclick = myFunction;