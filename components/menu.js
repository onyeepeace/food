import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import menuStyles from "../styles/Menu.module.css";
gsap.registerPlugin(ScrollTrigger);

export default function Menu() {
  const downRefs = useRef([]);
  downRefs.current = [];
  useEffect(() => {
    downRefs.current.forEach((down) => {
      gsap.from(down, {
        duration: 3,
        y: "100",
        opacity: 1,
        ease: "ease-in",
        scrollTrigger: {
          trigger: down,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "restart complete reverse reset",
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      });
    });
  }, []);

  const upRefs = useRef([]);
  upRefs.current = [];
  useEffect(() => {
    upRefs.current.forEach((up) => {
      gsap.from(up, {
        duration: 3,
        y: "100",
        opacity: 0,
        ease: "ease-in",
        scrollTrigger: {
          trigger: up,
          start: "top -90%",
          end: "bottom -60%",
          toggleActions: "restart complete reverse reset",
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      });
    });
  }, []);

  const addToDownRefs = (down) => {
    if (down && !downRefs.current.includes(down)) {
      downRefs.current.push(down);
    }
  };

  const addToUpRefs = (up) => {
    if (up && !upRefs.current.includes(up)) {
      upRefs.current.push(up);
    }
  };

  return (
    <div className={menuStyles.container}>
      <main className={menuStyles.main}>
        <div className={menuStyles.menuHeading}>
          <h1 className={menuStyles.heading}>OUR MENU</h1>
          <button className={menuStyles.button}>KNOW MORE</button>
        </div>
        <div className={menuStyles.menu}>
          <div className={`${menuStyles.menuOption} ${menuStyles.starters}`}>
            <div className="" ref={addToDownRefs}>
              <h1>STARTERS</h1>
              <div className={menuStyles.menuItem}>
                <div className={menuStyles.meals}>
                  <h4>QUINOA CROQUETTAS</h4>
                  <p>
                    Quinoa and cheddar croquettas with aji rocotto & pineapple
                    salsa (v)
                  </p>
                  <button>£4.95</button>
                </div>

                <div className={menuStyles.meals}>
                  <h4>CHIFA CHICHARRONES</h4>
                  <p>Slow cooked, crispy pork belly with sweet soy sauce</p>
                  <button>£6.95</button>
                </div>

                <div className={menuStyles.meals}>
                  <h4>CALAMARES</h4>
                  <p>Crispy baby squid with pickled jalapeño miso salsa</p>
                  <button>£6.95</button>
                </div>
              </div>
            </div>
          </div>

          <hr className={menuStyles.divide} />

          <div className={`${menuStyles.menuOption} ${menuStyles.mainCourse}`}>
            {/* <div className=""> */}
            <h1>MAIN </h1> <h1>COURSES</h1>
            <div className={menuStyles.menuItem}>
              <div className={menuStyles.meals}>
                <h4>EL CLASICO</h4>
                <p>
                  Sea bass ceviche with aji limo tiger’s milk, sweet potato
                  purée, choclo corn, red onion, coriander & plantain (gf)
                </p>
                <button>£8.95</button>
              </div>

              <div className={menuStyles.meals}>
                <h4>TIRADITO CALLAO</h4>
                <p>
                  Cobia tiradito with coriander tiger’s milk, black tobika,
                  crème fraiche & sweet potato crunchies
                </p>
                <button>£6.95</button>
              </div>
            </div>
            {/* </div> */}
          </div>

          <hr className={menuStyles.divide} />

          <div className={`${menuStyles.menuOption} ${menuStyles.sides}`}>
            <div className="" ref={addToDownRefs}>
              <h1>SIDES</h1>
              <div className={menuStyles.menuItem}>
                <div className={menuStyles.meals}>
                  <h4>SUPER POLLO</h4>
                  <p>Marinated corn fed chicken pieces with rocotto salsa</p>
                  <button>£4.95</button>
                </div>

                <div className={menuStyles.meals}>
                  <h4>PATATAS FRITAS</h4>
                  <p>Sweet potato fries with aji rocotto mayonnaise (v) </p>
                  <button>£3.95</button>
                </div>
              </div>
            </div>
          </div>

          <hr className={menuStyles.divide} />

          <div className={`${menuStyles.menuOption} ${menuStyles.desserts}`}>
            <div className="" ref={addToUpRefs}>
              <h1>DESSERTS</h1>
              <div className={menuStyles.menuItem}>
                <div className={menuStyles.meals}>
                  <h4>ICECREAM</h4>
                  <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
                  <button>£3.95</button>
                </div>

                <div className={menuStyles.meals}>
                  <h4>TIRAMISU</h4>
                  <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
                  <button>£3.95</button>
                </div>

                <div className={menuStyles.meals}>
                  <h4>CHOCOLATE BROWNIE</h4>
                  <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
                  <button>£3.95</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
