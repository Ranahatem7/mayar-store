export default function GlobalStyles() {
  return (
    <style>{`
      *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html {
        scroll-behavior: smooth;
      }

      html, body {
        max-width: 100vw;
        overflow-x: hidden;
      }

      body {
        background: #FFFFFF;
        color: #111111;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      button {
        font: inherit;
        cursor: pointer;
      }

      img {
        display: block;
        max-width: 100%;
      }

      *:focus-visible {
        outline: 2px solid #111111;
        outline-offset: 2px;
      }

      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }

      /* Navbar */
      .nav-desktop-links {
        display: flex;
      }
      .nav-hamburger {
        display: none;
      }
      @media (max-width: 860px) {
        .nav-desktop-links {
          display: none;
        }
        .nav-hamburger {
          display: flex;
        }
      }

      .nav-link {
        position: relative;
        transition: opacity 0.3s ease;
      }
      .nav-link:hover {
        opacity: 0.6;
      }

      /* Buttons */
      .btn-light:hover {
        background-color: #E5E5E5 !important;
      }
      .btn-outline-light:hover {
        background-color: #FFFFFF !important;
        color: #111111 !important;
      }
      .btn-dark:hover {
        background-color: #4A4A4A !important;
      }

      /* Product card */
      .product-card-image-wrap {
        overflow: hidden;
      }
      .product-card-image {
        transition: transform 0.6s ease;
      }
      .product-card:hover .product-card-image {
        transform: scale(1.06);
      }
      .wishlist-btn {
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .product-card:hover .wishlist-btn,
      .wishlist-btn.is-active {
        opacity: 1;
      }
      @media (hover: none) {
        .wishlist-btn {
          opacity: 1;
        }
      }

      /* Category card */
      .category-card-image {
        transition: transform 0.6s ease;
      }
      .category-card:hover .category-card-image {
        transform: scale(1.06);
      }

      /* Editorial split */
      .editorial-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 860px) {
        .editorial-grid {
          grid-template-columns: 1fr;
        }
      }

      /* Footer link hover */
      .footer-link {
        transition: opacity 0.3s ease;
      }
      .footer-link:hover {
        opacity: 0.6;
      }

      .newsletter-input {
        outline: none;
      }
      .newsletter-input::placeholder {
        color: #8A8A8A;
      }
    `}</style>
  );
}
