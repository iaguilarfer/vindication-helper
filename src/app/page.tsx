"use client";

import styles from "./page.module.scss";
import { useAppContext } from "../contexts/appContext/AppContext";
import { Button } from "semantic-ui-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.description}>
      <h1 className={styles.title}>Vindication</h1>

      <Link href={"/choose-expansions"}>
        <Button className={styles.button} size={"large"} primary={true}>
          Start Game
        </Button>
      </Link>
    </div>
  );
}
