// script.js
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
window.addEventListener('scroll', function() {
   if (window.scrollY > 50) {
     document.body.style.backgroundColor = '#333'; // Change this to your desired scroll color
      } else {
         document.body.style.backgroundColor = 'white'; // Change this to the original background color
        } 
      });