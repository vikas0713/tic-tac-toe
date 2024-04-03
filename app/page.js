import Image from "next/image";
import styles from "./page.module.css";
import Board from "./_components/Board";

export default function Home() {
  return (
    <main className={styles.main}>
      <Board/>
    </main>
  );
}
