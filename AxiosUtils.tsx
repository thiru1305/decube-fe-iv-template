import axios from "axios";
import { env } from "process";

export async function api(
    requestEndpoint: string,
    requestMethod: string,
    data: {},
) : Promise<any> {
    const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;

    const domainUrl = process.env.NEXT_PUBLIC_API_ENDPOINT;

    // const requestURL = `${domainUrl}/${}`

    if(!token) return;

    // if(token && token !== "undefined") {
    //     headers = {
    //         ...headers,
    //         Authorization: token, 
    //     }
    // }

    let axiosBody: any = { 
        method: requestMethod,
        url: requestEndpoint,
        headers: {
            'Content-Type': "application/json",
            Authorization: token,
        },
        
    }

    if(requestMethod === "GET") {
        axiosBody = {
            ...axiosBody,
            params: data,
        };
    }
    else if(requestMethod === "POST" || "PUT" || "PATCH") {
        axiosBody = {
            ...axiosBody,
            data,
        }
    }

    return axios(axiosBody)
    .then((response) => {
        return {
            ...response.data,
            httpCode: response.status,
        }
    })
    .catch((error) => {
        if(error.code === "ERR_BAD_RESPONSE") {
            console.error("Server error", error);
            return {
                httpCode: 500,
                message: error.message || "Unexpected error"
            };
        }
        
        return {
            ...error.response.data,
            httpCode: error.response.data,
        }

        
    })


}