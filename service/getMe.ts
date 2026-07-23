"use server"

import { cookies } from "next/headers";

export const getMyProfile = async() => {
    const cookieStore = await cookies();

    const accessToke = cookieStore.get("accessToken")?.value;

    if(!accessToke) {
        return {
            success: false,
            statusCode: 401,
            message: "Unauthorized",
        }
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/me`, {
        headers: {
            Cookie : `accessToken=${accessToke}`,
        },
        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 24, // 1 day
            tags: ["my-profile"]
        }
    })

    const result = await res.json();
    
    console.log(result)

    return result
}