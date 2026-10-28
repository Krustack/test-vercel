import Input from "@/components/Input/Input";
import Review from "@/components/reviewShop/review";
import Image from "next/image";
import Form from "next/form";
// import { useParams } from "next/navigation";
import { getShops } from "@/lib/shops";
import styles from "./slugshop.module.css";
import { writeReview } from "../../actions/actions";

export const dynamic = "force-dynamic";

export default async function SlugShopPage({ params }) {
  const { slugShop } = await params;
  const shops = await getShops();
  const selectedShop = shops.find(
    (shop) => String(shop.id) === String(slugShop),
  );
  return (
    <main className={styles.maninContainer}>
      <div className={styles.shopDetail}>
        <div className={styles.card}>
          <Image
            src={selectedShop.image}
            alt={selectedShop.name}
            width={100}
            height={100}
          />
          <h3>{selectedShop.name}</h3>
        </div>
        <div className={styles.reviews}>
          {selectedShop.customers.map((customer) => (
            <Review key={customer.customerID} customer={customer} />
          ))}
        </div>
      </div>

      <div className={styles.writeReview}>
        <h2>Write review</h2>
        <Form action={writeReview}>
          <Input inputName="username" />
          <Input inputName="review" />
          <label>rating</label>
          <select id="rating" name="rating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input name="shopID" id="shopID" value={slugShop} type="hidden" />
          <button type="reset">reset</button>
          <button type="submit">add review</button>
        </Form>
      </div>
    </main>
  );
}

// export default function SlugShopPage() {
//   const { slugShop } = useParams();

// }
