import Image from "next/image";
import heroStyles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={heroStyles.container}>
      <main className={heroStyles.main}>
        <div className={heroStyles.hero}>
          <div className={heroStyles.nav}>
            <div className={heroStyles.leftNav}>
              <h1>LOGO</h1>
              <ul>
                <li>ABOUT</li>
                <li>COMMUNITY</li>
                <li>LOCATION</li>
                <li>OUR MENU</li>
                <li>RECIPES</li>
              </ul>
            </div>
            <ul>
              <li>CONTACT</li>
              <li>LOGIN</li>
            </ul>
          </div>
          <img className={heroStyles.logo} src="/images/stamp.svg" alt="logo" />
          <h4 className={heroStyles.request}>REQUEST INFO</h4>
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
