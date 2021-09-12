/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

export const Footer = () => {
  const router = useRouter();

  return (
    <footer
      css={
        router.pathname === '/gallery'
          ? styles.fixedFooter
          : styles.defaultFooter
      }
    >
      <p css={styles.copyright}>&copy; 2021 boko</p>
    </footer>
  );
};

const footerBaseStyle = css`
  width: 100%;
  height: var(--height-footer-pc);
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid 1px var(--color-black);
  border-bottom: solid 1px var(--color-black);
`;

const styles = {
  defaultFooter: css`
    ${footerBaseStyle}
  `,
  fixedFooter: css`
    position: fixed;
    bottom: 0;
    left: 0;
    ${footerBaseStyle}
  `,
  copyright: css`
    font-size: 12px;
  `,
};
