const devEnv = {
  apiUrl: 'http://localhost:8912'
};

const prodEnv = {
  apiUrl: 'https://api.patrician.app'
};

module.exports = {
  env: process.env.NODE_ENV === 'development' ? devEnv : prodEnv
};