let burgerButton = document.querySelector('.burger-button');
let navbarResponsive = document.getElementById('navBarJs');

burgerButton.addEventListener("click", function(){
    
    navbarResponsive.classList.toggle('display-none');
}); 