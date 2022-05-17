export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    darkColor: string;
    lightColor: string;
    darkFont: string;
    lightFont: string;

}

export interface WithTheme { theme: Theme };

export type Page = '/about-us/' | '/about-wakefield/' | '/donate/' | '/get-involved/' | '/reach-us/' | '/home/';