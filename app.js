const sliders = document.querySelectorAll('.slider');
const inputs = document.querySelectorAll('.input');
const colorDisplay = document.querySelector('#color-display');

/* Habilita os inputs quando algum slider for acionado pela primeira vez */
enableInputs = () => {
  inputs.forEach((input) => (input.disabled = false));
};

/* Renderiza a troca de cor no DOM */
renderColor = () => {
  colorDisplay.style.backgroundColor = `rgb(${sliders[0].value}, ${sliders[1].value}, ${sliders[2].value})`;
};

/* Carrega o DOM (boa prática opcional) */
window.addEventListener('load', () => {
  renderColor();

  /* Escuta quando um 'slider' é alterado e sincroniza os seu valor com o seu respectivo 'input' */
  sliders.forEach((slider, i) => {
    slider.addEventListener('change', () => {
      inputs[i].value = slider.value;
      enableInputs();
      renderColor();
    });
  });

  /* Escuta quando um 'input' é alterado e sincroniza o seu valor com o seu respectivo 'slider' */
  inputs.forEach((input, i) => {
    input.addEventListener('change', () => {
      sliders[i].value = input.value;
      renderColor();
    });
  });
});
