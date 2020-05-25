import $ from 'jquery'

const $interactiveBtn = $('#ubimed-benefit__interactiveBtn')
const $noInteractiveBtn = $('#ubimed-benefit__noInteractiveBtn')
const $interactiveList = $('#ubimed-benefit__interactiveList')
const $noInteractiveList = $('#ubimed-benefit__noInteractiveList')

$interactiveBtn.on('click', () => {
  if (!$interactiveBtn.hasClass('ubimed-benefit__tabTitle--active')) {
    $interactiveList.removeClass('d-none')
    $noInteractiveList.addClass('d-none')
    $interactiveBtn.addClass('ubimed-benefit__tabTitle--active')
    $noInteractiveBtn.removeClass('ubimed-benefit__tabTitle--active')
  }
})

$noInteractiveBtn.on('click', () => {
  if (!$noInteractiveBtn.hasClass('ubimed-benefit__tabTitle--active')) {
    $interactiveList.addClass('d-none')
    $noInteractiveList.removeClass('d-none')
    $interactiveBtn.removeClass('ubimed-benefit__tabTitle--active')
    $noInteractiveBtn.addClass('ubimed-benefit__tabTitle--active')
  }
})
