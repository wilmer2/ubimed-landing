$(function () {
  const $telemedicenBtnToggle = $('#telemedice-buttonShowMore');
  const $ubimedText = $('.ubimed-telemedicine__extraText');
  const mediaMobile = window.matchMedia('(max-width: 1023px)');

  const mediaQueryMobile = () => {
    if (mediaMobile.matches) {
      initMobile();
    } else {
      initDesktop();
    }
  }

  const toggleUbimedText = () => {
    if ($ubimedText.hasClass('d-block')) {
      $ubimedText.removeClass('d-block');

      $telemedicenBtnToggle.text('Ver más');
    } else {
      $ubimedText.addClass('d-block');
      
      $telemedicenBtnToggle.text('Ocultar');
    }
  }

  const initMobile = () => {
    if ($ubimedText.hasClass('d-block')) {
      $ubimedText.removeClass('d-block');
    }

    $telemedicenBtnToggle.text('Ver más'); 
    $telemedicenBtnToggle.off();
  };

  const initDesktop = () => {
    $telemedicenBtnToggle.on('click', toggleUbimedText);
  };
  
  mediaMobile.addListener(mediaQueryMobile);
  mediaQueryMobile();
});