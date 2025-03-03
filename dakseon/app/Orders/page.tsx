"use client";

import React, { useState, useEffect } from 'react';
import styles from "./Orders.module.css";
import "./globals.css";
import Image from "next/image";
import Dropdown from "./Dropdown";

const Orders = () => {
  const entrance = useState<boolean>(true);
  const addWalker = useState<boolean>(false);
  const addSeat = useState<boolean>(false);
  const walkerQuantity = useState<number>(0);
  const seatQuantity = useState<number>(0);
  const totalPrice = useState<number>(0);

  const prices = { "walker": 100, "seat": 50 };
  
  return (
    <div className={styles.mainContainer}>
      (entrance && {
        
      })
      (addWalker || addSeat && {
        <div className={styles.itemsContainer>
          (addWalker && {
            <div className={styles.itemHoriz}>
              <Image src="" alt="" width={902} height={1600} className={styles.itemImage} />
              <div className={styles.itemInfo>
                <p className={styles.itemName}></p>
              </div>
            </div>
          })
          (addSeat && {
            <div className={styles.itemHoriz}>
              <Image src="" alt="" width={902} height={1600} className={styles.itemImage} />
              <div className={styles.itemInfo>
                <p className={styles.itemName}></p>
              </div>
            </div>
          })
          <div className={styles.priceContainer}>
            <p className={styles.totalPrice}>{totalPrice.toFixed(2)}</p>
          </div>
          <div className={styles.
        </div>
      })
    </div>
  );
};
