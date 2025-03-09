"use client";

import React, { useState, useEffect } from 'react';
import styles from "./Orders.module.css";
import "./globals.css";
import Image from "next/image";
import Dropdown from "./Dropdown";

const Orders = () => {
  const [noItems, setNoItems] = useState<boolean>(true);
  const [entrance, setEntrance] = useState<boolean>(true);
  const [isOnInformation, setIsOnInformation] = useState<boolean>(false);
  const [addedWalker, setAddedWalker] = useState<boolean>(false);
  const [addedSeat, setAddedSeat] = useState<boolean>(false);
  const [subtotalPrice, setSubtotalPrice] = useState<string>("0");
  const [shippingPrice, setShippingPrice] = useState<number>(0);
  const [salesTaxPrice, setSalesTaxPrice] = useState<number>(0);
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
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isOnShipping, setIsOnShipping] = useState<boolean>(false);
  const [fedexPrice, setFedexPrice] = useState<number>(0);
  const [fedexTime, setFedexTime] = useState<string>("");
  const [upsPrice, setUpsPrice] = useState<number>(0);
  const [upsTime, setUpsTime] = useState<string>("");
  const [dhlPrice, setDhlPrice] = useState<number>(0);
  const [dhlTime, setDhlTime] = useState<string>("");
  const [selectedCarrier, setSelectedCarrier] = useState<string | null>("");
  const [selectedTrue, setSelectedTrue] = useState<boolean>(false);
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
  const [paymentCleared, setPaymentCleared] = useState<boolean>(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>("");
  const [invoiceItem1, setInvoiceItem1] = useState<string>("");
  const [invoiceTotal1, setInvoiceTotal1] = useState<number>(0);
  const [invoiceTotal5, setInvoiceTotal5] = useState<number>(0);
  const [totalWalkerPrice, setTotalWalkerPrice] = useState<number>(0);
  const [totalSeatPrice, setTotalSeatPrice] = useState<number>(0);

  if (isOnInformation || isOnShipping || isOnPayment || isOrderConfirmed) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
    
  useEffect(() => {
    setTotalWalkerPrice(walkerQuantity * 100);
  }, [walkerQuantity]);

  useEffect(() => {
    setTotalSeatPrice(seatQuantity * 50);
  }, [seatQuantity]);

  const prices = { "walker": 100, "seat": 50 };
  const shippingPrices = { };
  
  if (typeof window !== "undefined") {
    let a = true;
    window.onload = function() {
      if (sessionStorage.getItem('entrance') === null) {
        sessionStorage.setItem('entrance', 'false');
      } else {
        setEntrance(false);
      }
    };
  }

  useEffect(() => {
    if (sessionStorage.getItem('walkerYes') === 'true') {
      setNoItems(false);
      setAddedWalker(true);
      setWalkerQuantity(1);
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem('seatYes') === 'true') {
      setNoItems(false);
      setAddedSeat(true);
      setSeatQuantity(1);
    }
  }, []);

  useEffect(() => {
    const newSubtotal = (prices["walker"] * walkerQuantity + prices["seat"] * seatQuantity);
    setSubtotalPrice(newSubtotal.toFixed(2).toString());
    setSalesTaxPrice((newSubtotal + shippingPrice) * 0.11);
    setTotalPrice(newSubtotal + shippingPrice + salesTaxPrice);
  }, [walkerQuantity, seatQuantity, prices, subtotalPrice, shippingPrice, salesTaxPrice]);
  
  const handleContinue = () => {
    if (walkerQuantity === 0 && seatQuantity === 0) {
      setEntrance(true);
      setNoItems(true);
      setAddedWalker(false);
      setAddedSeat(false);
    } else {
      setEntrance(false);
      setIsOnInformation(true);
    }
  };

  const handlePaypal = () => {
    
  };

  const handleGoogle = () => {
    
  };

  const handleReturnCart = () => {
    setIsOnInformation(false);
    setEntrance(true);
  };

  const handleContinueShipping = () => {
    setIsOnInformation(false);
    setIsOnShipping(true);
  };

  const handleFedex = () => {
    setSelectedCarrier(null);
    setSelectedCarrier("fedex");
    sessionStorage.setItem("selectedTrue", "true");
  };

  const handleUps = () => {
    setSelectedCarrier(null);
    setSelectedCarrier("ups");
    sessionStorage.setItem("selectedTrue", "true");
  };

  const handleDhl = () => {
    setSelectedCarrier(null);
    setSelectedCarrier("dhl");
    sessionStorage.setItem("selectedTrue", "true");
  };

  const handleReturnInformation = () => {
    setIsOnShipping(false);
    setIsOnInformation(true);
  };

  const handleContinuePayment = () => {
    setIsOnShipping(false);
    setIsOnPayment(true);
  };

  const handleReturnShipping = () => {
    setIsOnPayment(false);
    setIsOnShipping(true);
  };

  const handlePayment = () => {
    setIsOrderConfirmed(true);
    setIsOnPayment(false);
    /*dont forget this*/
    
    if (paymentCleared === true) {
      setIsOrderConfirmed(true);
      setIsOnPayment(false);
    }
  };

  const newSubtotal = (prices["walker"] * walkerQuantity + prices["seat"] * seatQuantity);

  return (
    <div className={styles.mainContainer} style={{ justifyContent: entrance ? 'center' : 'space-between' }}>
      <div className={styles.topContainer}>
        <Image src="/logo.png" alt="Dakseon Logo" width={512} height={512} className={styles.logo} />
        <Image src="/Food_and_Drug_Administration_icon_2016.svg.png" alt="" width={480} height={720} className={styles.fda} />
        <Dropdown />
      </div>
      {entrance && (
        <div className={styles.cartContainer}>
          <div className={styles.cartContainer2}>
            {noItems && (
              <p className={styles.noItemsMsg}>There is nothing here. Add items to your cart to continue.</p>
            )}
            {(addedWalker || addedSeat) && (
              <>
                <div className={styles.flowContainer2}>
                  <p><strong>Cart</strong></p>
                  <Image src="/arrow-thin-chevron-right-icon.png" alt="" width={512} height={512} />
                  <p>Information</p>
                  <Image src="/arrow-thin-chevron-right-icon.png" alt="" width={512} height={512} />
                  <p>Shipping</p>
                  <Image src="/arrow-thin-chevron-right-icon.png" alt="" width={512} height={512} />
                  <p>Payment</p>
                </div>
                {addedWalker && (
                  <div className={styles.entranceItemContainer}>
                    <div className={styles.entranceHoriz}>
                      <Image src="/walkerWide.png" alt="" width={1600} height={902} className={styles.entranceImage} />
                      <div className={styles.entranceVer}>
                        <p className={styles.entranceItemBrand}>Dakseon</p>
                        <p className={styles.entranceName}>Walker</p>
                        <p className={styles.entranceItemSKU}>ABC123</p>
                      </div>
                      <div className={styles.entranceVer2}>
                        <p className={styles.entranceItemPrice}>$100.00</p>
                        <div className={styles.entranceHoriz2}>
                          <p>-</p>
                          <input
                            type="number"
                            min="0"
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
                  <div className={styles.entranceItemContainer2}>
                    <div className={styles.entranceHoriz}>
                      <Image src="/seatWide.png" alt="" width={1600} height={902} className={styles.entranceImage} />
                      <div className={styles.entranceVer}>
                        <p className={styles.entranceItemBrand}>Dakseon</p>
                        <p className={styles.entranceName}>Shower Seat</p>
                        <p className={styles.entranceTaglineDesc}></p>
                        <p className={styles.entranceItemSKU}>123ABC</p>
                        <p className={styles.entranceItemSpecs}></p>
                      </div>
                      <div className={styles.entranceVer2}>
                        <p className={styles.entranceItemPrice}>$50.00</p>
                        <div className={styles.entranceHoriz2}>
                          <p>-</p>
                          <input
                            type="number"
                            min="0"
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
                  <p className={styles.entranceTotalPrice}>{`$${subtotalPrice}`}</p>
                </div>
                <button className={styles.continueToInfo} onClick={handleContinue}>Continue</button>
              </>
            )}
          </div>
        </div>
      )}
      {isOnInformation && (
        <>
          <div className={styles.infoContainer}>
            <div className={styles.infoContainer2}>
              <div className={styles.flowContainer}>
                <p>Cart</p>
                <Image src="/arrow-thin-chevron-right-icon.png" alt="" width={512} height={512} />
                <p><strong>Information</strong></p>
                <Image src="/arrow-thin-chevron-right-icon.png" alt="" width={512} height={512} />
                <p>Shipping</p>
                <Image src="/arrow-thin-chevron-right-icon.png" alt="" width={512} height={512} />
                <p>Payment</p>
              </div>
              <fieldset className={styles.expressCheckoutContainer}>
                <legend>EXPRESS CHECKOUT</legend>
                <div className={styles.paypalContainer}>
                  <Image src="/download.svg" alt="" width={1200} height={400} className={styles.paypalExpress} />
                </div>
                <div className={styles.googleContainer}>
                  <Image src="/buy-buttons-black-small.png" alt="" width={1200} height={400} className={styles.googleExpress} />
                </div>
              </fieldset>
              <div className={styles.orContainer}>
                <p>OR</p>
              </div>
              <div className={styles.customerDetailsContainer}>
                <p className={styles.contactP}>Contact Information</p>
                <form className={styles.form1} onSubmit={handleContinueShipping}>
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
                      className={styles.halfInput}
                    />
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last name"
                      required
                      className={styles.halfInput}
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
                      className={styles.thirdInput}
                    />
                    <input
                      type="text"
                      value={stateOrProvince}
                      onChange={(e) => setStateOrProvince(e.target.value)}
                      placeholder="State/province"
                      className={styles.thirdInput}
                    />
                    <input
                      type="text"
                      value={postal}
                      onChange={(e) => setPostal(e.target.value)}
                      placeholder="Postal code"
                      required
                      className={styles.thirdInput}
                    />
                  </div>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone (optional)"
                    className={styles.fullInput}
                  />
                  <div className={styles.informationButtons}>
                    <div className={styles.returnContainer} onClick={handleReturnCart}>
                      <Image src="/arrow-thin-chevron-left-icon.png" alt="" width={512} height={512} />
                      <p>Return to cart</p>
                    </div>
                    <button type="submit" className={styles.continueToShipping}>Continue to shipping</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
      {isOnShipping && (
        <>
          <div className={styles.shippingContainer}>
            <div className={styles.shippingContainer2}>
              <div className={styles.flowContainer}>
                <p>Cart</p>
                <Image src="/arrow-thin-chevron-right-icon.png" alt="" width={512} height={512} />
                <p>Information</p>
                <Image src="/arrow-thin-chevron-right-icon.png" alt="" width={512} height={512} />
                <p><strong>Shipping</strong></p>
                <Image src="/arrow-thin-chevron-right-icon.png" alt="" width={512} height={512} />
                <p>Payment</p>
              </div>
              <div className={styles.shippingOptionsContainer}>
                <div className={styles.shippingOptions}>
                  <label>Standard</label>
                  <input
                    type="radio"
                    name="shipping"
                    defaultChecked
                  />
                </div>
                <div className={styles.shippingOptions}>
                  <label>Priority</label>
                  <input
                    type="radio"
                    name="shipping"
                  />
                </div>
                <div className={styles.shippingOptions}>
                  <label>Overnight</label>
                  <input
                    type="radio"
                    name="shipping"
                  />
                </div>
              </div>
              <div className={styles.shippingCarriersContainer}>
                <div className={styles.fedexContainer} onClick={handleFedex} style={{ backgroundColor: selectedCarrier === "fedex" ? "rgb(155, 248, 140)" : "inherit" }}>
                  <p className={styles.deliveryTime}>Est. Example Date</p>
                  <p className={styles.deliveryCost} style={{ color: selectedCarrier === "fedex" ? "black" : "inherit" }}>$100.00</p>
                  <Image src="/fedex-seeklogo.png" alt="" width={512} height={512} className={styles.fedexLogo} />
                </div>
                <div className={styles.upsContainer} onClick={handleUps} style={{ backgroundColor: selectedCarrier === "ups" ? "rgb(155, 248, 140)" : "inherit" }}>
                  <p className={styles.deliveryTime}>Est. Example Date</p>
                  <p className={styles.deliveryCost} style={{ color: selectedCarrier === "ups" ? "black" : "inherit" }}>$100.00</p>
                  <Image src="/United_Parcel_Service_logo_2014.svg" alt="" width={400} height={300} className={styles.upsLogo} />
                </div>
                <div className={styles.dhlContainer} onClick={handleDhl} style={{ backgroundColor: selectedCarrier === "dhl" ? "rgb(155, 248, 140)" : "inherit" }}>
                  <p className={styles.deliveryTime}>Est. Example Date</p>
                  <p className={styles.deliveryCost} style={{ color: selectedCarrier === "dhl" ? "black" : "inherit" }}>$100.00</p>
                  <Image src="/dhl-1.svg" alt="" width={512} height={512} />
                </div>
              </div>
              <p className={styles.estTime}>Your item will be shipped: example date</p>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Special delivery instructions (optional)"
                className={styles.notes}
              />
              <div className={styles.shippingButtons}>
                <div className={styles.returnContainer} onClick={handleReturnInformation}>
                  <Image src="/arrow-thin-chevron-left-icon.png" alt="" width={512} height={512} />
                  <p>Return to information</p>
                </div>
                <button className={styles.continueToPayment} onClick={handleContinuePayment}>Continue to payment</button>
              </div>
            </div>
          </div>
        </>
      )}
      {isOnPayment && (
        <>
          <div className={styles.paymentContainer}>
            <div className={styles.paymentContainer2}>
              <div className={styles.flowContainer}>
                <p>Cart</p>
                <Image src="/arrow-thin-chevron-right-icon.png" alt="" width={512} height={512} />
                <p>Information</p>
                <Image src="/arrow-thin-chevron-right-icon.png" alt="" width={512} height={512} />
                <p>Shipping</p>
                <Image src="/arrow-thin-chevron-right-icon.png" alt="" width={512} height={512} />
                <p><strong>Payment</strong></p>
              </div>
              <div className={styles.billingContainer}>
                <p className={styles.billingP}>Billing Information</p>
                <form onSubmit={handlePayment}>
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
                    <Image src="/bd_kortlogodk_64px_67c78d2da52b2.png" alt="" width={1200} height={300} />
                  </div>
                  <div className={styles.cardInfoContainer}>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      placeholder="Name on card"
                      className={styles.cardFullInput}
                      required
                    />
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="Card number"
                      className={styles.cardFullInput}
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
                  <div className={styles.paymentButtons}>
                    <div className={styles.returnContainer} onClick={handleReturnShipping}>
                      <Image src="/arrow-thin-chevron-left-icon.png" alt="" width={512} height={512} />
                      <p>Return to shipping</p>
                    </div>
                    <button type="submit" className={styles.orderButton}>Order</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
      {(addedWalker || addedSeat) && (isOnInformation || isOnShipping || isOnPayment) && (
        <div className={styles.itemsContainer}>
          <div className={styles.itemsContainer2}>
            {addedWalker && (
              <div className={styles.itemHoriz}>
                <Image src="/walkerWide.png" alt="" width={1600} height={902} className={styles.itemImage} />
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>Walker</p>
                </div>
                <div className={styles.itemInfo2}>
                  <p className={styles.afterItemPrice}>$100.00</p>
                  <p className={styles.afterItemQuantity}>Qty - {walkerQuantity}</p>
                </div>
              </div>
            )}
            {addedSeat && (
              <div className={styles.itemHoriz}>
                <Image src="/seatWide.png" alt="" width={1600} height={902} className={styles.itemImage} />
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>Shower Seat</p>
                </div>
                <div className={styles.itemInfo2}>
                  <p className={styles.afterItemPrice}>$50.00</p>
                  <p className={styles.afterItemQuantity}>Qty - {seatQuantity}</p>
                </div>
              </div>
            )}
            <div className={styles.priceContainer}>
              <div className={styles.seperatorLineA} />
              <div className={styles.afterSubAndShipCostContainer}>
                <div className={styles.paymentPriceHoriz}>
                  <p className={styles.afterPriceType}>Subtotal</p>
                  <p className={styles.afterSubtotalPrice}>${newSubtotal.toFixed(2)}</p>
                </div>
                <div className={styles.paymentPriceHoriz}>
                  <p className={styles.afterPriceType}>Shipping</p>
                  <p className={styles.afterShippingPrice}>Calculated next step</p>
                </div>
                <div className={styles.paymentPriceHoriz}>
                  <p className={styles.afterPriceType}>Sales Tax</p>
                  <p className={styles.afterTaxPrice}>${salesTaxPrice.toFixed(2)}</p>
                </div>
              </div>
              <div className={styles.seperatorLineA} />
              <div className={styles.afterTypeAndPriceContainer}>
                <div className={styles.paymentPriceHoriz}>
                  <p className={styles.afterPriceType}>Total</p>
                  <p className={styles.afterTotalPrice}>${totalPrice.toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div className={styles.promotions}>
              
            </div>
          </div>
        </div>
      )}
      {isOrderConfirmed && (
        <div className={styles.orderConfirmationContainer}>
          <div className={styles.orderConfirmationContainer2}>
            <div className={styles.orderConfirmedMsg}>
              <Image src="/success-green-check-mark-icon.png" alt="" width={512} height={512} />
              <h2>Thank you for your order!</h2>
              <p>Your order #{orderId} is confirmed. You will receive an e-mail at {bEmail} shortly.</p>
            </div>
            <table className={styles.orderInvoice}>
              <caption className={styles.caption}>Order Details</caption>
              <tr className={styles.orderHoriz1}>
                <td className={styles.first}><strong>Items</strong></td>
                <td className={styles.second}><strong>Qty.</strong></td>
                <td className={styles.third}><strong>Cost</strong></td>
                <td className={styles.fourth}><strong>SKU</strong></td>
                <td className={styles.fifth}></td>
                <td className={styles.sixth}><strong>Total</strong></td>
              </tr>
              <tr className={styles.orderHoriz}>
                <td className={styles.first}>Walker</td>
                <td className={styles.second}>{walkerQuantity}</td>
                <td className={styles.third}>$100.00</td>
                <td className={styles.fourth}>ABC123</td>
                <td className={styles.fifth}></td>
                <td className={styles.sixth}>${totalWalkerPrice.toFixed(2)}</td>
              </tr>
              {addedSeat && (
                <tr className={styles.orderHoriz}>
                <td className={styles.first}>Shower Seat</td>
                <td className={styles.second}>{seatQuantity}</td>
                <td className={styles.third}>$50.00</td>
                <td className={styles.fourth}>123ABC</td>
                <td className={styles.fifth}></td>
                <td className={styles.sixth}>${totalSeatPrice.toFixed(2)}</td>
              </tr>
              )}
              <tr className={styles.orderHoriz}>
                <td className={styles.first}></td>
                <td className={styles.second}></td>
                <td className={styles.third}></td>
                <td className={styles.fourth}></td>
                <td className={styles.fifth}>Subtotal</td>
                <td className={styles.sixth}>${subtotalPrice}</td>
              </tr>
              <tr className={styles.orderHoriz}>
                <td className={styles.first}></td>
                <td className={styles.second}></td>
                <td className={styles.third}></td>
                <td className={styles.fourth}></td>
                <td className={styles.fifth}>Shipping</td>
                <td className={styles.sixth}>${shippingPrice}</td>
              </tr>
              <tr className={styles.orderHoriz}>
                <td className={styles.first}></td>
                <td className={styles.second}></td>
                <td className={styles.third}></td>
                <td className={styles.fourth}></td>
                <td className={styles.fifth}>Sales Tax</td>
                <td className={styles.sixth}>${salesTaxPrice}</td>
              </tr>
              <tr className={styles.orderHoriz}>
                <td className={styles.first}></td>
                <td className={styles.second}></td>
                <td className={styles.third}></td>
                <td className={styles.fourth}></td>
                <td className={styles.fifth}></td>
                <td className={styles.sixth}>${totalPrice.toFixed(2)}</td>
              </tr>
            </table>
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
                  <Image src="/LI-In-Bug.png" width={512} height={512} alt="" />
                  <Image src="/Facebook_Logo_Primary.png" width={512} height={512} alt="" />
                </div>
              </div>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
