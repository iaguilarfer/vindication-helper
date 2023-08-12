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
  const {
    optionalSets,
    selectSet,
    numberOfNeededTiles,
    numberOfSelectedOptionalTiles,
  } = useAppContext();

  return (
    <div>
      <h1>Which optional tiles do you want to select from?</h1>
      <p>{`You need to select at least ${numberOfNeededTiles} tiles`}</p>
      <div className={styles.options}>
        {optionalSets.map((set) => (
          <div
            className={cx(
              styles.set,
              !set.isSelected && styles["set-not-selected"]
            )}
            key={set.id}
            onClick={() => selectSet(set.id)}
          >
            <div className={cx(styles["set-images"])}>
              {set.tiles.map((tile, index) => (
                <Image
                  key={`${tile.id}_${index}`}
                  src={regionImages[tile.imageKey]}
                  alt={tile.name}
                />
              ))}
            </div>
            <p className={styles["set-title"]}>{set.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <Link href={"/get-random-setup"}>
          <Button
            className={styles.button}
            size={"large"}
            primary={true}
            disabled={numberOfSelectedOptionalTiles < numberOfNeededTiles}
          >
            {`Continue (${numberOfSelectedOptionalTiles}/${numberOfNeededTiles})`}
          </Button>
        </Link>
        <Link href={"/"}>
          <Button className={styles.button} size={"large"} primary={true}>
            Start again
          </Button>
        </Link>
      </div>
    </div>
  );
}
