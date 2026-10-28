import Card from "@/components/card/Card";
import shops from "@/shops.json";
export default function ShopsPage() {
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
