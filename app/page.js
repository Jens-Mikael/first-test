import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="text-green-400">Hello world</div>
      <div className=" text-9xl text-sky-400">Built in test</div>
    </main>
  );
}
