"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import theme from "@/styles/theme";
import formatPrice from "@/lib/formatPrice";

export default function ProductCard({ product, preload = false }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="product-card">
      <div
        className="product-card-image-wrap"
        style={{
          position: "relative",
          aspectRatio: "3 / 4",
          backgroundColor: theme.colors.softGrey,
        }}
      >
        <Link
          href={`/product/${product.slug}`}
          style={{ position: "absolute", inset: 0, display: "block" }}
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            preload={preload}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="product-card-image"
            style={{ objectFit: "cover" }}
          />
        </Link>

        {product.isNewArrival && (
          <span
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              backgroundColor: theme.colors.black,
              color: theme.colors.white,
              fontFamily: theme.fonts.sans,
              fontSize: "10px",
              letterSpacing: theme.letterSpacing.wide,
              textTransform: "uppercase",
              fontWeight: 500,
              padding: "6px 10px",
            }}
          >
            New
          </span>
        )}

        <button
          type="button"
          aria-label={
            wishlisted ? "Remove from wishlist" : "Add to wishlist"
          }
          onClick={() => setWishlisted((prev) => !prev)}
          className={`wishlist-btn${wishlisted ? " is-active" : ""}`}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.colors.white,
            border: "none",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={wishlisted ? theme.colors.black : "none"}
            stroke={theme.colors.black}
            strokeWidth="1.5"
          >
            <path d="M12 21s-7.5-4.6-10-9.3C.5 8.4 2.4 5 6 5c2 0 3.5 1 4 2 0.5-1 2-2 4-2 3.6 0 5.5 3.4 4 6.7C19.5 16.4 12 21 12 21z" />
          </svg>
        </button>
      </div>

      <Link href={`/product/${product.slug}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginTop: "16px",
          }}
        >
          <span
            style={{
              fontFamily: theme.fonts.serif,
              fontSize: theme.fontSizes.productName,
              color: theme.colors.black,
            }}
          >
            {product.name}
          </span>
          <span
            style={{
              fontFamily: theme.fonts.sans,
              fontSize: theme.fontSizes.price,
              color: theme.colors.black,
            }}
          >
            {formatPrice(product.salePrice ?? product.price)}
          </span>
        </div>
        <div
          style={{
            fontFamily: theme.fonts.sans,
            fontSize: "11px",
            letterSpacing: theme.letterSpacing.wide,
            textTransform: "uppercase",
            color: theme.colors.midGrey,
            marginTop: "6px",
          }}
        >
          {product.category}
        </div>
      </Link>
    </div>
  );
}
