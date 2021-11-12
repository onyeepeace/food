/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import comStyles from "../styles/Com.module.css";
gsap.registerPlugin(ScrollTrigger);

export default function Community() {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  useEffect(() => {
    revealRefs.current.forEach((el) => {
      gsap.from(el, {
        duration: 3,
        y: "100",
        opacity: 1,
        ease: "ease-in",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 60%",
        },
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className={comStyles.container}>
      <main className={comStyles.main}>
        <div className={comStyles.gridContainer}>
          <div className={comStyles.info}>
            <h1 className={comStyles.heading}>
              MEET OUR <span>COMMUNITY</span>
            </h1>
            <button className={comStyles.button}>KNOW MORE</button>
            <h4>
              LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN
              TORNA ENTALTO
            </h4>
          </div>
          <div
            className={`${comStyles.feed} ${comStyles.firstFeed}`}
            ref={addToRefs}
          >
            <div className={comStyles.mobileFeedImage}>
              <img
                className={comStyles.plus}
                src="/images/plus.png"
                alt="plus"
              />
              <img
                className={comStyles.instagram}
                src="/images/instagram-btn.svg"
                alt="instagram button"
              />
              <Image
                src="/images/tacos.png"
                alt="tacos"
                width="280"
                height="280"
                layout="intrinsic"
              />
            </div>
            <div className={comStyles.desktopFeedImage}>
              <img
                className={comStyles.plus}
                src="/images/plus.png"
                alt="plus"
              />
              <img
                className={comStyles.instagram}
                src="/images/instagram-btn.svg"
                alt="instagram button"
              />
              <Image
                src="/images/tacos.png"
                alt="tacos"
                width="230"
                height="230"
                layout="intrinsic"
              />
            </div>
            <div className={comStyles.text}>
              <img
                className={comStyles.line}
                src="/images/line.png"
                alt="line"
              />
              <h4>@buzzfeedfood</h4>
              <p>
                It’s taco Tuesday! These tacos from @jesseszewczyk have no added
                sugars and are SO good 🌮. Find the recipe from the link in our
                bio! 📸: @taylormillerphoto
              </p>
              <div className={comStyles.reaction}>
                <div className={comStyles.comment}>
                  <img src="/images/comment.svg" alt="" />
                  <p>60</p>
                </div>
                <div className={comStyles.likes}>
                  <img src="/images/likes.svg" alt="" />
                  <p>14.7K</p>
                </div>
              </div>
            </div>
          </div>

          <div className={comStyles.feed} ref={addToRefs}>
            <div className={comStyles.text}>
              <img
                className={comStyles.period}
                src="/images/period.png"
                alt="plus"
              />
              <h4>@love_food</h4>
              <p>
                Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles,
                dark chocolate with coconut and milk chocolate with peanuts!
                [📷: @foodwithmichel] #lovefood
              </p>
              <div className={comStyles.reaction}>
                <div className={comStyles.comment}>
                  <img src="/images/comment.svg" alt="" />
                  <p>789</p>
                </div>
                <div className={comStyles.likes}>
                  <img src="/images/likes.svg" alt="" />
                  <p>99.7K</p>
                </div>
              </div>
            </div>

            <div className={comStyles.mobileFeedImage}>
              <img
                className={comStyles.instagram}
                src="/images/instagram-btn.svg"
                alt="instagram button"
              />
              <Image
                src="/images/waffle.png"
                alt="waffle"
                width="280"
                height="280"
                layout="intrinsic"
              />
            </div>

            <div className={comStyles.desktopFeedImage}>
              <img
                className={comStyles.instagram}
                src="/images/instagram-btn.svg"
                alt="instagram button"
              />
              <Image
                src="/images/waffle.png"
                alt="waffle"
                width="230"
                height="230"
                layout="intrinsic"
              />
            </div>
          </div>

          <div className=""></div>
          <div className=""></div>

          <div className={comStyles.feed} ref={addToRefs}>
            <div className={comStyles.mobileFeedImage}>
              <img
                className={comStyles.instagram}
                src="/images/instagram-btn.svg"
                alt="instagram button"
              />
              <Image
                src="/images/rice.png"
                alt="rice"
                width="280"
                height="280"
                layout="intrinsic"
              />
            </div>

            <div className={comStyles.desktopFeedImage}>
              <img
                className={comStyles.instagram}
                src="/images/instagram-btn.svg"
                alt="instagram button"
              />
              <Image
                src="/images/rice.png"
                alt="rice"
                width="230"
                height="230"
                layout="intrinsic"
              />
            </div>

            <div className={comStyles.text}>
              <h4>@buzzfeedfood</h4>
              <p>
                Getting into long weekend mode like 🍤 #pancitpalabok (📷
                @jeepneynyc)
              </p>
              <div className={comStyles.reaction}>
                <div className={comStyles.comment}>
                  <img src="/images/comment.svg" alt="" />
                  <p>152</p>
                </div>
                <div className={comStyles.likes}>
                  <img src="/images/likes.svg" alt="" />
                  <p>18.2K</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
