/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const SectionBlockLarge = ({ children }) => {
  return (
    <div css={styles.block}>
      <div css={styles.inner}>{children}</div>
    </div>
  );
};

const styles = {
  block: css`
    width: 70%;
    padding: 40px 2%;
  `,
  inner: css`
    width: 100%;
  `,
};
