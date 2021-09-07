/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useRef } from 'react';
import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  const sliderItems = [
    { title: 'street', src: '/images/image01.jpg' },
    { title: 'shade', src: '/images/image02.jpg' },
    { title: 'station', src: '/images/image03.jpg' },
    { title: 'car', src: '/images/image04.jpg' },
  ];

  return (
    <div css={stylesSlider.wrapper}>
      <div ref={sliderRef} css={stylesSlider.container}>
        {sliderItems.map(({ title, src }, index) => (
          <div
            css={stylesSlider.item}
            className="keen-slider__slide"
            key={index}
          >
            <div css={stylesSlider.image}>
              <Image src={src} layout={'fill'} alt="ギャラリー画像" />
            </div>
          </div>
        ))}
      </div>
      <p css={stylesSlider.title}>{sliderItems[currentSlide].title}</p>

      {/* 条件付きrender。sliderがあればレンダリング */}
      {slider && (
        <>
          {/* 基本的にイベント登録はonXXX？ */}
          <ArrowLeft
            onClick={(e) => e.stopPropagation() || slider.prev()}
            // disabled={currentSlide === 0}
          />
          <ArrowRight
            onClick={(e) => e.stopPropagation() || slider.next()}
            // disabled={currentSlide === slider.details().size - 1}
          />
        </>
      )}
    </div>
  );
};

const stylesSlider = {
  wrapper: css`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 60px;
  `,
  container: css`
    width: 100%;
    display: flex;
    overflow: hidden;
  `,
  item: css`
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 60%;
    margin-top: 60px;
    background-color: var(--color-black);
  `,
  image: css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  `,
  title: css`
    display: block;
    font-size: 24px;
    margin-top: 40px;
    text-align: center;
  `,
  button: css`
    position: absolute;
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    top: 0;
  `,
  icon: css`
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
  `,
};

const ArrowLeft = (props) => {
  const styles = {
    button: css`
      ${stylesSlider.button}
      border-right: solid 1px var(--color-black);
      left: 0;
    `,
    icon: css`
      ${stylesSlider.icon}
      border-left: solid 2px var(--color-black);
      border-bottom: solid 2px var(--color-black);
    `,
  };
  return (
    <button onClick={props.onClick} css={styles.button}>
      <span css={styles.icon}></span>
    </button>
  );
};

const ArrowRight = (props) => {
  const styles = {
    button: css`
      ${stylesSlider.button}
      border-left: solid 1px var(--color-black);
      right: 0;
    `,
    icon: css`
      ${stylesSlider.icon}
      border-top: solid 2px var(--color-black);
      border-right: solid 2px var(--color-black);
    `,
  };
  return (
    <button onClick={props.onClick} css={styles.button}>
      <span css={styles.icon}></span>
    </button>
  );
};
