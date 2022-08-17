const bandpassFilter = (soundwave) => {
  const lowLimit = 40;
  const highLimit = 1000;
  filteredSoundwave = soundwave.map((freq) => {
    if (freq < lowLimit) {
      return lowLimit;
    } else if (freq > highLimit) {
      return highLimit;
    } else {
      return freq;
    }
  });
  return filteredSoundwave;
};

module.exports = bandpassFilter;
