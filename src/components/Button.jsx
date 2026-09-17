import Link from "next/link";
import theme from "@/styles/theme";

const variantStyles = {
  light: {
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
    border: `1px solid ${theme.colors.white}`,
    className: "btn-light",
  },
  "outline-light": {
    backgroundColor: "transparent",
    color: theme.colors.white,
    border: `1px solid ${theme.colors.white}`,
    className: "btn-outline-light",
  },
  dark: {
    backgroundColor: theme.colors.black,
    color: theme.colors.white,
    border: `1px solid ${theme.colors.black}`,
    className: "btn-dark",
  },
};

export default function Button({
  href,
  children,
  variant = "dark",
  type = "button",
  onClick,
  style,
}) {
  const variantStyle = variantStyles[variant] || variantStyles.dark;

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 32px",
    fontFamily: theme.fonts.sans,
    fontSize: theme.fontSizes.nav,
    letterSpacing: theme.letterSpacing.wide,
    textTransform: "uppercase",
    fontWeight: 500,
    backgroundColor: variantStyle.backgroundColor,
    color: variantStyle.color,
    border: variantStyle.border,
    transition: `background-color ${theme.transitions.base}, color ${theme.transitions.base}`,
    whiteSpace: "nowrap",
    ...style,
  };

  if (href) {
    return (
      <Link href={href} className={variantStyle.className} style={baseStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={variantStyle.className}
      style={baseStyle}
    >
      {children}
    </button>
  );
}
