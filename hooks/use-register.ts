import { useCallback } from "react";
import http from "@/hooks/http-common";
import {RegParams} from "@/app/register/page";

export default function useRegister() {

    const register = useCallback(async (regParams: RegParams) => {
        try {
            const response = await http.post('/register', regParams);
            return response.data;
        } catch (err) {
            console.error('Error sending email:', err);
        }
    }, []);

    return { register };
}
