export const IMG_BASE_URL = "https://image.tmdb.org/t/p";

export const generateImgUrl = (path: string, size: number = 500): string =>
  `${IMG_BASE_URL}/w${size}/${path}`;
