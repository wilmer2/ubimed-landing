import $ from 'jquery'

const $btnToggleShowMore = $('#ubimed-monitor__buttonShowMore')
const $icon = $('#ubimed-monitor__iconShowMore')
const $ubimedText = $('.ubimed-monitor__extraText')

const toggleUbimedMonitorText = () => {
  if ($ubimedText.hasClass('d-block')) {
    $ubimedText.removeClass('d-block')

    $btnToggleShowMore.find('.ubimed-monitor__linkTitle').text('Ver más')
    $icon.removeClass('ubm-icon-expand_less-24px')
    $icon.addClass('ubm-icon-expand_more-24px')
  } else {
    $ubimedText.addClass('d-block')

    $btnToggleShowMore.find('.ubimed-monitor__linkTitle').text('Ocultar')
    $icon.addClass('ubm-icon-expand_less-24px')
    $icon.removeClass('ubm-icon-expand_more-24px')
  }
}

$btnToggleShowMore.on('click', toggleUbimedMonitorText)
