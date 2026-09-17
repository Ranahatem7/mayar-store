import Link from "next/link";
import theme from "@/styles/theme";
import ProductCard from "@/components/ProductCard";

export default function NewArrivals({ products }) {
  const newArrivals = products.filter((product) => product.isNewArrival);

  return (
    <section
      style={{
        maxWidth: theme.container.maxWidth,
        margin: "0 auto",
        padding: `${theme.spacing.huge} ${theme.container.padding}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: theme.spacing.md,
          marginBottom: theme.spacing.xxl,
        }}
      >
        <div>
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
            Just In
          </p>
          <h2
            style={{
              fontFamily: theme.fonts.serif,
              fontWeight: 400,
              fontSize: theme.fontSizes.h2,
              color: theme.colors.black,
            }}
          >
            New Arrivals
          </h2>
        </div>

        <Link
          href="/shop?filter=new"
          className="nav-link"
          style={{
            fontFamily: theme.fonts.sans,
            fontSize: theme.fontSizes.nav,
            letterSpacing: theme.letterSpacing.wide,
            textTransform: "uppercase",
            fontWeight: 500,
            color: theme.colors.black,
          }}
        >
          View All
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: theme.spacing.xl,
        }}
      >
        {newArrivals.map((product, index) => (
          <ProductCard key={product._id} product={product} preload={index === 0} />
        ))}
      </div>
    </section>
  );
}
