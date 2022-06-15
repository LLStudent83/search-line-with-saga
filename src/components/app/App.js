import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from '../../features/search/searchSlice';
import Loader from '../loader/Loader';
import Popup from '../popup/Popup';
import SkillsList from '../skillsList/SkillsList';
import './app.scss';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.searchSliceReducer);

  const message = <span>Type something to search...</span>;
  const indent = <div style={{ display: 'inline-block', width: '220px' }} />;
  const loader = loading ? <Loader /> : null;
  const popup = error ? <Popup text={error} /> : '';

  const handelOnChange = (value) => {
    setSearchQuery(value);
    dispatch(changeSearchField({ search: value }));
  };

  return (
    <>
      {loader}
      {popup}
      {searchQuery === '' ? message : indent}
      <input
        type="text"
        className="serchString"
        value={searchQuery}
        onChange={(e) => handelOnChange(e.target.value)}
      />
      <SkillsList />
    </>

  );
}
