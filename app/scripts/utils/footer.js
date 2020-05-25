import $ from 'jquery'

const $btnToggleService = $('.ubimed-footer__entryItem')

$btnToggleService.on('click', function () {
  const $menu = $(this).find('.ubimed-footer__menu')
  const $icon = $(this).find('.ubimed-footer__linkIcon')

  if ($menu.hasClass('d-none')) {
    $menu.removeClass('d-none')
    $icon.addClass('ubm-icon-expand_less-24px')
    $icon.removeClass('ubm-icon-expand_more-24px')
  } else {
    $menu.addClass('d-none')
    $icon.removeClass('ubm-icon-expand_less-24px')
    $icon.addClass('ubm-icon-expand_more-24px')
  }
})
