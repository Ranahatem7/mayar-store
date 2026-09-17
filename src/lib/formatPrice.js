export default function formatPrice(amount, { currency = "USD", locale = "en-US" } = {}) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
