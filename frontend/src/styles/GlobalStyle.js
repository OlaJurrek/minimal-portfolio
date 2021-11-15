import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    /* Use a more-intuitive box-sizing model */
    *, *::before, *::after {
        box-sizing: border-box;
    }

    /* Remove default margin for common elements */
    body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, ul, ol, dl, dt, dd {
        margin: 0;
    }

    /* Set 1rem to 10px to let use rems for typography styles easier */
    html {
        font-size: 62.5%;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Allow percentage-based heights in the application */
    html, body {
        height: 100%
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
    }

    /* Remove list styles on ul, ol elements */
    ul, ol {
        padding: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img, picture {
        display: block;
        max-width: 100%;
    }

    /* Inherit fonts for inputs and buttons */
    input, button, textarea, select {
        font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    /* Create a root stacking context */
    #__gatsby {
        isolation: isolate;
    }

    /* Basic typography */
    h1, h2 {
    font: normal 3.6rem/1.2 'Dosis', sans-serif;
    letter-spacing: 0.1rem;
    }

    h3 {
    font: normal 1.8rem/1.2 'Lato', sans-serif;
    letter-spacing: 0.5rem;
    }

    h4 {
    font: normal 2.4rem/0.8 'Dosis', sans-serif;
    color: var(--primary-dark);
    }

    p {
    font: 1.6rem/1.5 'Lato', sans-serif;
    color: #7f7f7f;
    }


    /* Common classes */
    .secondary-text {
    font-size: 1.4rem;
    }

    .visually-hidden {
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
`;

export default GlobalStyle;
