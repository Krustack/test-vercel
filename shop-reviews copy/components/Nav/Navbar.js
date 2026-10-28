import Navlink from "./Navlink";
import Image from "next/image";
import styles from "./navbar.module.css"
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/assets/shops.png" alt="shops" width={50} height={50} priority />
        <h1>LOGO</h1>
      </div>
      <nav>
        <ul>
          <Navlink href="/">Home</Navlink>
          <Navlink href="/write-review">write review</Navlink>
          <Navlink href="/add-shop">add shop</Navlink>
        </ul>
      </nav>
    </div>
  );
}
