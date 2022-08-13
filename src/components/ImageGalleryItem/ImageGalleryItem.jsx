import { ModalContext } from '../../context/ModalProvider';
import { useRef, useEffect, useContext } from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ fotos, page }) => {
  const itemRef = useRef(null);
  const setModal = useContext(ModalContext);

  useEffect(() => {
    itemRef.current && itemRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, [fotos]);
  return fotos.map((el, idx, arr) => (
    <li
      ref={(page - 1) * 12 + 1 === idx + 1 ? itemRef : null}
      className={s.ImageGalleryItem}
      key={el.id}
      onClick={() =>
        setModal(
          <div className={s.Modal}>
            <img src={el.largeImageURL} alt={el.tags} />
          </div>
        )
      }
    >
      <img src={el.webformatURL} alt={el.tags} className={s.ImageGalleryItemImage} />
    </li>
  ));
};

export default ImageGalleryItem;
