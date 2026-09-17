"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import theme from "@/styles/theme";

const centerLinks = [
  { label: "NEW ARRIVALS", href: "/shop?filter=new" },
  { label: "COLLECTIONS", href: "/shop" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

const rightLinks = [
  { label: "WISHLIST", href: "/wishlist" },
  { label: "ACCOUNT", href: "/account" },
  { label: "BAG", href: "/cart" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const textColor = scrolled ? theme.colors.black : theme.colors.white;

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: theme.zIndex.navbar,
          backgroundColor: scrolled ? theme.colors.white : "transparent",
          borderBottom: scrolled
            ? `1px solid ${theme.colors.borderGrey}`
            : "1px solid transparent",
          transition: `background-color ${theme.transitions.base}, border-color ${theme.transitions.base}`,
        }}
      >
        <div
          style={{
            maxWidth: theme.container.maxWidth,
            margin: "0 auto",
            padding: `0 ${theme.container.padding}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "84px",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: theme.fonts.serif,
              fontSize: "22px",
              letterSpacing: theme.letterSpacing.wide,
              textTransform: "uppercase",
              color: textColor,
              transition: `color ${theme.transitions.base}`,
            }}
          >
            MAYAR
          </Link>

          <nav
            className="nav-desktop-links"
            style={{ gap: "36px", alignItems: "center" }}
          >
            {centerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link"
                style={{
                  fontFamily: theme.fonts.sans,
                  fontSize: theme.fontSizes.nav,
                  letterSpacing: theme.letterSpacing.wide,
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: textColor,
                  transition: `color ${theme.transitions.base}`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div
            className="nav-desktop-links"
            style={{ gap: "28px", alignItems: "center" }}
          >
            {rightLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link"
                style={{
                  fontFamily: theme.fonts.sans,
                  fontSize: theme.fontSizes.nav,
                  letterSpacing: theme.letterSpacing.wide,
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: textColor,
                  transition: `color ${theme.transitions.base}`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="nav-hamburger"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            style={{
              flexDirection: "column",
              gap: "5px",
              background: "none",
              border: "none",
              padding: "8px",
            }}
          >
            <span
              style={{
                width: "22px",
                height: "1px",
                backgroundColor: textColor,
                transition: `background-color ${theme.transitions.base}`,
              }}
            />
            <span
              style={{
                width: "22px",
                height: "1px",
                backgroundColor: textColor,
                transition: `background-color ${theme.transitions.base}`,
              }}
            />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: theme.zIndex.mobileMenu,
            backgroundColor: theme.colors.white,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: `0 ${theme.container.padding}`,
              height: "84px",
            }}
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: theme.fonts.serif,
                fontSize: "22px",
                letterSpacing: theme.letterSpacing.wide,
                textTransform: "uppercase",
                color: theme.colors.black,
              }}
            >
              MAYAR
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: "28px",
                lineHeight: 1,
                color: theme.colors.black,
                padding: "8px",
              }}
            >
              &times;
            </button>
          </div>

          <nav
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "28px",
              padding: `0 ${theme.container.padding}`,
            }}
          >
            {[...centerLinks, ...rightLinks].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: theme.fonts.serif,
                  fontSize: "32px",
                  color: theme.colors.black,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
