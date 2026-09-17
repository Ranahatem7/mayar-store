import Image from "next/image";
import Link from "next/link";
import theme from "@/styles/theme";

export default function ShopByCategory({ categories }) {
  return (
    <section
      style={{
        maxWidth: theme.container.maxWidth,
        margin: "0 auto",
        padding: `0 ${theme.container.padding} ${theme.spacing.huge}`,
      }}
    >
      <div style={{ marginBottom: theme.spacing.xxl }}>
        <p
          style={{
            fontFamily: theme.fonts.sans,
            fontSize: theme.fontSizes.label,
            letterSpacing: theme.letterSpacing.wide,
            textTransform: "uppercase",
            color: theme.colors.midGrey,
            marginBottom: theme.spacing.sm,
          }}
        >
          Shop By Category
        </p>
        <h2
          style={{
            fontFamily: theme.fonts.serif,
            fontWeight: 400,
            fontSize: theme.fontSizes.h2,
            color: theme.colors.black,
          }}
        >
          Find Your Occasion
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: theme.spacing.lg,
        }}
      >
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/shop?category=${category.slug}`}
            className="category-card"
            style={{
              position: "relative",
              display: "block",
              aspectRatio: "3 / 4",
              overflow: "hidden",
            }}
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="(max-width: 860px) 100vw, 33vw"
              className="category-card-image"
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(17,17,17,0.75) 0%, rgba(17,17,17,0.1) 55%, rgba(17,17,17,0) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: theme.spacing.lg,
                bottom: theme.spacing.lg,
              }}
            >
              <h3
                style={{
                  fontFamily: theme.fonts.serif,
                  fontSize: theme.fontSizes.h3,
                  color: theme.colors.white,
                  marginBottom: theme.spacing.xs,
                }}
              >
                {category.name}
              </h3>
              <p
                style={{
                  fontFamily: theme.fonts.sans,
                  fontSize: "11px",
                  letterSpacing: theme.letterSpacing.wide,
                  textTransform: "uppercase",
                  color: theme.colors.borderGrey,
                }}
              >
                {category.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
