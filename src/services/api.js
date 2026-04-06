import axios from "axios"

const BASE_URL= "https://dev.bhcjobs.com";

const STORAGE_BASE_URL="https://api.bhcjobs.com/storage";


const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {'Content-Type': 'multipart/form-data'}
});



// =================== Image URL ============

export const getIndustryImageUrl = (image)=>{
  return `${STORAGE_BASE_URL}/industry-image/${image}`;
}


// GET APIs
export const getIndustries=async()=>{
const response = await instance.get('/api/industry/get');
return response.data;
}

