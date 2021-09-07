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
    height: 100%;
  `,
  inner: css`
    width: 100%;
    height: 100%;
  `,
};
