import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import data from "./data";

function Home() {
  const [slides, setSlides] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = slides.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slides]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    
    <>
      <div className='home'>
      <div className="section-center">
        {slides.map((slide, slideIndex) => {
          const { id, image, name } = slide;

          let position = 'nextSlide';
          if (slideIndex === index) {
            position = 'activeSlide';
          }
          if (
            slideIndex === index - 1 ||
            (index === 0 && slideIndex === slides.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="slide-img" />
              <h4>{name}</h4>
            </article>
          );
        })}
       
      </div>

      {/* <img src="../public/gazelle-zootopia-gif-4.gif" /> */}
     
    </div>
      <br />
      <div className='home__row'>
        <Product
          image='https://www.ekwb.com/shop/media/catalog/product/cache/1/image/x800/17f82f742ffe127f42dca9de82fb58b1/e/k/ek-velocity_strike_rgb_black-nickel_black_front_rgb.png'
          title='EK-Quantum Magnitude D-RGB-20xx Nickel-Plexi'
          price={144.39}
          stock={1} />
        <Product
          image='https://www.ekwb.com/shop/media/catalog/product/cache/1/thumbnail/1600x1067/17f82f742ffe127f42dca9de82fb58b1/e/k/ek-quantum_magnitude_d-rgb-am4_nickel_plexi_front_1_bestseller_large.png'
          title='EK-Quantum Magnitude D-RGB - AM4 Nickel + Plex'
          price={236.73}
          stock={1} />
        <Product
          image='https://www.ekwb.com/shop/media/catalog/product/cache/1/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/3/8/3831109826140_ek-quantum_reflection_pc-o11d_d5_pwm_d-rgb_-_plexi_1.jpeg'
          title='EK-Quantum Reflection PC-O11D D5 PWM D-RGB - Plex'
          price={343.34}
          stock={1} />

        <Product
          image='https://www.ekwb.com/shop/media/catalog/product/cache/1/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/e/k/ek-velocity_strike_rgb_matte_black_silver_front.png'
          title='EK-Quantum Velocity Strike D-RGB - Matte Black + Silver'
          price={143.42}
          stock={1} />
        <Product
          image='https://www.ekwb.com/shop/media/catalog/product/cache/1/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/e/k/ek-velocity_strike_rgb_black-nickel_black_front_rgb.png'
          title='EK-Quantum Velocity Strike D-RGB - Black Nickel + Black'
          price={143.42}
          stock={1} />
      </div><br /><div className='home__row'>
        <Product
          image='https://www.ekwb.com/shop/media/catalog/product/cache/1/small_image/195x/9df78eab33525d08d6e5fb8d27136e95/e/k/ek-loop_torque_screwdriver-0.6nm_stand.jpeg'
          title='EK-Loop Torque Screwdriver - 0.6Nm'
          price={21.44}
          stock={1} />

        <Product
          image='https://www.ekwb.com/shop/media/catalog/product/cache/1/small_image/195x/9df78eab33525d08d6e5fb8d27136e95/e/k/ek-quantum_vector_rx_6700_d-rgb-nickel_plexi_top_logo.jpeg'
          title='EK-Quantum Vector RX 6700XT D-RGB - Nickel + Plex'
          price={172.12}
          stock={1} />
        <Product
          image='https://www.ekwb.com/shop/media/catalog/product/cache/1/small_image/195x/9df78eab33525d08d6e5fb8d27136e95/e/k/ek_quantum_vector_rx_6700_d-rgb_backplate_nickel_front.jpeg'
          title='EK-Quantum Vector RX 6700XT Backplate - Nickel'
          price={48.09}
          stock={1} />
        <Product
          image='https://www.ekwb.com/shop/media/catalog/product/cache/1/small_image/195x/9df78eab33525d08d6e5fb8d27136e95/e/k/ek-quantum_msi_mpg_z690_carbon_ek_x_mb_1.jpeg'
          title='EK-Quantum MSI MPG Z690 CARBON EK X D-RGB'
          price={716.62}
          stock={1} />
        <Product
          image='https://www.ekwb.com/shop/media/catalog/product/cache/1/small_image/195x/9df78eab33525d08d6e5fb8d27136e95/e/k/ek-quantum_velocity__d-rgb-1700_nickel_acetal_front_logo.jpeg'
          title='EK-Quantum Velocity² D-RGB - 1700 Nickel + Acetal'
          price={122.93}
          stock={1} />
      </div></>
    
  );
}

export default Home;
