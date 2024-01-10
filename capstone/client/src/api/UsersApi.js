import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class UsersApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method) {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${UsersApi.token}` };
    // if method is get then set params to data else set to empty obj
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, data, method, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // return current user
  static async getCurrUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  // sign up a user
  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  // checks auth and returns token if user and password correct
  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }
}

export default UsersApi;
