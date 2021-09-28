/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Header } from '../common/header';
import { Footer } from '../common/footer';
import { Canvas } from '../common/canvas';

export const LayoutMain = ({ children }) => {
  return (
    <>
      <Header />
      <Canvas />
      <div css={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

const styles = {
  container: css`
    padding-top: var(--height-header-pc);
    min-height: calc(100vh - var(--height-footer-pc));
  `,
};
