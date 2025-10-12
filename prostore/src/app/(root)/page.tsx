import { sampleData } from "@/db/sample-data";
import ProductList from "@/components/shared/product/ProductList";

const Homepage = async () => {
  console.log(sampleData);
  return (
    <div>
      <h1>home page</h1>
      <ProductList data={sampleData.products} />
    </div>
  );
};

export default Homepage;
