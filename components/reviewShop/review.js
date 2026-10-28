import styles from "./review.module.css";
export default function Reviews({ customer }) {
  return (
    <div className={styles.review}>
      <h2>{customer.customerName}</h2>
      <h3>⭐️{customer.rating} / 5</h3>
      <p>{customer.review}</p>
    </div>
  );
}
