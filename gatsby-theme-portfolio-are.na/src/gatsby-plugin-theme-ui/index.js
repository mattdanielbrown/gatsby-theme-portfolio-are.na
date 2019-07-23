/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
const heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading",
}

export default {
  useCustomProperties: true,
  initialColorMode: "light",
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
    secondary: "#119",
    muted: "#f6f6f6",
    highlight: "#ffffcc",
    gray: "#777",
    purple: "#609",
    modes: {
      dark: {
        text: "#fff",
        background: "#060606",
        primary: "#3cf",
        secondary: "#e0f",
        muted: "#191919",
        highlight: "#ffffcc",
        gray: "#999",
        purple: "#c0f",
      },
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: "400",
    heading: "700",
  },
  lineHeights: {
    body: 1.4,
    heading: 1.1,
  },
  textStyles: {
    heading,
    display: {
      variant: "textStyles.heading",
      fontSize: [5, 6, 7],
      mt: 3,
    },
  },
  styles: {
    Container: {
      px: 4,
      py: 0,
      maxWidth: 1280,
    },
    Header: {
      pt: 3,
    },
    Footer: {
      py: 4,
      mt: 4,
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "textStyles.display",
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 5,
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 4,
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3,
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 2,
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1,
    },
    a: {
      color: "primary",
      "&:hover, &:focus": {
        color: "secondary",
      },
    },
    pre: {
      variant: "prism",
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      overflow: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      color: "secondary",
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted",
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "muted",
    },
  },
}
