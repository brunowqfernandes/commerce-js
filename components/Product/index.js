import styles from './styles'

export default function Product({ name, image, price }) {
  const classes = styles();
  return (
    <>
      <img className={classes.image} src={image.url} alt="" />
      <p className={classes.productName}>
        {name}: {price.formatted_with_symbol}
      </p>
    </>
  );
}
