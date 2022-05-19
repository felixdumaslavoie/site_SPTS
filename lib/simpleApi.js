import axios from "axios";

const API_URL = "https://api.collectifspts.org/api/";

export async function simpleApi (apiCall) {
    try {
        const res = await axios.get(API_URL + apiCall);
        const result = res.data;
        return { result };
      } catch (error) {
        return { error };
      }
}

