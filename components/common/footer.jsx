/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const Footer = () => {
  return (
    <footer css={styles.footer}>
      <p css={styles.copyright}>&copy; 2021 boko</p>
    </footer>
  );
};

const styles = {
  footer: css`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: solid 1px var(--color-black);
    border-bottom: solid 1px var(--color-black);
  `,
  copyright: css`
    font-size: 12px;
  `,
};
