/**
 * ShowTv is an object with optional properties of type string
 * @property {string | undefined} title - the title of the tv show;
 * @property {string | undefined} description - summary of this tv show"
 * @property {string | undefined} airingTime - if exist, show the years that the tv show was in the air
 * @property {string | undefined} premiered - when the first episode went to air
 * @property {string | undefined} coverImage - tv show image
 * @property {string | undefined} tvshowend - tv show end date
 * @property {string | undefined} ratingSerie - rate of the serie (maybe IMDB);
 */
export type ShowTv = {
  title?: string | undefined;
  description?: string | undefined;
  airingTime?: string | undefined;
  premiered?: string | undefined;
  coverImage?: string | undefined;
  tvshowend?: string | undefined;
  ratingSerie?: string | undefined;
};
