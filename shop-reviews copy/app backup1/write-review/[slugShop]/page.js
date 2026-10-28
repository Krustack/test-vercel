import Input from "@/components/Input/Input";
import Form from "next/form";
// import { useParams } from "next/navigation";
import shops from "@/shops.json";

export default async function SlugShopPage({ params }) {
  const { slugShop } = await params;
  const selectedShop = shops.find((shop) => {
    shop.id === Number(slugShop);
  });
  console.log(selectedShop);
  return (
    <main className="write-review">
      <Form>
        <Input inputName="username" />
        <Input inputName="review" />
        <label>rating</label>
        <select id="rating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="reset">reset</button>
        <button type="submit">add review</button>
      </Form>
    </main>
  );
}

// export default function SlugShopPage() {
//   const { slugShop } = useParams();

// }
