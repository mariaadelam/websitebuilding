document.addEventListener("DOMContentLoaded", function(){
  // cand se incarca pagina se executa functia
  window.addEventListener('scroll', function(){
    if(this.window.scrollY > 250){
      this.document.getElementById('navbar_top').classList.add('fixed-top');
      //add padding top to show content behind havbar
      navbar_height = this.document.querySelector('.navbar').offsetHeight;
      this.document.body.style.paddingTop = navbar_height + 'px';
    }else{
      this.document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      this.document.body.style.paddingTop = '0';
    }
  });
});