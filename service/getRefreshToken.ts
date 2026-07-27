"use server"

import { cookies } from "next/headers";

export const getRefreshToken = async() => {
    const cookieStore = await cookies();

    const refreshToken = cookieStore.get("refreshToken")?.value;

    if(!refreshToken) {
        return {
            success: false,
            statusCode: 401,
        }
    }

    // Get a new access token
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/refresh-token`, {
        method: "POST",
        headers: {
            Cookie : `refreshToken=${refreshToken}`,
        },
        cache: "no-cache",
    })

    const result = await res.json();
    
    return result
}