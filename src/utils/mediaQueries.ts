const sizes = {
  LargeDesktop: 1920,
  desktop: 1440,
  smallLargeDesktop: 1280,
  mobile: 375,
}

export const media = {
  LargeDesktop: (styles: string) => `
    @media (max-width: ${sizes.LargeDesktop}px) {
      ${styles}
    }
  `,
  desktop: (styles: string) => `
    @media (max-width: ${sizes.desktop}px) {
      ${styles}
    }
  `,
  smallLargeDesktop: (styles: string) => `
    @media (max-width: ${sizes.smallLargeDesktop}px) {
      ${styles}
    }
  `,
  mobile: (styles: string) => `
    @media (max-width: ${sizes.mobile}px) {
      ${styles}
    }
  `,
}
