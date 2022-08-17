Digital Audio work station plug ins
Musician write elctronic music apply filters to their tracks
changes how the track will sound
Band pass filter - takes a soundwave as an input, collection of frequencies, the filter needs to check all the frequencies and if they are over the upper limit or below a lower limit, but don't change other frequencies
Soundwave - array with numbers
freq - cant go lower than one

inputs - [60,10,45,60,1500]
outputs - [60,40,45,60,1000]
40 - lower limit
1000 - upper limit

data types - raise error, not an array or elements are not integers
"Soundwave is corrupted."

TDD
1. start with an array with one freq
2. freq within the range
3. freq lower than the limit
4. freq higher than the limit
5. array with multiple freq

- user inout changes the default limit and higher limit
