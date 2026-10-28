import Form from "next/form";
import { addShop } from "../actions/actions";

import Input from "@/components/Input/Input";

export default function AddShopPage() {
  return (
    <main className="addshop-form">
      <h1>Add shop</h1>
      <Form action={addShop}>
        <Input inputName="shopName" topic="shop name" />
        <Input inputName="description" />
        <Input inputName="image" type="file" />

        <button type="reset">reset</button>
        <button type="submit">Add shop</button>
      </Form>
    </main>
  );
}
