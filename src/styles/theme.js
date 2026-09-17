import { playfair, inter } from "./fonts";

const theme = {
  colors: {
    black: "#111111",
    white: "#FFFFFF",
    darkGrey: "#4A4A4A",
    midGrey: "#8A8A8A",
    borderGrey: "#E5E5E5",
    softGrey: "#F5F5F5",
    overlay: "rgba(17, 17, 17, 0.35)",
    overlayStrong: "rgba(17, 17, 17, 0.6)",
    overlayFooter: "rgba(17, 17, 17, 0.92)",
  },
  fonts: {
    serif: playfair.style.fontFamily,
    sans: inter.style.fontFamily,
  },
  fontSizes: {
    label: "11px",
    nav: "12px",
    body: "15px",
    bodyLarge: "17px",
    h1: "clamp(40px, 6vw, 76px)",
    h2: "clamp(28px, 4vw, 44px)",
    h3: "clamp(20px, 2.5vw, 26px)",
    productName: "17px",
    price: "16px",
  },
  letterSpacing: {
    wide: "0.15em",
    normal: "normal",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
    xxxl: "64px",
    huge: "96px",
  },
  container: {
    maxWidth: "1200px",
    padding: "24px",
  },
  transitions: {
    base: "0.3s ease",
    slow: "0.6s ease",
  },
  zIndex: {
    navbar: 100,
    overlay: 10,
    mobileMenu: 200,
  },
};

export default theme;
