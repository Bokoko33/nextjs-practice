import { compWidth } from './constants';

export const vw = (fontSize) => {
  return `${(fontSize / compWidth.pc) * 100}vw`;
};

export const vwSp = (fontSize) => {
  return `${(fontSize / compWidth.sp) * 100}vw`;
};
