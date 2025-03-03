"use client";

import React, { useState, useEffect } from 'react';
import styles from "./Orders.module.css";
import "./globals.css";
import Image from "next/image";
import Dropdown from "./Dropdown";

const Orders = () => {
  const [noItems, setNoItems] = useState<boolean>(false);
  const [entrance, setEntrance] = useState<boolean>(true);
  const [isOnShipping, setIsOnShipping] = useState<boolean>(false);
  const [addedWalker, setAddedWalker] = useState<boolean>(false);
  const [addedSeat, setAddedSeat] = useState<boolean>(false);
  const [walkerQuantity, setWalkerQuantity] = useState<number>(0);
  const [seatQuantity, setSeatQuantity] = useState<number>(0);
  const [subtotalPrice, setSubtotalPrice] = useState<number>(0);
  const [shippingPrice, setShippingPrice] = useState<number>(0);
  const [salesTaxPrice, setSalesTaxPrice] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const prices = { "walker": 100, "seat": 50 };
  
  return (
    <div className={styles.mainContainer}>
      (entrance && {
        <div className={styles.cartContainer}>
          (noItems && {
            <p className={styles.noItemsMsg}>There's nothing here. Add items to your cart to continue.</p>
          })
          (addedWalker || addedSeat &&
            <div className={styles.expressCheckoutContainer}>
              <p className={expressTitle}>EXPRESS CHECKOUT</p>
              <Image src="" alt="" width={} height={} className={styles.paypalExpress} />
              <Image src="" alt="" width={} height={} className={styles.googleExpress} />
            </div>
            (addedWalker && {
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
                    <div className={styles.entranceHoriz2}>
                      <p>-</p>
                      <input
                        type="number"
                        value={walkerQuantity}
                        onChange={(e) => setWalkerQuantity(e.target.value)};
                      <p>+</p>
                    </div>
                  </div>
                </div>
              </div>
            })
            (addedSeat && {
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
                    <div className={styles.entranceHoriz2}>
                      <p>-</p>
                      <input
                        type="number"
                        value={seatQuantity}
                        onChange={(e) => setSeatQuantity(e.target.value)};
                      <p>+</p>
                    </div>
                  </div>
                </div>
              </div>
            })
            <div className={styles.entranceTotalPriceContainer}>
              <p className={styles.entrancePriceType}>Total</p>
              <p className={styles.entranceTotalPrice>{totalPrice.toFixed(2)}</p>
            </div>
            <button className={styles.continueToShipping}>Continue to shipping</button>
          })
        </div>
      })
      (isOnShipping && {
        <div className={styles.customerDetailsContainer}>
          
        </div>
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
                <p className={styles.afterSubtotalPrice}>{subtotalPrice.toFixed(2)}</p>
                <p className={styles.afterPriceType}>Shipping</p>
                <p className={styles.afterShippingPrice}>Calculated next step</p>
                <p className={styles.afterPriceType}>Sales Tax</p>
                <p className={styles.afterTaxPrice}>{salesTaxPrice.toFixed(2)}</p>
              </div>
              <div className={styles.seperatorLineA} />
              <div className={styles.afterTypeAndPriceContainer}>
                <p className={styles.afterPriceType}>Total</p>
                <p className={styles.afterTotalPrice}>{totalPrice.toFixed(2)}</p>
              </div>
            </div>
            <div className={styles.promotions}>
              
            </div>
          </div>
        })
      })
    </div>
  );
};
