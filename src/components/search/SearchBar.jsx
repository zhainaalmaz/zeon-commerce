import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
  const product = useSelector((state) => state.products.data);
  const [filteredData, setFilteredData] = useState([]);
  const [inputEntered, setInputEntered] = useState('');
  const navigate = useNavigate();

  const onFilterHandler = (e) => {
    const searchProduct = e.target.value;
    setInputEntered(searchProduct);
    const filterResult = product.filter((value) => {
      return value.title.toLowerCase().includes(searchProduct.toLowerCase());
    });

    if (searchProduct === '') {
      setFilteredData([]);
    } else {
      setFilteredData(filterResult);
    }
  };

  const onClearInput = () => {
    setFilteredData([]);
    setInputEntered('');
  };

  const searchNavigateHandler = () => {
    navigate(`/searchpage/${inputEntered}`);
    onClearInput();
  };

  return (
    <div className="search">
      <>
        <input
          type="text"
          value={inputEntered}
          placeholder="Поиск"
          onChange={onFilterHandler}
        />
        <div>
          <SearchIcon className="searchBtn" onClick={searchNavigateHandler} />
        </div>
      </>
      {filteredData?.length !== 0 && (
        <div className="dataResult">
          <div className="dataRes"> </div>
          {filteredData?.map((value, key) => (
            <div key={value.id}>
              <NavLink
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'flex-start',
                  color: 'black',
                  marginTop: 16,
                  marginBottom: 16,
                  marginLeft: 20,
                  fontЦeight: 400,
                  fontSize: 14,
                  lineHeight: '150%',
                }}
                to={`/searchpage/${value.title}`}
                onClick={onClearInput}
                key={key}
              >
                {value.title}
              </NavLink>
              <hr style={{ border: '1px solid #EEEEEE' }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
