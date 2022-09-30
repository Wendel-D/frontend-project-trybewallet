// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';

export const userInfo = (state) => ({
  type: ADD_USER,
  payload: { ...state },
});

export const ADD_WALLET = 'ADD_WALLET';

export const walletInfo = () => ({
  type: ADD_WALLET,
});
