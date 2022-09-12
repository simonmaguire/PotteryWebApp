import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:3001";

export const getPots = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const pots: AxiosResponse<ApiDataType> = await axios.get(baseUrl + "/pots");
    return pots;
  } catch (error) {
    throw error;
  }
};

export const addPot = async (
  formData: IPot
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const pot: Omit<IPot, "_id"> = {
      clay: formData.clay,
      category: formData.category,
      status: false,
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
  pot: IPot
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const potUpdate: Pick<IPot, "status"> = {
      status: true,
    };
    const updatedPot: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/update-pot/${pot._id}`,
      potUpdate
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
