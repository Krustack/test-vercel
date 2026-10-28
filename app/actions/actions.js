"use server";

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function addShop(formData) {
  const filePath = path.join(process.cwd(), "shops.json");
  const shops = JSON.parse(await readFile(filePath, "utf8"));
  const newShop = {
    id: Math.max(0, ...shops.map((shop) => Number(shop.id) || 0)) + 1,
    name: String(formData.get("shopName") || "").trim(),
    description: String(formData.get("description") || "").trim(),
    image: "/assets/shops.png",
    customers: [],
  };
  shops.push(newShop);
  await writeFile(filePath, `${JSON.stringify(shops, null, 2)}\n`);
  revalidatePath("/");
  redirect("/");
}

export async function writeReview(formData) {
  const filePath = path.join(process.cwd(), "shops.json");
  const shops = JSON.parse(await readFile(filePath, "utf8"));
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
  await writeFile(filePath, `${JSON.stringify(shops, null, 2)}\n`);
  revalidatePath("/");
  redirect("/");
}
