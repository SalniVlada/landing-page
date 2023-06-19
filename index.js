$('a[href^=\\#]').on('click', function(event){     
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
});

const buttonTop = document.querySelector('.btn');

const displayButton = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      buttonTop.classList.add("btn_visible");
    } else {
      buttonTop.classList.remove("btn_visible");
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
};

displayButton();
scrollToTop();