"use client";

import { Button, Checkbox } from "semantic-ui-react";
import styles from "./page.module.scss";
import Link from "next/link";
import { useAppContext } from "../../contexts/appContext/AppContext";
import { Expansion } from "../../models/expansion";
import {
  AncientTombTile,
  ArcaneTowerTile,
  GapingMawTile,
} from "../../data/tiles";
import { regionImages } from "../../assets/regions/index";
import Image from "next/image";
import cx from "classnames";

export default function Setup() {
  const { randomlySelectedTiles, calculateRandomSetup } = useAppContext();

  return (
    <div>
      <h1>Add this tiles into the scumbag</h1>
      <div className={styles.options}>
        {randomlySelectedTiles.scumbag.map(({ tile, count }) => (
          <div className={cx(styles.tile)} key={tile.id}>
            <Image
              key={tile.id}
              src={regionImages[tile.imageKey]}
              alt={tile.name}
            />
            <p className={styles["tile-title"]}>{`${tile.name} x ${count}`}</p>
          </div>
        ))}
      </div>
      {randomlySelectedTiles.villagesBag.length !== 0 && (
        <>
          <h1>Add this tiles into the villages bag</h1>
          <div className={styles.options}>
            {randomlySelectedTiles.villagesBag.map(({ tile, count }) => (
              <div className={cx(styles.tile)} key={tile.id}>
                <Image
                  key={tile.id}
                  src={regionImages[tile.imageKey]}
                  alt={tile.name}
                />
                <p
                  className={styles["tile-title"]}
                >{`${tile.name} x ${count}`}</p>
              </div>
            ))}
          </div>
        </>
      )}
      <div className={styles.buttons}>
        <Button
          className={styles.button}
          size={"large"}
          primary={true}
          onClick={calculateRandomSetup}
        >
          Get new random setup
        </Button>
        <Link href={"/"}>
          <Button className={styles.button} size={"large"} primary={true}>
            Start again
          </Button>
        </Link>
      </div>
    </div>
  );
}
