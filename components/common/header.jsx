import Link from 'next/link';

export default function Header() {
  const navigation = [
    { name: 'TOP', href: '/' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'ABOUT', href: '/about' },
  ];

  return (
    <header>
      <nav>
        <ul>
          {navigation.map(({ name, href, id }) => (
            <li key={id}>
              <Link href={href}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
