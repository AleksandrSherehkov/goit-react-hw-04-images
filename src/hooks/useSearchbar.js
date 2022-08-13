import { useState } from 'react';

export const useSearchbar = ({ initialValues, onSubmit }) => {
  const [searchbar, setSearchbar] = useState(initialValues);

  const handleChange = e => {
    const { name, value } = e.target;
    setSearchbar(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchbar);
  };

  const reset = () => setSearchbar(initialValues);

  return { searchbar, handleChange, handleSubmit, reset };
};
