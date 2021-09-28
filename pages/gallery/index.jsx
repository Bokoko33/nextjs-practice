/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

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

  useEffect(() => {
    const bodyEl = document.body;

    // 両端を過不足ないようにするためのスクロール領域計算
    const calcBodyHeight = (containerWidth, windowWidth, windowHeight) => {
      return windowHeight + containerWidth - windowWidth;
    };

    const setBodyHeight = () => {
      const virtualHeight = calcBodyHeight(
        scrollAreaEl.current.clientWidth,
        window.innerWidth,
        window.innerHeight
      );
      bodyEl.style.height = `${virtualHeight}px`;
    };

    let timeoutId = 0;
    const resize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(setBodyHeight, 200);
    };

    window.addEventListener('resize', resize);
    setBodyHeight();

    return () => {
      // useEffectのreturn内の処理が、コンポーネントのunMount直前に呼ばれる
      window.removeEventListener('resize', resize);

      // bodyの高さをリセット
      bodyEl.style.height = 'auto';
    };
  }, []);

  return (
    <div css={styles.fixed}>
      <div
        ref={scrollAreaEl}
        css={styles.scrollable}
        className="js-scroll-area"
      >
        <ul css={styles.list}>
          {images.map(({ title, src }, index) => (
            <li css={styles.item} key={index}>
              <Image
                src={src}
                layout={'fill'}
                objectFit={'cover'}
                alt={title}
                className={'js-img'}
                data-img={src}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
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
    /* opacity: 0; */
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
