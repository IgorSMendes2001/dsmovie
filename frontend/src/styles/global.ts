import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
:root {
  --color-primary:'#2C497F';
}

* {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

html, body {
    background: ${props=>props.theme.colors.background};
}

a, a:hover {
  text-decoration: none;
  color: unset;
}
`;
