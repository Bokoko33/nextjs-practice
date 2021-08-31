import styles from '../../styles/common/header.module.scss';
import Link from 'next/link';

export default function Header() {
  const navigation = [
    { name: 'TOP', href: '/' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'ABOUT', href: '/about' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1>NextJS Practice</h1>
        <nav>
          <ul className={styles.menuList}>
            {navigation.map(({ name, href }) => (
              <li className={styles.menuItem} key={name}>
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
}
