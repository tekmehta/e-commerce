import CategoryList from "@/components/CaategoryList";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

const Home = async () => {
  return (
    <div>
      <Navbar />
      <Slider />
      
      <section className="mt-12 m-5">
        <h1 className="text-xl px-10 py-4 font-mono">Featured Products</h1>
        <ProductList /> 
      </section>

      <section className="mt-12">
        <h1 className="text-xl px-10 py-4 font-mono">Categories</h1>
        <CategoryList />  
      </section>

      <section className="mt-12 m-5">
        <h1 className="text-xl px-10 py-4 font-mono">New Products</h1>
        <ProductList />  New section for fresh product listings
      </section>

      <Footer />
    </div>
  );
}

export default Home;
