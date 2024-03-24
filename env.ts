let env;

if (process.env.NODE_ENV === 'test' || typeof import.meta === 'undefined') {
  env = process.env;
} else {
  env = import.meta.env;
}

export default {
  VITE_API_URL: env.VITE_API_URL,
};