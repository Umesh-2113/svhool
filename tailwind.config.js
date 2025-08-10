module.exports = {
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        gradient: 'gradient 5s ease infinite',
        fadeInUp: 'fadeInUp 1s ease forwards',
      },
    },
  },
  plugins: [],
}
