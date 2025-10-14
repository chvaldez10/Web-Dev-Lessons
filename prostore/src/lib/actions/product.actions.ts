"use server";

import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "@/lib/utils";
export async function getLatestProducts() {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return convertToPlainObject(
    products.map((product) => ({
      ...product,
      price: product.price.toString(),
      rating: product.rating.toString(),
    }))
  );
}
