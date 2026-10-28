import Card from "@/components/card/Card";
import { getShops } from "@/lib/shops";

export const dynamic = "force-dynamic";

export default async function ShopsPage() {
  const shops = await getShops();
  return (
    <>
      <h1>Read shops review for help your decition</h1>
      <div className="cards">
        {shops.map((shop) => (
          <Card key={shop.id} shop={shop} />
        ))}
      </div>
    </>
  );
}
