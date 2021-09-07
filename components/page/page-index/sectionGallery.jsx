/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { heading2 } from '../../../styles/common/commonStyles';
import { sectionBody } from '../../../styles/common/commonStyles';
import { SectionBlockLarge } from '../../layouts/sectionBlockLarge';
import { SectionBlockSmall } from '../../layouts/sectionBlockSmall';
import { ButtonLink } from '../../common/buttonLink';
import { Slider } from './slider';

export const SectionGallery = () => {
  return (
    <section>
      <h1 css={heading2}>Gallery</h1>
      <div css={styles.body}>
        <SectionBlockSmall border="left">
          <p css={styles.desc}>Galleryセクションの説明</p>
          <ButtonLink css={styles.button} href="/gallery" text="view all" />
        </SectionBlockSmall>
        <div css={styles.border}></div>
        <SectionBlockLarge>
          <Slider />
        </SectionBlockLarge>
      </div>
    </section>
  );
};

const styles = {
  body: css`
    ${sectionBody} // これで共通スタイルとかを引き継げる
    display: flex;
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
