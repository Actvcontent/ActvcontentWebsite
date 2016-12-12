(function(){


  window.modal = new VanillaModal({
    onBeforeOpen: function(e) {
      // if demo button clicked remove modal video styling
      if (e) {
        modal.$.modalInner.classList.remove('modal-video');
      }
    }
  });


  // -----------------------------------
  // Navigation
  // -----------------------------------

  var productLink = document.querySelector('.js-nav-product-link');
  productLink.addEventListener('click', function(e) {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      window.location = "/" + '#product';
    } else {
      Jump('#product', {duration: 500});  
    }
  });

  var testimonialsLink = document.querySelector('.js-testimonials-link');
  testimonialsLink.addEventListener('click', function(e) {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      window.location = "/" + '#testimonials';
    } else {
      Jump('#testimonials', {duration: 1200});
    }
  });


  // Mailchimp required code
  (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='NAME';ftypes[1]='text';fnames[2]='COMPANY';ftypes[2]='text';fnames[3]='PHONE';ftypes[3]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);

})();