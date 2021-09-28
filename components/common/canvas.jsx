/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { mainGL } from '../../lib/webgl/mainGL';

export const Canvas = () => {
  const router = useRouter();
  const canvasWrapperEl = useRef(null);

  const webgl = useRef(null); // それぞれのuseEffectで参照したいのでuseRefにする

  useEffect(() => {
    webgl.current = new mainGL({
      wrapperEl: canvasWrapperEl.current,
      canvasEl: canvasWrapperEl.current.children[0],
    });

    const loop = () => {
      webgl.current.loop();
      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  useEffect(() => {
    if (router.pathname === '/gallery') {
      const htmlEl = document.documentElement;
      const scrollAreaEl = document.querySelector('.js-scroll-area');
      const imgElArray = [...document.querySelectorAll('.js-img')];
      webgl.current.initGalleryGL(htmlEl, scrollAreaEl, imgElArray);
    }

    return () => {
      if (router.pathname === '/gallery') {
        webgl.current.galleryGL = null;
      }
    };
  }, [router]);

  return (
    <div css={styles.canvasWrapper} ref={canvasWrapperEl}>
      <canvas css={styles.canvas}></canvas>
    </div>
  );
};

const styles = {
  canvasWrapper: css`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
  `,
  canvas: css`
    width: 100%;
    height: 100%;
  `,
};
