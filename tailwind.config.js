module.exports = {
    theme: {
      extend: {
        clipPath: {
          custom: 'polygon(0% -0.18%, 33.08% -0.18%, 66.17% -0.18%, 100.26% -0.18%, 100.26% 28.94%, 100.26% 51.03%, 100% 85.15%, 44.01% 85.15%, 44.01% 100%, 0% 100.24%)',
        },
      },
    },
    plugins: [
      require('tailwind-clip-path'), // butuh plugin ini
    ],
  }
  