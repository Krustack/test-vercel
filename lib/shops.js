import { Redis } from "@upstash/redis";
import seed from "@/shops.json";

const KEY = "shops";
const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

export async function getShops() {
  const shops = await redis.get(KEY);
  if (shops) return shops;
  await redis.set(KEY, seed);
  return seed;
}

export async function saveShops(shops) {
  await redis.set(KEY, shops);
}
