import React from "react";
import Link from "next/link";

import commerce from "../lib/commerce";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

import {createUseStyles} from 'react-jss';

const styles = createUseStyles({
  container: {
    padding: 15,
    display: 'flex',
    flexWrap: 'wrap',
    '& h1': {
      width: '100%'
    }
  },
  categories: {
    width: '16%',
    padding: 15,
    '& ul': {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      '& li': {
        '& + li': {
          marginTop: '8px',
        },
        '& a': {
          color: '#808080',
        }
      }
    }
  },
  products: {
    flex: '1 0 0',
    padding: 15
  }
})

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default function IndexPage({ merchant, categories, products }) {
  const classes = styles();

  return (
    <React.Fragment>
      <div className={classes.container}>
        <h1>{merchant.business_name}</h1>

        <div className={classes.categories}>
          <h3>
            <Link href="/categories">
              <a>Categories</a>
            </Link>
          </h3>
  
          <CategoryList categories={categories} />
        </div>

        <div className={classes.products}>
          <h3>
            <Link href="/products">
              <a>Products</a>
            </Link>
          </h3>
  
          <ProductList products={products} />
        </div>
      </div>
    </React.Fragment>
  );
}
