import Image from "next/image";
import theme from "@/styles/theme";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "560px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?auto=format&fit=crop&w=2000&q=80"
        alt="Model in a flowing evening gown"
        fill
        preload
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: theme.colors.overlay,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          maxWidth: theme.container.maxWidth,
          margin: "0 auto",
          padding: `0 ${theme.container.padding}`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: theme.spacing.huge,
        }}
      >
        <p
          style={{
            fontFamily: theme.fonts.sans,
            fontSize: theme.fontSizes.label,
            letterSpacing: theme.letterSpacing.wide,
            textTransform: "uppercase",
            color: theme.colors.white,
            marginBottom: theme.spacing.lg,
          }}
        >
          New Season — SS 2026
        </p>

        <h1
          style={{
            fontFamily: theme.fonts.serif,
            fontWeight: 400,
            fontSize: theme.fontSizes.h1,
            lineHeight: 1.1,
            color: theme.colors.white,
            marginBottom: theme.spacing.xl,
            maxWidth: "620px",
          }}
        >
          Dressed in
          <br />
          <em style={{ fontStyle: "italic" }}>quiet grace</em>
        </h1>

        <div style={{ display: "flex", flexWrap: "wrap", gap: theme.spacing.md }}>
          <Button href="/shop" variant="light">
            Shop The Collection
          </Button>
          <Button href="/about" variant="outline-light">
            Our Story
          </Button>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: theme.container.padding,
          bottom: theme.spacing.xl,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: theme.spacing.sm,
        }}
      >
        <span
          style={{
            fontFamily: theme.fonts.sans,
            fontSize: "10px",
            letterSpacing: theme.letterSpacing.wide,
            textTransform: "uppercase",
            color: theme.colors.white,
          }}
        >
          Scroll
        </span>
        <span
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: theme.colors.white,
            opacity: 0.6,
          }}
        />
      </div>
    </section>
  );
}
