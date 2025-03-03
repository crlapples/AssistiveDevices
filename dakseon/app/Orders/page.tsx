"use client";

import React, { useState, useEffect } from 'react';
import styles from "./Orders.module.css";
import "./globals.css";
import Image from "next/image";
import Dropdown from "./Dropdown";

const Orders = () => {
  const noItems = useState<boolean>(false);
  const entrance = useState<boolean>(true);
  const addedWalker = useState<boolean>(false);
  const addedSeat = useState<boolean>(false);
  const walkerQuantity = useState<number>(0);
  const seatQuantity = useState<number>(0);
  const totalPrice = useState<number>(0);

  const prices = { "walker": 100, "seat": 50 };
  
  return (
    <div className={styles.mainContainer}>
      (entrance && {
        (noItems && {
          
        })
        (addedWalker || addedSeat &&
          <div className={styles.cartContainer}>
            <div className
          </div>
        )}
      })
      (selectedCart && {
        
        (addedWalker || addedSeat && {
          <div className={styles.itemsContainer>
            (addedWalker && {
              <div className={styles.itemHoriz}>
                <Image src="" alt="" width={902} height={1600} className={styles.itemImage} />
                <div className={styles.itemInfo>
                  <p className={styles.itemName}></p>
                </div>
              </div>
            })
            (addedSeat && {
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
      })
    </div>
  );
};
