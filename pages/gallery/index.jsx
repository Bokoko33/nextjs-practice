/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

// 開始と終了をなめらかに補間する関数
const lerp = (start, end, multiplier) => {
  return (1 - multiplier) * start + multiplier * end;
};

// 両端を過不足ないようにするためのスクロール領域計算
const calcBodyHeight = (containerWidth, windowWidth, windowHeight) => {
  return windowHeight + containerWidth - windowWidth;
};

export default function Gallery() {
  const images = [
    { title: 'street', src: '/images/image01.jpg' },
    { title: 'shade', src: '/images/image02.jpg' },
    { title: 'station', src: '/images/image03.jpg' },
    { title: 'car', src: '/images/image04.jpg' },
    { title: 'street', src: '/images/image01.jpg' },
    { title: 'shade', src: '/images/image02.jpg' },
    { title: 'station', src: '/images/image03.jpg' },
    { title: 'car', src: '/images/image04.jpg' },
  ];

  const scrollAreaEl = useRef(null);
  const requestAnimationRef = useRef(null);

  useEffect(() => {
    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    // ページアクセス時にぐい〜んってならないようにuseEffect内で初期化したい
    let currentScrollY = 0;
    // let scrollValue = 0;

    const setBodyHeight = () => {
      const virtualHeight = calcBodyHeight(
        scrollAreaEl.current.clientWidth,
        window.innerWidth,
        window.innerHeight
      );
      bodyEl.style.height = `${virtualHeight}px`;
    };

    const loop = () => {
      // スクロール位置を更新
      currentScrollY = lerp(currentScrollY, htmlEl.scrollTop, 0.1);
      // scrollValue = htmlEl.scrollTop - currentScrollY;

      if (scrollAreaEl.current) {
        scrollAreaEl.current.style.transform = `translate3d(${-currentScrollY}px,0,0)`;
      }
      requestAnimationRef.current = window.requestAnimationFrame(loop);
    };

    window.addEventListener('resize', setBodyHeight);
    setBodyHeight();
    loop();

    return () => {
      // useEffectのreturn内の処理が、コンポーネントのunMount直前に呼ばれる
      window.removeEventListener('resize', setBodyHeight);
      window.cancelAnimationFrame(requestAnimationRef.current);

      // bodyの高さをリセット
      bodyEl.style.height = 'auto';
    };
  }, []);

  return (
    <div css={styles.fixed}>
      <div css={styles.scrollable} ref={scrollAreaEl}>
        <ul css={styles.list}>
          {images.map(({ title, src }, index) => (
            <li css={styles.item} key={index}>
              <Image
                src={src}
                layout={'fill'}
                objectFit={'cover'}
                alt={title}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: css`
    position: relative;
    width: 100%;
  `,
  fixed: css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  `,
  scrollable: css`
    position: absolute;
    height: 100%;
    padding: var(--height-header-pc) 120px var(--height-footer-pc);
    top: 0;
    left: 0;
  `,
  list: css`
    height: 100%;
    display: flex;
    align-items: center;
  `,
  item: css`
    position: relative;
    width: 500px;
    height: 320px;
    &:not(:first-of-type) {
      margin-left: 120px;
    }

    &:nth-of-type(2n) {
      margin-top: -20vh;
    }

    &:nth-of-type(2n + 1) {
      margin-top: 20vh;
    }
  `,
};
