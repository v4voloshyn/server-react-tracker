export const setTrackTitle = () => {
	return `Started ${new Date(Date.now())
		.toLocaleString()
		.split(', ')
		.join(' at ')}`;
};
