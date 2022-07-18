import Link from "next/link";

import Product from "../Product";
import styles from "./styles";

export default function Header() {
  const classes = styles()

  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <img src="https://via.placeholder.com/100x50" alt="Logo" />
        </a>
      </Link>
      <nav>
        <ul className={classes.menu}>
          <li><Link href='#'>a</Link></li>
          <li><Link href='#'>b</Link></li>
          <li><Link href='#'>c</Link></li>
        </ul>
      </nav>
    </header>
  );
}
