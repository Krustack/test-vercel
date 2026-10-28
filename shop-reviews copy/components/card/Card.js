"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
import Reviews from "../reviewShop/Reviews";
import { useState } from "react";
export default function Card({ shop }) {
  const [openModal, setOpenmodal] = useState(false);
  const totalRating = (shop.customers).reduce(
    (sum, customer) => sum + (customer.rating ?? 0),
    0,
  );
  function toggleModal(){
    setOpenmodal((p)=>!p)
  }
  const avgRating = shop.customers?.length
    ? (totalRating / shop.customers.length).toFixed(1)
    : 0;
  return (
    <>
      <div className={styles.card}>
        <Image src={shop.image} width={100} height={100} alt={shop.name} />
        <h3>{shop.name}</h3>
        <p>⭐️ : {avgRating} / 5</p>
        <p>{shop.description}</p>
        <button onClick={toggleModal}>Read Review</button>
        <Link href={`/write-review/${shop.id}`}>write review</Link>
      </div>
      {openModal && <Reviews customers={shop.customers} onToggle={toggleModal} />}
    </>
  );
}
