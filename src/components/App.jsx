import { useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import s from './App.module.css';

const App = () => {
  const [searchInput, setSearchInput] = useState('');

  const updateSearchInput = searchInput => {
    setSearchInput(searchInput);
  };

  return (
    <div className={s.App}>
      <Searchbar updateSearchInput={updateSearchInput} />
      <ImageGallery searchInput={searchInput} />
    </div>
  );
};

export default App;
