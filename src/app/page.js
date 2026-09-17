import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrivals";
import EditorialSplit from "@/components/home/EditorialSplit";
import ShopByCategory from "@/components/home/ShopByCategory";
import products from "@/data/products";
import categories from "@/data/categories";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <NewArrivals products={products} />
        <EditorialSplit />
        <ShopByCategory categories={categories} />
      </main>
      <Footer />
    </>
  );
}
