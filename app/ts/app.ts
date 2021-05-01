const controller = new NegociacaoController();

document
  .querySelector('.form')
  .addEventListener('submit', controller.adiciona.bind(controller)); // Bind permite o uso do this do controller