// import original module declarations
import 'styled-components';
declare module '*.jpg';
declare module '*.png';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        primaryColor: string;
        secondaryColor: string;
        tertiaryColor: string;
        darkColor: string;
        lightColor: string;
        darkFont: string;
        lightFont: string;
    }
}