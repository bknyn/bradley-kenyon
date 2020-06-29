import {
  colors,
  spacing
} from '../styles/variables';

const RootCSSVars = () => {
  // TODO:: update font size on html to something reasonable
  // Expects font-size to be set at 11px
  const toRem = (pxValue) => `${pxValue / 11}rem`;

  const convertToCSSString = (obj, pxToRem = false) => (
    Object.entries(obj).map((current) => {
      const property = `--${current[0]}`;
      const value = pxToRem ? toRem(current[1]) : current[1];
      return `${property}: ${value};`;
    }).join('')
  );

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          :root {
            ${convertToCSSString(colors)}
            ${convertToCSSString(spacing, true)}
          }
        `
      }}
    />
  );
};

export default RootCSSVars;
