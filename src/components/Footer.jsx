import Link from "next/link";
import theme from "@/styles/theme";
import Button from "@/components/Button";

const shopLinks = [
  { label: "New Arrivals", href: "/shop?filter=new" },
  { label: "Evening", href: "/shop?category=evening" },
  { label: "Midi", href: "/shop?category=midi" },
  { label: "Casual", href: "/shop?category=casual" },
  { label: "All Dresses", href: "/shop" },
];

const helpLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Shipping & Returns", href: "/shipping-returns" },
  { label: "FAQ", href: "/faq" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Press", href: "/press" },
  { label: "Account", href: "/account" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "Tiktok", href: "https://tiktok.com" },
];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3
        style={{
          fontFamily: theme.fonts.sans,
          fontSize: theme.fontSizes.label,
          letterSpacing: theme.letterSpacing.wide,
          textTransform: "uppercase",
          color: theme.colors.midGrey,
          marginBottom: theme.spacing.lg,
        }}
      >
        {title}
      </h3>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="footer-link"
              style={{
                fontFamily: theme.fonts.sans,
                fontSize: theme.fontSizes.body,
                color: theme.colors.white,
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <div
        style={{
          backgroundColor: theme.colors.softGrey,
          padding: `${theme.spacing.huge} ${theme.container.padding}`,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: theme.fonts.sans,
            fontSize: theme.fontSizes.label,
            letterSpacing: theme.letterSpacing.wide,
            textTransform: "uppercase",
            color: theme.colors.midGrey,
            marginBottom: theme.spacing.md,
          }}
        >
          Stay In The Know
        </p>
        <h2
          style={{
            fontFamily: theme.fonts.serif,
            fontSize: theme.fontSizes.h2,
            color: theme.colors.black,
            marginBottom: theme.spacing.md,
          }}
        >
          The Mayar Letter
        </h2>
        <p
          style={{
            fontFamily: theme.fonts.sans,
            fontSize: theme.fontSizes.body,
            color: theme.colors.darkGrey,
            maxWidth: "480px",
            margin: `0 auto ${theme.spacing.xl}`,
            lineHeight: 1.6,
          }}
        >
          Early access to new arrivals, private sale events, and editorial
          stories — delivered quietly.
        </p>

        <form
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: theme.spacing.md,
            maxWidth: "460px",
            margin: "0 auto",
          }}
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="newsletter-input"
            style={{
              flex: "1 1 240px",
              backgroundColor: theme.colors.white,
              border: `1px solid ${theme.colors.borderGrey}`,
              padding: "16px 20px",
              fontFamily: theme.fonts.sans,
              fontSize: theme.fontSizes.body,
              color: theme.colors.black,
            }}
          />
          <Button type="submit" variant="dark">
            Subscribe
          </Button>
        </form>
      </div>

      <div
        style={{
          backgroundColor: theme.colors.black,
          color: theme.colors.white,
          padding: `${theme.spacing.xxxl} ${theme.container.padding}`,
        }}
      >
        <div
          style={{
            maxWidth: theme.container.maxWidth,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: theme.spacing.xl,
            paddingBottom: theme.spacing.xxxl,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: theme.fonts.serif,
                fontSize: "22px",
                letterSpacing: theme.letterSpacing.wide,
                textTransform: "uppercase",
                display: "block",
                marginBottom: theme.spacing.md,
              }}
            >
              Mayar
            </span>
            <p
              style={{
                fontFamily: theme.fonts.sans,
                fontSize: theme.fontSizes.body,
                color: theme.colors.midGrey,
                lineHeight: 1.6,
                maxWidth: "260px",
              }}
            >
              Quiet luxury for the considered woman. Crafted in limited
              quantities, each season.
            </p>
          </div>

          <FooterColumn title="Shop" links={shopLinks} />
          <FooterColumn title="Help" links={helpLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        <div
          style={{
            maxWidth: theme.container.maxWidth,
            margin: "0 auto",
            borderTop: `1px solid ${theme.colors.darkGrey}`,
            paddingTop: theme.spacing.xl,
            display: "flex",
            flexWrap: "wrap",
            gap: theme.spacing.md,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: theme.fonts.sans,
              fontSize: "13px",
              color: theme.colors.midGrey,
            }}
          >
            © 2026 Mayar Store. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: theme.spacing.lg }}>
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="footer-link"
                style={{
                  fontFamily: theme.fonts.sans,
                  fontSize: theme.fontSizes.label,
                  letterSpacing: theme.letterSpacing.wide,
                  textTransform: "uppercase",
                  color: theme.colors.midGrey,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
