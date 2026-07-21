"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type LoginState = {
    success: boolean,
    statusCode: number,
    message: string,
    data: {
        accessToken: string,
        refreshToken: string,
    }
}


export const loginAction = async (pendingState : LoginState ,formData : FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const body = {
        email, 
        password
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    
    const result  = await res.json();

    if (result.success) {
        const cookieStore = await cookies();

        cookieStore.set("accessToken", result.data.accessToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 24, // 1 day
            sameSite: "lax"
        })

        cookieStore.set("refreshToken", result.data.refreshToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7, // 1 week
            sameSite: "lax"
        })

        redirect("/dashboard")
    }

    return result
}