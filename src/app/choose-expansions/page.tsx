"use client";

import { Button, Checkbox } from "semantic-ui-react";
import styles from "./page.module.scss";
import Link from "next/link";
import { useAppContext } from "../../contexts/appContext/AppContext";
import { Expansion } from "../../models/expansion";

export default function Setup() {
  const { expansions, selectExpansion } = useAppContext();

  return (
    <div>
      <h1>Which expansions do you want to use?</h1>
      <div className={styles.options}>
        {expansions.map((option) => (
          <Checkbox
            key={option.title}
            label={option.title}
            className={styles.option}
            checked={option.isSelected}
            disabled={!option.isOptional}
            onClick={() => selectExpansion(option.id)}
          />
        ))}
      </div>
      <div>
        <Link href={"/choose-tiles"}>
          <Button className={styles.button} size={"large"} primary={true}>
            Continue
          </Button>
        </Link>
      </div>
    </div>
  );
}
