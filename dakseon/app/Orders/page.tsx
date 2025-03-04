"use client";

import React, { useState, useEffect } from 'react';
import styles from "./Orders.module.css";
import "./globals.css";
import Image from "next/image";
import Dropdown from "./Dropdown";

const Orders = () => {
  const [noItems, setNoItems] = useState<boolean>(false);
  const [entrance, setEntrance] = useState<boolean>(true);
  const [isOnInformation, setIsOnInformation] = useState<boolean>(false);
  const [addedWalker, setAddedWalker] = useState<boolean>(false);
  const [addedSeat, setAddedSeat] = useState<boolean>(false);
  const [walkerQuantity, setWalkerQuantity] = useState<number>(0);
  const [seatQuantity, setSeatQuantity] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [matchEmail, setMatchEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [streetAddress, setStreetAddress] = useState<string>("");
  const [apartment, setApartment] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [stateOrProvince, setStateOrProvince] = useState("");
  const [postal, setPostal] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [subtotalPrice, setSubtotalPrice] = useState<number>(0);
  const [shippingPrice, setShippingPrice] = useState<number>(0);
  const [salesTaxPrice, setSalesTaxPrice] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isOnShipping, setIsOnShipping] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>("");
  const [isOnPayment, setIsOnPayment] = useState<boolean>(false);
  const [bEmail, setBEmail] = useState<string>("");
  const [bMatchEmail, setBMatchEmail] = useState<string>("");
  const [bFullName, setBFullName] = useState<string>("");
  const [bCountry, setBCountry] = useState<string>("");
  const [bStreetAddress, setBStreetAddress] = useState<string>("");
  const [bApartment, setBApartment] = useState<string>("");
  const [bCity, setBCity] = useState<string>("");
  const [bStateOrProvince, setBStateOrProvince] = useState<string>("");
  const [bPostal, setBPostal] = useState<string>("");
  const [cardName, setCardName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardExp, setCardExp] = useState<string>("");
  const [cardCVV, setCardCVV] = useState<string>("");
  const [isOrderConfirmed, setIsOrderConfirmed] = useState<boolean>("");
  const [invoiceItem1, setInvoiceItem1] = useState<string>("");
  const [invoiceTotal1, setInvoiceTotal1] = useState<number>("");
  const [invoiceTotal5, setInvoiceTotal5] = useState<number>("");

  const prices = { "walker": 100, "seat": 50 };
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <Image src="/logo.png" alt="Dakseon Logo" width={512} height={512} className={styles.logo} />
        <Image src="/Food_and_Drug_Administration_icon_2016.svg.png" alt="" width={480} height={720} className={styles.fda} />
        <Dropdown />
      </div>
      {entrance && (
        <div className={styles.cartContainer}>
          <div className={styles.cartContainer2}>
            {noItems && (
              <p className={styles.noItemsMsg}>There's nothing here. Add items to your cart to continue.</p>
            )}
            {(addedWalker || addedSeat) && (
              <>
                <div className={styles.flowContainer}>
                  <p><strong>Cart</strong></p>
                  <Image src="" alt="" width={} height={} />
                  <p>Information</p>
                  <Image src="" alt="" width={} height={} />
                  <p>Shipping</p>
                  <Image src="" alt="" width={} height={} />
                  <p>Payment</p>
                </div>
                {addedWalker && (
                  <div className={styles.entranceItemContainer}>
                    <div className={styles.entranceHoriz}>
                      <Image src="" alt="" width={902} height={1600} className={styles.entranceImage} />
                      <div className={styles.entranceVer}>
                        <p className={styles.entranceItemBrand}>Dakseon</p>
                        <p className={styles.entranceName}></p>
                        <p className={styles.entranceTaglineDesc}></p>
                        <p className={styles.entranceItemSKU}></p>
                        <p className={styles.entranceItemSpecs}></p>
                      </div>
                      <div className={styles.entranceVer2}>
                        <p className={styles.entranceItemPrice}></p>
                        <div className={styles.entranceHoriz2}>
                          <p>-</p>
                          <input
                            type="number"
                            value={walkerQuantity}
                            onChange={(e) => setWalkerQuantity(parseInt(e.target.value, 10) || 0)}
                          />
                          <p>+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {addedSeat && (
                  <div className={styles.entranceItemContainer}>
                    <div className={styles.entranceHoriz}>
                      <Image src="" alt="" width={902} height={1600} className={styles.entranceImage} />
                      <div className={styles.entranceVer}>
                        <p className={styles.entranceItemBrand}>Dakseon</p>
                        <p className={styles.entranceName}></p>
                        <p className={styles.entranceTaglineDesc}></p>
                        <p className={styles.entranceItemSKU}></p>
                        <p className={styles.entranceItemSpecs}></p>
                      </div>
                      <div className={styles.entranceVer2}>
                        <p className={styles.entranceItemPrice}></p>
                        <div className={styles.entranceHoriz2}>
                          <p>-</p>
                          <input
                            type="number"
                            value={seatQuantity}
                            onChange={(e) => setSeatQuantity(parseInt(e.target.value, 10) || 0)}
                          />
                          <p>+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className={styles.entranceTotalPriceContainer}>
                  <p className={styles.entrancePriceType}>Total</p>
                  <p className={styles.entranceTotalPrice}>{totalPrice.toFixed(2)}</p>
                </div>
                <button className={styles.continueToInfo}>Continue</button>
              </>
            )}
          </div>
        </div>
      )}
      {isOnInformation && (
        <>
          <div className={styles.infoContainer}>
            <div className={styles.flowContainer}>
              <p>Cart</p>
              <Image src="" alt="" width={} height={} />
              <p><strong>Information</strong></p>
              <Image src="" alt="" width={} height={} />
              <p>Shipping</p>
              <Image src="" alt="" width={} height={} />
              <p>Payment</p>
            </div>
            <div className={styles.expressCheckoutContainer}>
              <p className={styles.expressTitle}>EXPRESS CHECKOUT</p>
              <Image src="" alt="" width={} height={} className={styles.paypalExpress} />
              <Image src="" alt="" width={} height={} className={styles.googleExpress} />
            </div>
            <div className={styles.customerDetailsContainer}>
              <p className={styles.contactP}>Contact Information</p>
              <form>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className={styles.fullInput}
                />
                <input
                  type="email"
                  value={matchEmail}
                  onChange={(e) => setMatchEmail(e.target.value)}
                  placeholder="Confirm email"
                  required
                  className={styles.fullInput}
                />
                <div className={styles.seperatorLineB} />
                <p className={styles.shippingP}>Shipping Details</p>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country/region"
                  required
                  className={styles.fullInput}
                />
                <div className={styles.shippingHoriz}>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    required
                  />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="LastName"
                    required
                  />
                </div>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company (optional)"
                  className={styles.fullInput}
                />
                <input
                  type="text"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  placeholder="Street address"
                  required
                  className={styles.fullInput}
                />
                <input
                  type="text"
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                  placeholder="Apartment, suite, etc. (optional)"
                  className={styles.fullInput}
                />
                <div className={styles.shippingHoriz2}>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    required
                  />
                  <input
                    type="text"
                    value={stateOrProvince}
                    onChange={(e) => setStateOrProvince(e.target.value)}
                    placeholder="State/province"
                  />
                  <input
                    type="text"
                    value={postal}
                    onChange={(e) => setPostal(e.target.value)}
                    placeholder="Postal code"
                    required
                  />
                </div>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone (optional)"
                  className={styles.fullInput}
                />
                <div className={styles.informationButtons}>\
                  <Image src="" alt="" width={} height={} />
                  <p>Return to cart</p>
                  <button className={styles.continueToShipping}>Continue to shipping</button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
      {isOnShipping && (
        <>
          
          <div className={styles.flowContainer}>
            <p>Cart</p>
            <Image src="" alt="" width={} height={} />
            <p>Information</p>
            <Image src="" alt="" width={} height={} />
            <p><strong>Shipping</strong></p>
            <Image src="" alt="" width={} height={} />
            <p>Payment</p>
          </div>
          <div className={styles.shippingOptionsContainer}>
            <div className={styles.shippingOptions}>
              <label>Standard</label>
              <input
                type="radio"
                name="standard"
              />
              <label>Priority</label>
              <input
                type="radio"
                name="priority"
              />
              <label>Overnight</label>
              <input
                type="radio"
                name="overnight"
              />
            </div>
            <div className={styles.shippingCarriersContainer}>
              <div className={styles.fedexContainer}>
                <p className={styles.deliveryTime}></p>
                <p className={styles.deliveryCost}></p>
                <Image src="" alt="" width={} height={} />
              </div>
              <div className={styles.upsContainer}>
                <p className={styles.deliveryTime}></p>
                <p className={styles.deliveryCost}></p>
                <Image src="" alt="" width={} height={} />
              </div>
              <div className={styles.dhlContainer}>
                <p className={styles.deliveryTime}></p>
                <p className={styles.deliveryCost}></p>
                <Image src="" alt="" width={} height={} />
              </div>
            </div>
          </div>
          <p className={styles.estTime}></p>
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Special delivery instructions (optional)"
            className={styles.notes}
          />
          <div className={styles.shippingButtons}>\
            <Image src="" alt="" width={} height={} />
            <p>Return to information</p>
            <button className={styles.continueToPayment}>Continue to payment</button>
          </div>
        </>
      )}
      {isOnPayment && (
        <>
          <div className={styles.flowContainer}>
            <p>Cart</p>
            <Image src="" alt="" width={} height={} />
            <p>Information</p>
            <Image src="" alt="" width={} height={} />
            <p>Shipping</p>
            <Image src="" alt="" width={} height={} />
            <p><strong>Payment</strong></p>
          </div>
          <p className={styles.billingP}>Billing Information</Image>
          <input
            type="email"
            value={bEmail}
            onChange={(e) => setBEmail(e.target.value)}
            className={styles.bFullInput}
            placeholder="Email"
          />
          <input
            type="email"
            value={bMatchEmail}
            onChange={(e) => setBMatchEmail(e.target.value)}
            className={styles.bFullInput}
            placeholder="Confirm email"
          />
          <input
            type="text"
            value={bFullName}
            onChange={(e) => setBFullName(e.target.value)}
            required
            className={styles.bFullInput}
            placeholder="Full name"
          />
          <input
            type="text"
            value={bCountry}
            onChange={(e) => setBCountry(e.target.value)}
            required
            className={styles.bFullInput}
            placeholder="Country/region"
          />
          <input
            type="text"
            value={bStreetAddress}
            onChange={(e) => setBStreetAddress(e.target.value)}
            required
            className={styles.bFullInput}
            placeholder="Street address"
          />
          <input
            type="text"
            value={bApartment}
            onChange={(e) => setBApartment(e.target.value)}
            className={styles.bFullInput}
            placeholder="Apartment, suite, etc. (optional)"
          />
          <div className={styles.paymentHoriz}>
            <input
              type="text"
              value={bCity}
              onChange={(e) => setBCity(e.target.value)}
              required
              placeholder="City"
            />
            <input
              type="text"
              value={bStateOrProvince}
              onChange={(e) => setBStateOrProvince(e.target.value)}
              required
              placeholder="State/province"
            />
            <input
              type="text"
              value={bPostal}
              onChange={(e) => setBPostal(e.target.value)}
              required
              placeholder="Postal code"
            />
          </div>
          <div className={styles.cardBrands}>
            <Image src="" alt="" width={} height={} />
            <Image src="" alt="" width={} height={} />
            <Image src="" alt="" width={} height={} />
            <Image src="" alt="" width={} height={} />
          </div>
          <div className={styles.cardInfoContainer}>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Name on card"
              required
            />
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Card number"
              required
            />
            <div className={styles.cardHoriz}>
              <input
                type="text"
                value={cardExp}
                onChange={(e) => setCardExp(e.target.value)}
                placeholder="MM/YY"
                pattern="\d{2}/\d{2}"
                required
              />
              <input
                type="text"
                value={cardCVV}
                onChange={(e) => setCardCVV(e.target.value)}
                placeholder="CVV"
                required
              />
            </div>
          </div>
          <div className={styles.paymentButtons}>\
            <Image src="" alt="" width={} height={} />
            <p>Return to shipping</p>
            <button className={styles.orderButton}>Order</button>
          </div>
        </>
      )}
      {(addedWalker || addedSeat) && (isOnInformation || isOnShipping || isOnPayment) && (
        <div className={styles.itemsContainer}>
          {addedWalker && (
            <div className={styles.itemHoriz}>
              <Image src="" alt="" width={902} height={1600} className={styles.itemImage} />
              <div className={styles.itemInfo}>
                <p className={styles.itemName}></p>
              </div>
              <p className={styles.afterItemQuantity}></p>
              <p className={styles.afterItemPrice}></p>
            </div>
          )}
          {addedSeat && (
            <div className={styles.itemHoriz}>
              <Image src="" alt="" width={902} height={1600} className={styles.itemImage} />
              <div className={styles.itemInfo}>
                <p className={styles.itemName}></p>
              </div>
              <p className={styles.afterItemQuantity}></p>
              <p className={styles.afterItemPrice}></p>
            </div>
          )}
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
      )}
      {isOrderConfirmed && (
        <div className={styles.orderConfirmationContainer}>
          <div className={styles.orderConfirmedMsg}>
            <Image src="" alt="" width={} height={} />
            <h2>Thank you for your order!</h2>
            <p>`Your order #${orderId} is confirmed. You will receive an e-mail at ${bEmail} shortly.`</p>
          </div>
          <div className={styles.orderInvoice}>
            <div className={styles.orderHoriz}>
              <p className={styles.first}><strong>Items</strong></p>
              <p className={styles.second}><strong>Qty.</strong></p>
              <p className={styles.third}><strong>Cost</strong></p>
              <p className={styles.fourth}><strong>SKU</strong></p>
              <p className={styles.fifth}></p>
              <p className={styles.sixth}><strong>Total</strong></p>
            </div>
            <div className={styles.orderHoriz}>
              <p className={styles.first}>{invoiceItem1}</p>
              <p className={styles.second}></p>
              <p className={styles.third}></p>
              <p className={styles.fourth}></p>
              <p className={styles.fifth}></p>
              <p className={styles.sixth}>{invoiceTotal1.toFixed(2)}</p>
            </div>
            <div className={styles.orderHoriz}>
              <p className={styles.first}></p>
              <p className={styles.second}></p>
              <p className={styles.third}></p>
              <p className={styles.fourth}></p>
              <p className={styles.fifth}>Subtotal</p>
              <p className={styles.sixth}></p>
            </div>
            <div className={styles.orderHoriz}>
              <p className={styles.first}></p>
              <p className={styles.second}></p>
              <p className={styles.third}></p>
              <p className={styles.fourth}></p>
              <p className={styles.fifth}>Shipping</p>
              <p className={styles.sixth}></p>
            </div>
            <div className={styles.orderHoriz}>
              <p className={styles.first}></p>
              <p className={styles.second}></p>
              <p className={styles.third}></p>
              <p className={styles.fourth}></p>
              <p className={styles.fifth}>Sales Tax</p>
              <p className={styles.sixth}></p>
            </div>
            <div className={styles.orderHoriz}>
              <p className={styles.first}></p>
              <p className={styles.second}></p>
              <p className={styles.third}></p>
              <p className={styles.fourth}></p>
              <p className={styles.fifth}></p>
              <p className={styles.sixth}>{invoiceTotal5.toFixed(2)}</p>
            </div>
          </div>
          <footer className={styles.footer}>
            <div className={styles.verticalOriA}>
              <strong>
                <p>Return to Top</p>
              </strong>
              <Image src="/wheelchair-icon.png" width={512} height={512} alt="" className={styles.wheelchairIcon} />
              <p>© Copyright</p>
            </div>
            <div className={styles.verticalOriB}>
              <div className={styles.horizontalOri}>
                <Image src="/instagram.1024x1024.png" width={512} height={512} alt="" />
                <Image src="/logo-black.png" width={512} height={512} alt="" className={styles.x} />
                <Image src="/tiktok.946x1024.png" width={512} height={512} alt="" />
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Orders;
