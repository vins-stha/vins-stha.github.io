
const hmb = document.querySelector("#hamburger");
const overlay = document.querySelector('.overlay');
hmb.addEventListener('click', function(){
   if (this.classList.contains('open') )
   {
      this.classList.remove('open');
     overlay.style.visibility = "hidden";
   }
   else
   {
     this.classList.add('open');
     overlay.style.visibility = "visible";

   }

  console.log(overlay);
});