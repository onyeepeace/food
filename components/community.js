/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import comStyles from "../styles/Com.module.css";

export default function Community() {
  return (
    <div className={comStyles.container}>
      <main className={comStyles.main}>
        <h1>
          MEET OUR <span>COMMUNITY</span>
        </h1>
        <button>KNOW MORE</button>
        <h4>
          LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA
          ENTALTO
        </h4>
        <div className={comStyles.tacos}>
          <div className={comStyles.tacosImage}>
            <Image
              src="/images/tacos.png"
              alt="tacos"
              width="322"
              height="321"
              layout="intrinsic"
            />
          </div>
          <div className={comStyles.text}>
            <h4>@buzzfeedfood</h4>
            <p>
              It’s taco Tuesday! These tacos from @jesseszewczyk have no added
              sugars and are SO good 🌮. Find the recipe from the link in our
              bio! 📸: @taylormillerphoto
            </p>
            <div className={comStyles.reaction}>
              <div className={comStyles.comment}>
                <img src="/images/reaction/Path80.svg" alt="" />
                <p>60</p>
              </div>
              <div className={comStyles.likes}>
                <img src="/images/reaction/Group126.svg" alt="" />
                <p>14.7K</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
