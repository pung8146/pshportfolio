export const size = {
  mobileS: '320px', // 568
  mobileM: '375px', // 667
  mobileL: '425px', // 731
  tablet: '768px', // 1024
  laptop: '1024px', // 768
  laptopL: '1440px', // 900
  desktop: '1920px', // 1080
  desktopL: '2560px' // 1440
}

export const device = {
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
