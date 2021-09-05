/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const SectionBlockSmall = ({ children }) => {
  return (
    <div css={styles.block}>
      <div css={styles.inner}>{children}</div>
    </div>
  );
};

const styles = {
  block: css`
    width: 30%;
    padding: 40px 2%;
  `,
  inner: css`
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  `,
};
