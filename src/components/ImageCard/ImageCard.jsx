import css from './ImageCard.module.css';

export default function ImageCard({ image: { urls, alt_description } }) {
  return (
    <img className={css.imageCard} src={urls.small} alt={alt_description} />
  );
}
