/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Nav from "./nav";
import styles from "../styles/Home.module.css";
import heroStyles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={heroStyles.container}>
      <main className={heroStyles.main}>
        <div className={heroStyles.hero}>
          <div className={heroStyles.nav}>
            <h1>LOGO</h1>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
          </div>
          <div className={heroStyles.imgDiv}>
            <Image
              src={"/images/hero.png"}
              alt={"fruit"}
              width={1000}
              height={1000}
              layout="intrinsic"
            />
            <div className={heroStyles.catchphrase}>
              <h1>
                THE BEST FOODIE <br /> <span>EXPERIENCE</span>
              </h1>
              <h3>NOW IN LONDON</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
