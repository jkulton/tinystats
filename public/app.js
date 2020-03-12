document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const paramsArray = Array.from(params.entries());

  if (!paramsArray.length) { return; }

  const statTemplate = (key, value) => `<section><section><h1>${value}</h1><h2>${key}</h2></section></section>`;
  const content = paramsArray.map((params) => statTemplate(params[0], params[1]));

  document.body.innerHTML = content.join('');
});