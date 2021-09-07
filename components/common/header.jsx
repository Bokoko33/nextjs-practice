/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';

export const Header = () => {
  const navigation = [
    { name: 'GALLERY', href: '/gallery' },
    { name: 'ABOUT', href: '/about' },
  ];

  return (
    <header css={styles.header}>
      <div css={styles.inner}>
        {/* Link配下でスタイルをつけたりする場合はpassHrefが必要 */}
        <Link href="/" passHref>
          <a css={styles.logo}>
            <h1>NextJS Practice</h1>
          </a>
        </Link>
        <nav css={styles.nav}>
          <ul css={styles.list}>
            {navigation.map(({ name, href }) => (
              <li css={styles.item} key={name}>
                <Link href={href}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: css`
    width: 100%;
    height: var(--height-header-pc);
    position: fixed;
    background-color: white;
    border-top: solid 1px var(--color-black);
    border-bottom: solid 1px var(--color-black);
    z-index: 1000;
  `,
  inner: css`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  `,
  logo: css`
    height: 100%;
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: solid 1px var(--color-black);
    padding-right: 40px;
  `,
  nav: css`
    height: 100%;
  `,
  list: css`
    height: 100%;
    display: flex;
    align-items: center;
    border-left: solid 1px var(--color-black);
    padding-left: 40px;
  `,
  item: css`
    &:not(:first-of-type) {
      margin-left: 40px;
    }
  `,
};
