import { useSearchbar } from 'hooks/useSearchbar';

import s from './Searchbar.module.css';

const Searchbar = ({ updateSearchInput }) => {
  const { searchbar, handleChange, handleSubmit } = useSearchbar({
    initialValues: { input: '' },
    onSubmit: values => updateSearchInput(values.input),
  });

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchbar.input}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
