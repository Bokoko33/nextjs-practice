/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { css } from '@emotion/react';

export const ButtonLink = (props) => {
  return (
    <Link href={props.href} passHref>
      <a css={styles.button} {...props}>
        {/* スプレッド構文でpropsを渡すと親側で定義したスタイルを当てられる */}
        {props.text}
      </a>
    </Link>
  );
};

const styles = {
  button: css`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border: solid 2px var(--color-black);
  `,
};
