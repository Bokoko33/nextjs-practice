/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { heading2 } from '../../../styles/common/commonStyles';
import { sectionBody, button } from '../../../styles/common/commonStyles';

import Link from 'next/link';
import { SectionBlockLarge } from '../../layouts/sectionBlockLarge';
import { SectionBlockSmall } from '../../layouts/sectionBlockSmall';
import { ButtonLink } from '../../common/buttonLink';

export const SectionAbout = () => {
  return (
    <section>
      <h1 css={styles.heading}>About</h1>
      <div css={styles.body}>
        <SectionBlockSmall>
          <p css={styles.desc}>Aboutセクションの説明</p>
          <ButtonLink css={styles.button} href="/about" text="view more" />
        </SectionBlockSmall>
        <div css={styles.border}></div>
        <SectionBlockLarge>
          <p>Visual</p>
        </SectionBlockLarge>
      </div>
    </section>
  );
};

const styles = {
  heading: css`
    ${heading2}
    justify-content: flex-end;
  `,
  body: css`
    ${sectionBody} // これで共通スタイルとかを引き継げる
    display: flex;
    flex-direction: row-reverse;
  `,
  border: css`
    width: 1px;
    height: 100%;
    background-color: var(--color-black);
  `,
  button: css`
    margin-top: 40px;
  `,
};
