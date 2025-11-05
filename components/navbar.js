class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .navbar {
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          background-color: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .nav-link:hover {
          color: #8b5cf6;
        }
        .mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }
        .mobile-menu.open {
          max-height: 500px;
        }
      </style>
      <nav class="navbar fixed w-full z-50 bg-gradient-to-r from-purple-700 to-purple-900 text-white">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center py-4">
            <a href="#" class="flex items-center space-x-2">
              <i data-feather="crosshair" class="w-6 h-6"></i>
              <span class="text-xl font-bold">Guérison Divine</span>
            </a>
            
            <div class="hidden md:flex items-center space-x-8">
              <a href="#" class="nav-link hover:text-purple-300 font-medium transition-colors">Accueil</a>
              <a href="#about" class="nav-link hover:text-purple-300 font-medium transition-colors">Le Prophète</a>
              <a href="#campaign" class="nav-link hover:text-purple-300 font-medium transition-colors">Témoignages</a>
              <a href="#contact" class="nav-link hover:text-purple-300 font-medium transition-colors">Contact</a>
              <a href="https://wa.me/message/PE63FQO747POH1" class="bg-white text-purple-700 px-6 py-2 rounded-full font-bold hover:bg-purple-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                <i data-feather="send" class="inline mr-2 w-4 h-4"></i> Participer
              </a>
            </div>
<button id="mobile-menu-button" class="md:hidden focus:outline-none">
              <i data-feather="menu" class="w-6 h-6"></i>
            </button>
          </div>
          
          <div id="mobile-menu" class="mobile-menu md:hidden">
            <div class="px-2 pt-2 pb-4 space-y-2">
              <a href="#" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700">Accueil</a>
              <a href="#about" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700">Le Prophète</a>
              <a href="#campaign" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700">Vidéos</a>
              <a href="#contact" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700">Contact</a>
<a href="https://wa.me/message/PE63FQO747POH1" class="block w-full text-center bg-white text-purple-600 px-4 py-2 rounded-lg font-medium mt-2">
                Participer
              </a>
            </div>
          </div>
        </div>
      </nav>
    `;

    // Mobile menu toggle
    const menuButton = this.shadowRoot.getElementById('mobile-menu-button');
    const mobileMenu = this.shadowRoot.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const icon = menuButton.querySelector('i');
      if (mobileMenu.classList.contains('open')) {
        feather.replace();
        icon.setAttribute('data-feather', 'x');
      } else {
        feather.replace();
        icon.setAttribute('data-feather', 'menu');
      }
      feather.replace();
    });

    // Navbar scroll effect
    const navbar = this.shadowRoot.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}
customElements.define('custom-navbar', CustomNavbar);