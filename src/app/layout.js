import { playfair, inter } from "@/styles/fonts";
import GlobalStyles from "@/components/GlobalStyles";

export const metadata = {
  title: "MAYAR — Quiet Luxury Dresses",
  description:
    "Mayar Store — considered dresses crafted in limited quantities each season.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <GlobalStyles />
        {children}
      </body>
    </html>
  );
}
