import styles from "./review.module.css";
import Review from "./review"
export default function Reviews({ customers,onToggle }) {
  return (
    <>
      <div className={styles.reviews}>
        {customers.map((customer) => (
          <Review key={customer.id} customer={customer} />
        ))}
      </div>
      <div className={styles.overlay} onClick={onToggle}></div>
    </>
  );
}
