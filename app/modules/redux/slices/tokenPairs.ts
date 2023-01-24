import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IToken} from '../../../interfaces/IToken';

type TokenState = {
  pairs: {
    A: IToken | null;
    B: IToken | null;
  };
  direction: boolean; //if false - direction is reversed
};

const initialState: TokenState = {
  pairs: {
    A: null,
    B: null,
  },
  direction: true,
};

export const tokenPairs = createSlice({
  name: 'tokenPairs',
  initialState,
  reducers: {
    chooseTokenPair: (
      state,
      action: PayloadAction<{tokenName: 'A' | 'B'; token: IToken}>,
    ) => {
      state.pairs[action.payload.tokenName] = action.payload.token;
    },
    changeDirection: (state, action: PayloadAction<boolean>) => {
      state.direction = action.payload;
    },
  },
});

export default tokenPairs.reducer;
export const {chooseTokenPair, changeDirection} = tokenPairs.actions;
