/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Header } from '../common/header';
import { Footer } from '../common/footer';

export const LayoutMain = ({ children }) => {
  return (
    <>
      <Header />
      <div css={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

const styles = {
  container: css`
    padding-top: 80px;
    min-height: calc(100vh - 100px);
  `,
};
