/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useRef } from 'react';
import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

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
    { title: 'image01', src: '' },
    { title: 'image02', src: '' },
    { title: 'image03', src: '' },
    { title: 'image04', src: '' },
  ];

  return (
    <div css={stylesSlider.wrapper}>
      <div ref={sliderRef} css={stylesSlider.container}>
        {sliderItems.map(({ title, src }, index) => (
          <div
            css={stylesSlider.item}
            className={`keen-slider__slide number-slide${index + 1}`}
            key={index}
          >
            {title}
          </div>
        ))}
      </div>

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
    height: 100%;
    display: flex;
    overflow: hidden;
  `,
  item: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
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
