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
  const subtotalPrice = useState<number>(0);
  const shippingPrice = useState<number>(0);
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
                </div>
                <div className={styles.entranceVer2}>
                  <p className={styles.entranceItemPrice></p>
                  <p className={styles.entranceItemQuantity}></p>
                </div>
              </div>
              <div className={styles.entranceItemButtons}>
                  
              </div>
            </div>
            <div className={styles.entranceTotalPriceContainer}>
              <p className={styles.entrancePriceType}>Subtotal</p>
              <p className={styles.entranceTotalPrice>{totalPrice.toFixed(2)}</p>
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
                <p className={styles.afterItemQuantity}></p>
                <p className={styles.afterItemPrice></p>
              </div>
            })
            (addedSeat && {
              <div className={styles.itemHoriz}>
                <Image src="" alt="" width={902} height={1600} className={styles.itemImage} />
                <div className={styles.itemInfo>
                  <p className={styles.itemName}></p>
                </div>
                <p className={styles.afterItemQuantity}></p>
                <p className={styles.afterItemPrice></p>
              </div>
            })
            <div className={styles.priceContainer}>
              <div className={styles.seperatorLineA} />
              <div className={styles.afterSubAndShipCostContainer}>
                <p className={styles.afterPriceType}>Subtotal</p>
                <p className={styles.afterTotalPrice}>{subtotalPrice.toFixed(2)}</p>
                <p className={styles.afterPriceType}>Shipping</p>
                <p className={styles.afterTotalPrice}>Calculated at the shipping step</p>
              </div>
              <div className={styles.seperatorLineA} />
              <div className={styles.afterTypeAndPriceContainer}>
                <p className={styles.afterPriceType}>Total</p>
                <p className={styles.afterTotalPrice}>{totalPrice.toFixed(2)}</p>
              </div>
            </div>
            <div className={styles.
          </div>
        })
      })
    </div>
  );
};
