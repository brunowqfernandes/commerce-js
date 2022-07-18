import Link from "next/link";

import Product from "../Product";
import styles from "./styles";

export default function ProductList({ products }) {
  if (!products) return null;
  const classes = styles();

  return (
    <ul className={classes.list}>
      {products.map((product) => (
        <li className={classes.listItem} key={product.permalink}>
          <div>
            <Link href={`/products/${product.permalink}`}>
              <a>
                <Product {...product} />
              </a>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
