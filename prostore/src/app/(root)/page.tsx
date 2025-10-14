import ProductList from "@/components/shared/product/ProductList";
import { getLatestProducts } from "@/lib/actions/product.actions";
const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  console.log(latestProducts);
  return (
    <div>
      <h1>home page</h1>
      <ProductList data={latestProducts} />
    </div>
  );
};

export default Homepage;
