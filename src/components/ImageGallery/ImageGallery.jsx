import { useState, useEffect } from 'react';
import { Loader } from 'rsuite';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from './../Button/Button';
import s from './ImageGallery.module.css';
import { getSearchFotos } from 'utils/fotosApi';

const ImageGallery = ({ setModalInfo, searchInput }) => {
  const [fotos, setFotos] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const updatePage = () => {
    setPage(page => page + 1);
  };

  useEffect(() => {
    if (!searchInput) return;
    const setSearchFotos = () => {
      setIsLoading(true);
      getSearchFotos(page, searchInput)
        .then(({ hits, total }) => {
          setFotos(fotos => (page === 1 ? hits : [...fotos, ...hits]));
          page === 1 && setTotal(total);
        })
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false));
    };
    setSearchFotos();
  }, [page, searchInput]);

  return (
    <>
      <ul className={s.ImageGallery}>
        <ImageGalleryItem fotos={fotos} page={page} setModalInfo={setModalInfo} />
      </ul>
      {isLoading && <Loader size="lg" content="loading..." />}
      {fotos.length > 0 && fotos.length < total && <Button cbOnClick={updatePage} />}
    </>
  );
};

export default ImageGallery;
