window.addEventListener('scroll', function(){
   const header = this.document.querySelector('header');
   header.classList.toggle("sticky", this.window.scrollY > 0);
});

function menuToggle() {
   const icon = document.querySelector('.fas');
   const navigation = document.querySelector('.navigation');
   fas.classList.toggle('active');
   navigation.classList.toggle('active');
}