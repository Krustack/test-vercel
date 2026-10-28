"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css"
export default function Navlink({ href, children }) {
  const path = usePathname();
  const isActive = href === path;
  return (
    <li className={isActive ? styles.active : ""}>
      <Link href={href}>{children}</Link>
    </li>
  );
}
