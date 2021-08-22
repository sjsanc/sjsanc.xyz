import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      dark: string;
    };
    boxShadow: string;
  }
}
