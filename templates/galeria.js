// Only public markup is read here; internal product records never reach the browser.
document.querySelectorAll('[data-open-product]').forEach(button => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(button.dataset.openProduct);
    dialog.querySelector('[data-photo-index="0"]').click();
    dialog.showModal();
  });
});

document.querySelectorAll('[data-product-dialog]').forEach(dialog => {
  const buttons = [...dialog.querySelectorAll('[data-photo-index]')];
  const image = dialog.querySelector('[data-gallery-image]');
  const status = dialog.querySelector('[data-gallery-status]');
  let selected = 0;
  function select(index) {
    selected = index;
    const button = buttons[index];
    image.src = button.dataset.src;
    image.alt = button.dataset.alt;
    buttons.forEach((item, i) => item.setAttribute('aria-pressed', String(i === index)));
    status.textContent = `Foto ${index + 1} de ${buttons.length}`;
  }
  buttons.forEach((button, index) => button.addEventListener('click', () => select(index)));
  dialog.querySelector('[data-close-product]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      select((selected + (event.key === 'ArrowRight' ? 1 : buttons.length - 1)) % buttons.length);
    }
  });
});
