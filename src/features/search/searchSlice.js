import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skills: [],
  loading: false,
  error: null,
  search: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setField(state, { payload }) {
      const keys = Object.keys(payload);
      const values = Object.values(payload);
      for (let i = 0; i <= keys.length - 1; i += 1) {
        state[keys[i]] = values[i];
      }
    },

    changeSearchField: (state, action) => {
      const { search } = action.payload;
      if (search !== '') {
        state.search = search;
      }
      state.search = search;
      state.skills = [];
    },
  },
});

export const {
  progressRequest, searchFailure, searchSuccess,
  changeSearchField, setField,
} = searchSlice.actions;

export default searchSlice.reducer;
