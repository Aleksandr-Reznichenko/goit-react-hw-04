import ImageCard from '../ImageCard/ImageCard';

import css from './ImageGallery.module.css';

export default function ImageGallery({ items, onOpenModal }) {
  return (
    <section>
      <ul className={css.imageGallery}>
        {items.map(item => (
          <li key={item.id} onClick={() => onOpenModal(item)}>
            <ImageCard image={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
