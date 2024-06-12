import axios from "axios";
import { GET_BLOGS_PREVIEW, GET_CITIES, GET_DATA, GET_PRODUCTS, GET_STATES, POST_GET_BLOG_DETAIL } from "@/utils/endpoints";

// GET
export const getBanner = async (id: number) => {
  try {
    const response = await axios.get(GET_DATA(id));
    return response.data;
  } catch (error) {
    console.error("Error en getBanner:", error);
    throw error;
  }
};

export const getBrands = async (id: number) => {
  try {
    const response = await axios.get(GET_DATA(id));
    return response.data;
  } catch (error) {
    console.error("Error en getBrands:", error);
    throw error;
  }
};

export const getCustomers = async (id: number) => {
  try {
    const response = await axios.get(GET_DATA(id));
    return response.data;
  } catch (error) {
    console.error("Error en getCustomers:", error);
    throw error;
  }
};

export const getFeatures = async (id: number) => {
  try {
    const response = await axios.get(GET_DATA(id));
    return response.data;
  } catch (error) {
    console.error("Error en getFeatures:", error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(GET_PRODUCTS());
    return response.data;
  } catch (error) {
    console.error("Error en getProducts:", error);
    throw error;
  }
};

export const getFAQ = async (id: number) => {
  try {
    const response = await axios.get(GET_DATA(id));
    return response.data;
  } catch (error) {
    console.error("Error en getFAQ:", error);
    throw error;
  }
};

export const getFAQImages = async (id: number) => {
  try {
    const response = await axios.get(GET_DATA(id));
    return response.data;
  } catch (error) {
    console.error("Error en getFAQImages:", error);
    throw error;
  }
};

export const getBlogsPreview = async (page: number, size: number) => {
  try {
    const response = await axios.get(GET_BLOGS_PREVIEW(page, size));
    return response.data;
  } catch (error) {
    console.error("Error en getBlogsPreview:", error);
    throw error;
  }
};

export const getStates = async () => {
  try {
    const response = await axios.get(GET_STATES());
    return response.data;
  } catch (error) {
    console.error("Error en getStates:", error);
    throw error;
  }
};

export const getCities = async (stateId: number) => {
  try {
    const response = await axios.get(GET_CITIES(stateId));
    return response.data;
  } catch (error) {
    console.error("Error en getCities:", error);
    throw error;
  }
};

//POST

export const postGetBlogDetail = async (data: { blogurl: string }) => {
  try {
    const response = await axios.post(POST_GET_BLOG_DETAIL, (data));
    return response;
  } catch (error) {
    console.error("Error en getBlogDetail:", error);
    throw error;
  }
}
