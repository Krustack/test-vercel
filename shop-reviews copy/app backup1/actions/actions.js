"use server";

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function addShop(formData) {
  const filePath = path.join(process.cwd(), "shops.json");
  const shops = JSON.parse(await readFile(filePath, "utf8"));
  const file = formData.get("image");
  let image = "/assets/shops.png";
  if (file && typeof file !== "string" && file.size > 0) {
    const buffer = Buffer.from(await file.arrayBuffer());
    image = `data:${file.type};base64,${buffer.toString("base64")}`;
  }
  const newShop = {
    id: Math.max(0, ...shops.map((shop) => Number(shop.id) || 0)) + 1,
    name: String(formData.get("shopName") || "").trim(),
    description: String(formData.get("description") || "").trim(),
    image,
    customers:[],
  };
  shops.push(newShop);
  await writeFile(filePath, `${JSON.stringify(shops, null, 2)}\n`);
  revalidatePath("/")
  redirect("/")
}
