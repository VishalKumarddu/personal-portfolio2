const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logo': "'WindSong', cursive"


      },
      backgroundImage: {
        'banner-bg': "url('https://ik.imagekit.io/b80sh2n2k/banner-bg.png?updatedAt=1679470984528')",
        'tagline-bg': "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
        'footer-bg': "url('https://ik.imagekit.io/b80sh2n2k/footer-bg.png?updatedAt=1679470984373')",
        'contact-bg': "linear-gradient(90.21deg,#aa367c -5.91%,#4a2fbd 111.58%)"
      },
      colors :{
        "para" : "#B8B8B8",
        "cursor": '#666'
      },
      keyframes: {
      updown: {
        
        '0%, 100%': { transform: 'translateY(-20px)' },
        '50%': { transform: 'translateY(20px)' },
      
      },
    },
      animation: {
        move: 'updown 3s linear infinite',
      }


    }
  },
  plugins: [],
});