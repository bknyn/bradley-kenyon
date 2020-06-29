// Expects font-size to be set at 16px
const pxToRem = (px) => `${px / 16}rem`;

module.exports = {
  environmentVariables: {
    '--screenSm': pxToRem(580),
    '--screenMd': pxToRem(768),
    '--screenLg': pxToRem(1024)
  }
};
