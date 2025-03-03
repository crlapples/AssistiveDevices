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
        <div className={styles.cartContainer}>
          (noItems && {
            <p className={styles.noItemsMsg}>There's nothing here. Add items to your cart to continue.</p>
          })
          (addedWalker || addedSeat &&
            <div className={styles.entranceItemContainer}>
              <div className={styles.entranceHoriz}>
                <Image src="" at="" width={902} height={1600} className={styles.entranceImage} />
                <div className={styles.entranceVer}>
                  <p className={styles.entranceItemBrand}>Dakseon</p>
                  <p className={styles.entranceName}></p>
                  <p className={styles.entranceTaglineDesc}></p>
                  <p className={styles.entranceItemSKU}></p>
                  <p className={styles.entranceItemSpecs}></p>
                  <p className={styles.entranceItemPrice}></p>
                  <p className={styles.entranceItemQuantity}></p>
                </div>
                <div className={styles.entrancrItemButtons}>
                  
                </div>
              </div>
              <div className={styles.entranceTotalPriceContainer}>
                <p className={styles.priceType}>Subtotal</p>
                <p className={styles.entranceTotalPrice>{totalPrice.toFixed(2)}</p>
              </div>
            </div>
          })
        </div>
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
