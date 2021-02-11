function myFunction() {
  let burger = document.querySelector(".mobile");
  let dropDown = document.querySelector('.nav-dropdown');
  burger.addEventListener('click', function () {
    dropDown.style.display = 'block';
  })
}
myFunction();