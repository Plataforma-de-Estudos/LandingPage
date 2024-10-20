/* Drak mode */
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const logoIcon = document.querySelector('.navbar-brand img'); // Ajustado para selecionar a imagem da logo

  const darkThemeClass = 'dark-theme';
  const darkIconSrc = 'assets/img/Imgs_Navbar/Sol.svg';
  const lightIconSrc = 'assets/img/Imgs_Navbar/Lua.svg'; // Corrigido para corresponder ao que está no HTML
  const paulaoEscuroSrc = 'assets/img/Imgs_Navbar/logoPauloDark.svg'; // Adicione a extensão do arquivo se for SVG
  const paulaoClaroSrc = 'assets/img/Imgs_Navbar/logoPaulo.svg';

  // Verifique se os elementos existem
  if (!themeToggle || !themeIcon || !logoIcon) {
    console.error('Elementos necessários não encontrados.');
    return;
  }

  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle(darkThemeClass);
    if (document.body.classList.contains(darkThemeClass)) {
      themeIcon.src = darkIconSrc;
      logoIcon.src = paulaoEscuroSrc;
    } else {
      themeIcon.src = lightIconSrc;
      logoIcon.src = paulaoClaroSrc;
    }

    // Alternar a classe dark-theme para os elementos especificados
    document.querySelectorAll(
      'header nav, .info p, .logo img, a, .info h1, .info h2, .h3, .fazerLogin, .registrar button, .bolaBotao, .bolinhaDireita, .bolinhaEsquerda, .bolaoDireita, .bolaoEsquerda, .bolinhaMeio, .nav-link, .offcanvas-body, .navbar-wrapper, .navbar-toggler'
    ).forEach(element => {
      element.classList.toggle(darkThemeClass);
    });
  });
});

setInterval(() => {
  console.log(document.documentElement.scrollTop);
}, 1000);


document.querySelector('.navbar-toggler').addEventListener('click', () => {
  document.querySelector('.navbar-toggler').classList.toggle('active');
})


/* Section SERVICE */



/* Section PLAN */
function reloadPlans(width_screen){
  const plans = document.querySelector('.plan');

  if(width_screen < 1000) {
    plans.innerHTML = `
      <h1>Planos</h1>
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container-plans">
              <div class="card-plan">
                <p>FREE!</p>
                <p>R$0</p>
                <p>Start for free</p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="container-plans">
              <div class="card-plan">
                <p>STANDARD</p>
                <p>R$2,00</p>
                <p>Start for standard</p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="container-plans">
              <div class="card-plan">
                <p>PREMIUM</p>
                <p>R$4,00</p>
                <p>Start for premium</p>
              </div>
            </div>
          </div>
        </div>
        
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `;

  } else {
    plans.innerHTML = `
      <h1>Planos</h1>
      <div class="container-plans">
        <div class="card-plan">
          <p>FREE!</p>
          <p>R$0</p>
          <p>Start for free</p>
        </div>

        <div class="card-plan">
          <p>STANDARD</p>
          <p>R$2,00</p>
          <p>Start for standard</p>
        </div>

        <div class="card-plan">
          <p>PREMIUM</p>
          <p>R$4,00</p>
          <p>Start for premium</p>
        </div>
      </div>
    `;
  }
}
reloadPlans(window.innerWidth, window.innerHeight);

window.addEventListener('resize', () => {
  reloadPlans(window.innerWidth);
  console.log(window.innerWidth, ' x ', window.innerHeight);
});
