import Image from "next/image";
import theme from "@/styles/theme";
import Button from "@/components/Button";

export default function EditorialSplit() {
  return (
    <section
      style={{
        maxWidth: theme.container.maxWidth,
        margin: "0 auto",
        padding: `0 ${theme.container.padding} ${theme.spacing.huge}`,
      }}
    >
      <div
        className="editorial-grid"
        style={{ border: `1px solid ${theme.colors.borderGrey}` }}
      >
        <div style={{ position: "relative", minHeight: "420px" }}>
          <Image
            src="https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?auto=format&fit=crop&w=1400&q=80"
            alt="Embellished gown from the Mayar seasonal edit"
            fill
            preload
            sizes="(max-width: 860px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: `${theme.spacing.xxxl} ${theme.spacing.xxl}`,
          }}
        >
          <p
            style={{
              fontFamily: theme.fonts.sans,
              fontSize: theme.fontSizes.label,
              letterSpacing: theme.letterSpacing.wide,
              textTransform: "uppercase",
              color: theme.colors.midGrey,
              marginBottom: theme.spacing.lg,
            }}
          >
            The Edit — SS 2026
          </p>

          <h2
            style={{
              fontFamily: theme.fonts.serif,
              fontWeight: 400,
              fontSize: theme.fontSizes.h2,
              lineHeight: 1.2,
              color: theme.colors.black,
              marginBottom: theme.spacing.lg,
            }}
          >
            Light falls
            <br />
            on everything
            <br />
            <em style={{ fontStyle: "italic" }}>it touches</em>
          </h2>

          <p
            style={{
              fontFamily: theme.fonts.sans,
              fontSize: theme.fontSizes.bodyLarge,
              color: theme.colors.darkGrey,
              lineHeight: 1.7,
              marginBottom: theme.spacing.xl,
              maxWidth: "440px",
            }}
          >
            This season, Mayar explores the interplay of translucence and
            structure. Silk organza meets heavy crepe. Restraint meets
            intention.
          </p>

          <div>
            <Button href="/shop?filter=edit" variant="dark">
              Discover The Edit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
