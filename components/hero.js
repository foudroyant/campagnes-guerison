class CustomHero extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        .hero {
          background: linear-gradient(rgba(109, 40, 217, 0.6), rgba(109, 40, 217, 0.6)), url('https://via.placeholder.com/1200x630');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 4rem 0;
        }
        .overlay { background: rgba(0,0,0,0.35); padding: 4rem 0; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 1rem; color: white; text-align: center; }
        .title { font-size: 2.25rem; line-height: 1.1; margin-bottom: 1rem; font-weight: 700; }
        @media (min-width: 768px) { .title { font-size: 3.75rem; } }
        .subtitle { font-size: 1.125rem; margin-bottom: 1.5rem; max-width: 48rem; margin-left: auto; margin-right: auto; }
        .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
        .btn { background: white; color: #6d28d9; padding: 0.75rem 1.25rem; border-radius: 0.5rem; text-decoration: none; font-weight: 600; }
        .btn-outline { background: transparent; border: 2px solid rgba(255,255,255,0.9); color: white; }
        .animate-fade-in { animation: fadeIn 0.9s ease both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
      </style>
      <section class="hero" role="region" aria-label="Banner principal">
        <div class="overlay">
          <div class="container">
            <h1 class="title animate-fade-in">Campañas de Sanidad Divina</h1>
            <p class="subtitle animate-fade-in" style="animation-delay: 0.2s">
              El Profeta Kacou Philippe en América Latina — Noviembre 2025
            </p>
            <div class="actions animate-fade-in" style="animation-delay: 0.4s">
              <a class="btn" href="/contact.html">Inscribirse</a>
              <a class="btn btn-outline" href="https://wa.me/message/PE63FQO747POH1">Ver el programa</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('custom-hero', CustomHero);
