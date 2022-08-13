import { useState } from 'react';
import PropTypes from 'prop-types';
import Search from '../Icon';
import {
  SearchbarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

function Searchbar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');

  const handleNameChange = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
    console.log(event.currentTarget.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (searchName.trim() === '') {
      alert('Введіть назву');
      return;
    }
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <SearchbarStyled>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <Search />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="searchName"
          value={searchName}
          onChange={handleNameChange}
          autocomplete="off"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarStyled>
  );
}

export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
