
(function(){



  // -----------------------------------
  // Product Section
  // -----------------------------------

  var product = document.getElementById('product');

  var productLinks = document.querySelectorAll('.js-product-link');
  var productBlocks = document.querySelectorAll('.js-product-block');

  var productBtns = document.querySelectorAll('.js-product-button');
  var productImgs = document.querySelectorAll('.js-product-image');

  product.addEventListener('click', function(e) {
    e.preventDefault();

    // Main product links 
    if (e.target.tagName === 'A') {
      var index = Array.from(productLinks).indexOf(e.target);

      for (var i = 0; i < productLinks.length; i++) {
        productLinks[i].classList.remove('is-active');
        productBlocks[i].classList.remove('is-active');
      }
      e.target.classList.add('is-active');
      setTimeout( function(){ productBlocks[index].classList.add('is-active'); }, 300);
    }

    // Individual product features
    if (e.target.tagName === 'BUTTON') {
      var index = Array.from(productBtns).indexOf(e.target);
      var prod = e.target.getAttribute('data-prod');

      for (var i = 0; i < productBtns.length; i++) {
        if (prod === productBtns[i].getAttribute('data-prod')) {
          productBtns[i].classList.remove('is-active');  
          productImgs[i].classList.remove('is-active');
        }
      }

      e.target.classList.add('is-active');
      setTimeout( function(){ productImgs[index].classList.add('is-active'); }, 300);
    }
  });

  function removeActive(elements) {
    elements.forEach(function(el) { el.classList.remove('is-active'); });
  }

  function addActive(elements) {
    elements.forEach(function(el) { el.classList.add('is-active'); });
  }


  // -----------------------------------
  // Feature Section
  // -----------------------------------

  // var features = document.getElementById('features');
  // var featureBtns = document.querySelectorAll('.js-feature-button');
  // var featureImgs = document.querySelectorAll('.js-feature-image');
  // var featureTexts = document.querySelectorAll('.js-feature-content');

  // features.addEventListener('click', function(e) {
  //   if (e.target.tagName === 'BUTTON') {
  //     var index = Array.from(featureBtns).indexOf(e.target);

  //     for (var i = 0; i < featureBtns.length; i++) {
  //       featureBtns[i].classList.remove('is-active');
  //       featureImgs[i].classList.remove('is-active');
  //       featureTexts[i].classList.remove('is-active');
  //     }
  //     e.target.classList.add('is-active');
  //     setTimeout( function(){ 
  //       featureImgs[index].classList.add('is-active'); 
  //       featureTexts[index].classList.add('is-active');
  //     }, 300);
  //   }
  // });


  // -----------------------------------
  // Customer Section
  // -----------------------------------



  

  // -----------------------------------
  // Action Section
  // -----------------------------------

  var action = document.getElementById('action');
  var actionBtns = document.querySelectorAll('.js-action-button');
  var actionVids = document.querySelectorAll('.js-action-video');
  var actionTexts = document.querySelectorAll('.js-action-content');

  action.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
      var index = Array.from(actionBtns).indexOf(e.target);

      for (var i = 0; i < actionBtns.length; i++) {
        actionBtns[i].classList.remove('is-active');
        actionVids[i].classList.remove('is-active');
        actionTexts[i].classList.remove('is-active');
      }
      e.target.classList.add('is-active');
      setTimeout( function(){ 
        actionVids[index].classList.add('is-active'); 
        actionTexts[index].classList.add('is-active');
      }, 300);
    }
  });


  // Helpers ------------------------------------

  function removeActive(elements) {
    elements.forEach(function(el) { el.classList.remove('is-active'); });
  }

  function addActive(elements) {
    elements.forEach(function(el) { el.classList.add('is-active'); });
  }


})();