import { Slave } from "@/models/slave.model"
import axios from "axios"


export const slaveLogin = async (body: Slave) => {
    const baseURL = 'http://192.168.1.169:8000/'

    try {
        const { data } = await axios.post<Slave>(`${baseURL}slave-login`, body);

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error.response;
        } else {
            return error;
        }
    }
};