import axios from "axios";

export const BASE_URL = "https://labeddit-a8kl.onrender.com";

export const TOKEN_NAME = "labefy-token"

export const Login = async (body) => {
    const { data } = await axios.post(`${BASE_URL}/users/login`, body)
    return data;
}

export const Signup = async (body) => {
    const { data } = await axios.post(`${BASE_URL}/users/signup`, body)
    return data;
}