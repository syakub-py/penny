import axios from "axios"

const http = axios.create({
    baseURL: "https://smartbriefs-backend-production.up.railway.app",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
})

export default http
