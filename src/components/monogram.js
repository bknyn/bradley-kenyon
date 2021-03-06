import colors from '../styles/variables/colors';

const Monogram = () => (
  <svg viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M47.16 86.2c0-30.64-12.9-34.7-16.17-35.23V86.2c0 .56-.45 1-1 1s-1-.45-1-1V14.57h-7.08V86.2c0 .56-.44 1-1 1h-9.08c-.55 0-1-.45-1-1V0H0v100h47.16V86.2z" fill={colors.primaryColor} />
    <path d="M12.84 0v85.2h7.08V13.58c0-.55.45-1 1-1H30c.55 0 1 .45 1 1V48.8c3.28-.56 16.17-4.74 16.17-35.22 0-.55.45-1 1-1s1 .45 1 1c0 26.17-9.11 33.98-14.69 36.32 5.58 2.34 14.69 10.15 14.69 36.31V100H60V0H12.84z" fill={colors.primaryColor} />
  </svg>
);

export default Monogram;
