import axios from "axios";

export const BASE_URL = "http://localhost:3002";

export const TOKEN_NAME = "labefy-token"

export const Login = async (body) => {
    const { data } = await axios.post(`${BASE_URL}/users/login`, body)
    return data;
}

export const Signup = async (body) => {
    const { data } = await axios.post(`${BASE_URL}/users/signup`, body)
    return data;
}