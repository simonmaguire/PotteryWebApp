import axios, { AxiosResponse } from "axios";
// import { ApiDataType, IPot } from "./types";

const baseUrl: string = "http://localhost:3001";

export const getPots = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const pots: AxiosResponse<ApiDataType> = await axios.get(baseUrl + "/pots");
    return pots;
  } catch (error) {
    throw error;
  }
};

export const getPot = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const pot: AxiosResponse<ApiDataType> = await axios.get(
      `${baseUrl}/pot/${_id}`
    );
    return pot;
  } catch (error) {
    throw error;
  }
};

export const addPot = async (
  formData: IPotInfo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const pot: Omit<IPotInfo, "_id"> = {
      stage: formData.stage,
      clay: formData.clay,
      name: formData.name,
      category: formData.category,
      clay_weight: formData.clay_weight,
      throw_height: formData.throw_height,
      throw_width: formData.throw_width,
      throw_notes: formData.throw_notes,
      green_decorations: formData.green_decorations,
      trim_notes: formData.trim_notes,
      glazes: formData.glazes,
      glaze_notes: formData.glaze_notes,
      result_height: formData.result_height,
      result_width: formData.result_width,
      result_notes: formData.result_notes,
    };
    const savePot: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/create-pot",
      pot
    );
    return savePot;
  } catch (error) {
    throw error;
  }
};

export const updatePot = async (
  pot: IPotInfo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const updatedPot: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/update-pot/${pot._id}`,
      pot
    );
    return updatedPot;
  } catch (error) {
    throw error;
  }
};

export const deletePot = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedPot: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-pot/${_id}`
    );
    return deletedPot;
  } catch (error) {
    throw error;
  }
};
