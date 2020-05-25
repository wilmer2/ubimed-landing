import $ from 'jquery'

const $telemedicenBtnToggle = $('#telemedice-buttonShowMore')
const $ubimedText = $('.ubimed-telemedicine__extraText')
const $icon = $('#ubimed-telemedicine__iconMore')

const toggleUbimedText = () => {
  if ($ubimedText.hasClass('d-block')) {
    $ubimedText.removeClass('d-block')

    $telemedicenBtnToggle.find('.ubimed-telemedicine__linkTitle').text('Ver más')
    $icon.removeClass('ubm-icon-expand_less-24px')
    $icon.addClass('ubm-icon-expand_more-24px')
  } else {
    $ubimedText.addClass('d-block')

    $telemedicenBtnToggle.find('.ubimed-telemedicine__linkTitle').text('Ocultar')
    $icon.addClass('ubm-icon-expand_less-24px')
    $icon.removeClass('ubm-icon-expand_more-24px')
  }
}

$telemedicenBtnToggle.on('click', toggleUbimedText)
