import { API_URL, API_URL_CLOUDFRONT, API_URL_POSTAL_CODES } from "./constants";

// GET
export const GET_STATES = () => `${API_URL_POSTAL_CODES}state/`;
export const GET_PRODUCTS = () => `${API_URL}solarPanels/public/`;
export const GET_BLOG_DETAIL = `${API_URL}BlogContent/public/ByUrlAndStatus/`;
export const GET_DATA = (id: number) => `${API_URL}component/public/byComponentOrder/${id}/`;
export const logo_avantthya = `${API_URL_CLOUDFRONT}Logos/Avantthya/img/avantthya_blanco.png`;
export const GET_CITIES = (stateId: number) => `${API_URL_POSTAL_CODES}municipality/getbystate/${stateId}`;
export const GET_BLOGS_PREVIEW = (page: number, size: number) => `${API_URL}blog/public/?page=${page}&size=${size}&brandid=3`;

// POST
export const POST_GET_BLOG_DETAIL = `${API_URL}BlogContent/public/ByUrlAndStatus/`;