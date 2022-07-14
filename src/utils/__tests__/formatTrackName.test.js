import { formatTrackName } from '../formatTrackName';

test('It should format input time to Day', () => {
	const inputTimeInMs = 1657803710106;
	expect(formatTrackName(inputTimeInMs)).toBe(`Started 14.07.2022, 16:01:50`);
});
