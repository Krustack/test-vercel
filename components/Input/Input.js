import styles from "./Input.module.css"
export default function Input({ inputName, topic = inputName, type = "text" }) {
  return (
    <div className={styles.input}>
      <label htmlFor={inputName}>{topic}</label>
      <input id={inputName} name={inputName} type={type} 
      required />
    </div>
  );
}
