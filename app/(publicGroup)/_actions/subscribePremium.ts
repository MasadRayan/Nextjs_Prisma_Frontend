"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const subscribePremium = async () => {
     const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            statusCode: 401,
            message: "Unauthorized",
        }
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/subscription/checkout`, {
        method: "POST",
        headers: {
            Cookie: `accessToken=${accessToken}`
        },
        cache: "no-cache",
    })

    const result = await res.json()

    if (result.success && result.data.paymentURL) {
        redirect(result.data.paymentURL)
    }

    return result;
}

export default subscribePremium
