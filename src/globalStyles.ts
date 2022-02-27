import { css } from "linaria";
import { colors } from "src/theme";
export const globalStyles = css`
  :global() {
    @font-face {
      font-family: "Catamaran";
      src: url("/fonts/Catamaran-Bold.woff2") format("woff2");
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: "Catamaran";
      src: url("/fonts/Catamaran-Medium.woff2") format("woff2");
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    html {
      box-sizing: border-box;
      font-size: 62.5%;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    body {
      font-family: "Catamaran";
      letter-spacing: 0.64px;
      font-size: 1.6rem;
      color: #616161;
      background-color: ${colors.warm};
      -webkit-font-smoothing: antialised;
      line-height: 1.4;
    }
    html,
    body,
    #__next {
      width: 100%;
      min-height: 100vh;
    }
    #__next {
      display: flex;
      flex-direction: column;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: "";
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    strong {
      font-weight: bold;
    }
    p {
      line-height: 1.48;
      font-size: 1.6rem;
      letter-spacing: 0.8px;
    }
    p,
    span {
      color: inherit;
    }
  }
`;
