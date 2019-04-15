(function() {
  const d = document;

  let cromo1 = d.getElementById('cromo1');
  let cromoText1 = `• <script src="/js/script1.js"></script>`;
  cromo1.textContent = cromoText1;

  let cromo2 = d.getElementById('cromo2');
  let cromoText2 = 
  `• alert("There will be an error")
    [1, 2].forEach(alert)
• function obtenerValor() {
    return algunvalor
            .value
  }`;
  cromo2.textContent = cromoText2;

  let cromo5 = d.getElementById('cromo5');
  let cromoText5 = 
  `• (function() {
    'use strict';
    // ...your code...
  })();`;
  cromo5.textContent = cromoText5;
  // let cromo1 = d.getElementById('cromo1');
  // let cromoText1 = `  <script src="/js/script1.js"></script>
  // <script src="/js/script2.js"></script>`;
  // cromo1.textContent = cromoText1;
  // let cromo1 = d.getElementById('cromo1');
  // let cromoText1 = `  <script src="/js/script1.js"></script>
  // <script src="/js/script2.js"></script>`;
  // cromo1.textContent = cromoText1;


})();