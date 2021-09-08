/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { heading2 } from '../../styles/common/commonStyles';

export default function About() {
  return (
    <div css={styles.inner}>
      <h1 css={styles.title}>About this Site</h1>
      <p css={styles.text}>
        このサイトはNext.jsをなんとかして使えるようになりたい僕の練習用サイトです。
      </p>
    </div>
  );
}

const styles = {
  inner: css`
    width: 90%;
    margin: 0 auto;
    padding-top: 60px;
  `,
  title: css`
    font-size: 48px;
    text-align: center;
  `,
  text: css`
    text-align: center;
    margin-top: 40px;
  `,
};
