let popover = document.querySelector('.popover');
let popoverToggle = document.querySelector('.popover__toogle');
let formUserButton = document.querySelector('.form-user__button--open-popover');

formUserButton.addEventListener('click', function () {
  if (popover.classList.contains('popover--closed')) {
    popover.classList.remove('popover--closed');
    popover.classList.add('popover--opened');
  }
});

popoverToggle.addEventListener('click', function () {
  if (popover.classList.contains('popover--opened')) {
    popover.classList.remove('popover--opened');
    popover.classList.add('popover--closed');
  }
});
