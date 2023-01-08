import axios, { AxiosResponse } from "axios"
import { Flash } from "../models/Flash"

export const retrieveAllFlashs = async () : Promise<AxiosResponse<Flash[]>> => {
    return axios.get<Flash[]>(`http://localhost:3000/flash`)
}

export const retrieveOneFlash = async (id: number) : Promise<AxiosResponse<Flash>> => {
    return axios.get<Flash>(`http://localhost:3000/flash?id=${id}`)
}