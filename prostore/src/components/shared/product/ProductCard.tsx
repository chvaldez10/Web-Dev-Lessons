import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./ProducePrice";
import { Product } from "@/types";
import Rating from "./Rating";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority={true}
            className="w-full h-[300px] object-cover"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex flex-col gap-4 flex-grow">
        <div className="text-xs text-gray-500">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium line-clamp-2">{product.name}</h2>
        </Link>
        <div className="flex justify-between items-center gap-4 mt-auto">
          <Rating value={Number(product.rating)} />
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive">Out Of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
