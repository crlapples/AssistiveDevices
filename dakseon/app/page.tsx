import React from "react";
import Link from "next/link";
import styles from "./Dakseon.module.css";
import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import CompanyIntro from "./CompanyIntro";
import Dropdown from "./Dropdown";
import LetterFromTopAnimation from "./LetterFromTopAnimation";
import BuyButton from "./BuyButton";

export const metadata: Metadata = {
  title: "Dakseon - Premium Walker & Shower Seat for Safety and Comfort",
  description:
    "Discover Dakseon's high-quality walker and bathroom seat designed for stability, safety, and comfort. Affordable pricing with reliable shipping.",
  keywords: ["walker", "wheeled walker", "foldable walker", "walking frame", "E0141", "E0143", "E0149", "durable medical equipment", "DME", "mobility aid"],
  openGraph: {
    title: "Mobility Walker & Shower Seat for Independent Living",
    description:
      "Dakseon offers a premium walker for enhanced mobility and a secure bathroom seat for added safety. Designed for comfort and durability.",
    url: "",
    type: "website",
    images: [
      {
        url: "",
        width: 1200,
        height: 600,
        alt: "Dakseon Mobility Walker",
      },
      {
        url: "",
        width: 1200,
        height: 600,
        alt: "Dakseon Shower Seat",
      },
    ],
  },
};

const Home: React.FC = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Dakseon",
            url: "https://yourwebsite.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://yourwebsite.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <CompanyIntro />
      <div className={styles.homeContainer}>
        <div className={styles.topContainer}>
          <Image src="/logo.png" alt="Dakseon Logo" width={512} height={512} className={styles.logo} />
          <Image src="/Food_and_Drug_Administration_icon_2016.svg.png" alt="" width={480} height={720} className={styles.fda} />
          <Dropdown />
        </div>
        <header className={styles.heroSection}>
          <div className={styles.heroVer}>
            <h1>Reliable Mobility & Safety Products</h1>
            <p className={styles.fifthP}>Experience a new level of independence and <span style={{ color: "#2f7ab6" }}>comfort</span> with our walker and shower seat. The walker provides <span style={{ color: "#2f7ab6" }}>stability</span> and freedom with every step, while the shower seat ensures a <span style={{ color: "#2f7ab6" }}>safe</span>, relaxing experience during your daily routine.</p>
            <p className={styles.sixthP}><span style={{ color: "#2f7ab6" }}>Move with confidence</span> and enjoy comfort wherever you go with Dakseon.</p>
            <div className={styles.buttonContainer}>
              <BuyButton sessionKey1="walkerYes" sessionKey2="seatYes" link="/Orders" linkClassName={styles.link} buttonClassName={styles.shopButton} />
            </div>
          </div>
          <div className={styles.imageContainer5}>
            <Image
              src="/image_fx_.jpg"
              alt="First happy senior enjoying mobility support"
              width={1600}
              height={902}
              className={styles.heroImage5}
            />
          </div>
        </header>
        <p className={styles.newP}>
          Enhance your independence and safety with Dakseon’s top-quality
          walker and shower seat.
        </p>
        <div className={styles.imageContainer1}>
          <Image
            src="/image_fx_ (9).jpg"
            alt="First happy senior enjoying mobility support"
            width={1600}
            height={902}
            className={styles.heroImage1}
          />
        </div>
        <section className={styles.whyChooseUs}>
          <h2 className={styles.tagline1}>Freedom to Move, Peace of Mind to Live.</h2>
          <LetterFromTopAnimation className={styles.letters1} text="At Dakseon, we are dedicated to enhancing mobility and safety for individuals who value independence. We offer premium-quality walkers and shower seats designed for comfort, stability, and ease of use. Our mission is to provide affordable, reliable solutions that empower our customers to live with greater confidence and security, every day." />
          <div className={styles.imageContainer2}>
            <Image
              src="/image_fx_ (7).jpg"
              alt="Second happy senior enjoying mobility support"
              width={1600}
              height={902}
              className={styles.heroImage2}
            />
          </div>
          <div className={styles.pointsRow}>
            <div className={styles.pointsRow2}>
              <h2>Make the Smart Choice with Dakseon</h2>
              <ul>
               <li>100% Satisfaction Guarantee</li>
               <li>Minimal Expenses</li>
               <li>Designed for Comfort & Safety</li>
              </ul>
            </div>
            <Image src="/image_fx_ (37).jpg" alt="" width={1600} height={900} />
          </div>
        </section>
        <section className={styles.featuredProducts}>
          <div className={styles.horizOriA}>
            <h2>Our Bestsellers</h2>
            <Image src="/curved-arrow-right-to-bottom-outline-icon.png" width={512} height={512} alt="" className={styles.arrowIcon} />
          </div>
          <div className={styles.productCard}>
            <Link href="/Products/Walker"><Image src="/walkerWide.png" width={902} height={1600} alt="Dakseon Mobility Walker" />
            <h3>Dakseon Mobility Walker</h3>
            <p>Lightweight, foldable support for everyday mobility.</p></Link>
            <Link href="/Products/Walker"><button>View Product</button></Link>
            <div className={styles.seperatorLineA} />
          </div>
          <div className={styles.productCard}>
            <Link href="/Products/Shower-Seat"><Image src="/seatWide.png" width={902} height={1600} alt="Dakseon Shower Safety Seat" />
            <h3>Dakseon Shower Safety Seat</h3>
            <p>Secure and comfortable shower seating for added safety.</p></Link>
            <Link href="/Products/Shower-Seat"><button>View Product</button></Link>
            <div className={styles.seperatorLineA} />
          </div>
        </section>
        <h2 className={styles.tagline2}>Affordable Solutions, Reliable Quality, Seamless Growth.</h2>
        <LetterFromTopAnimation
          className={styles.letters2}
          text="Dakseon furthermore provides wholesale pricing on walkers and shower seats, offering businesses cost-effective solutions with reliable shipping and consistent product quality to support growth and meet customer demand."
        />
        <section className={styles.testimonials}>
          <h2>What Our Customers Say</h2>
          <div className={styles.reviews}>
            <div className={styles.review}>
              <p>
                ⭐⭐⭐⭐⭐ Amazing quality, my dad loves the walker! - <strong>Sarah K.</strong>
              </p>
            </div>
            <div className={styles.review}>
              <p>
                ⭐⭐⭐⭐⭐ The shower seat is stable and comfortable. - <strong>James L.</strong>
              </p>
            </div>
          </div>
        </section>
        <section className={styles.ctaSection}>
          <h2>Ready to Improve Your Mobility & Safety?</h2>
          <BuyButton sessionKey1="walkerYes" sessionKey2="seatYes" link="/Orders" linkClassName={styles.link} buttonClassName={styles.shopButton} />
        </section>
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
            <div className={styles.attributions}>
              <a href="https://www.flaticon.com/free-icons/invalid" title="invalid icons">Invalid icons created by Freepik - Flaticon</a>
              <a href="https://www.flaticon.com/free-icons/invalid" title="invalid icons">Invalid icons created by edt.im - Flaticon</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
