import colors from '../styles/variables/colors';
import spacing from '../styles/variables/spacing';

const RootCSSVars = () => {
  // Expects font-size to be set at 16px
  const toRem = (pxValue) => `${pxValue / 16}rem`;

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
