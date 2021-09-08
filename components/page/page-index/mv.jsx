/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { vw } from '../../../styles/00_setting/function';

export const MV = () => {
  return (
    <div css={styles.mv}>
      <div css={styles.inner}>
        <p css={styles.mainCopy}>Boko practices NextJS</p>
        <p css={styles.subCopy}>
          He wants to make friends with the awesome JS framework
        </p>
      </div>
    </div>
  );
};

const styles = {
  mv: css`
    width: 100%;
    height: calc(100vh - var(--height-header-pc));
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  inner: css`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  mainCopy: css`
    font-size: ${vw(48)};
    font-weight: bold;
  `,
  subCopy: css`
    font-size: ${vw(19)};
    margin-top: 2.5vh;
    margin-left: 3px;
  `,
};
