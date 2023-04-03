import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#000000",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#4B4D63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B0",
            "200": "#B3B5C6",
            "100": "#D1D2DC",
            "50": "#EEEEF2",
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.900',
            },
        }
    },
    components: {
        Button: {
            baseStyle: {
                _focus: {
                    boxShadow: 'none !important',
                }
            }
        },
        Link: {
            baseStyle: {
                textDecoration: 'none !important',
            }
        }
    },
    breakpoints: {
        sm: '20em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px
    }
})