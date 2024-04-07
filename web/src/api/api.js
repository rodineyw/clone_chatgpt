import { Axios } from "axios";

const URL_API = 'http://localhost:5555/api/prompt'

export const makeRequest = async (message) => {
 const { data } = await Axios.post(URL_API, { message });
 return data
}