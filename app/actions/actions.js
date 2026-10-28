"use server";

import { getShops, saveShops } from "@/lib/shops";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function addShop(formData) {
  const shops = await getShops();
  const newShop = {
    id: Math.max(0, ...shops.map((shop) => Number(shop.id) || 0)) + 1,
    name: String(formData.get("shopName") || "").trim(),
    description: String(formData.get("description") || "").trim(),
    image: "/assets/shops.png",
    customers: [],
  };
  shops.push(newShop);
  await saveShops(shops);
  revalidatePath("/");
  redirect("/");
}

export async function writeReview(formData) {
  const shops = await getShops();
  const newReview = {
    customerID: Math.max(0, ...shops.map((shop) => Number(shop.id) || 0)) + 1,
    customerName: String(formData.get("username")),
    rating: Number(formData.get("rating")),
    review: String(formData.get("review")),
  };
  const shopID = Number(formData.get("shopID"));
  shops.forEach((shop) => {
    if (shopID === shop.id) {
      shop.customers.push(newReview);
    }
  });
  await saveShops(shops);
  revalidatePath("/");
  redirect("/");
}
