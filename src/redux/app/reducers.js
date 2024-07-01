




export const appPending = (state) => {};

export const appSuccess = (state, { payload }) => {
  state.tasks = payload;
};

export const appRejected = (state, { payload }) => {};
