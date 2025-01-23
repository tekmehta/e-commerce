
import CaategoryList from "@/components/CaategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

const Home = async() => {
  return (
    <div>
      <Slider/>
      <div className="mt-12 m-5">
        <h1 className=" text-xl px-10 py-4 font-mono">Featured Products</h1>
        <ProductList/>
      </div>
      <div className="mt-12">
        <h1 className=" text-xl px-10 py-4 font-mono">Catogeries</h1>
        <CaategoryList/>
      </div>
      <div className="mt-12 m-5">
        <h1 className=" text-xl px-10 py-4 font-mono">New Products</h1>
        <ProductList/>
      </div>
    </div>
  );
}

export default Home;