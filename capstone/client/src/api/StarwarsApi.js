import axios from "axios";

const BASE_API_URL = 'http://localhost:5000';


class StarwarsApi {
    static async getData(data) {
        const result = await axios.get(`${BASE_API_URL}/${data}`);
        return result.data;
    }
}

export default StarwarsApi;