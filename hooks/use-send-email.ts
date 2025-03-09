import { useCallback } from "react";
import http from "@/hooks/http-common";

export default function useSendEmail() {

    const sendEmail = useCallback(async (email: string) => {
        if (!email || typeof email !== 'string') {
            console.error('wrong email');
        }

        try {
            const trimmedEmail = email.trim();

            const response = await http.get('/send_demo_email/'+trimmedEmail);

            return response.data;
        } catch (err) {
            console.error('Error sending email:', err);
        }
    }, []);

    return { sendEmail };
}
