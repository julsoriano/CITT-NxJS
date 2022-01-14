// https://github.com/gionkunz/chartist-js/issues/1017

// chartist-node-safe.js
const SafeChartist = typeof window !== 'undefined' ? require('chartist') : {};

export default SafeChartist;