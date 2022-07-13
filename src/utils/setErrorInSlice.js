export const setErrorInSlice = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};
