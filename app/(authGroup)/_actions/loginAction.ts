"use server"

type loginPendingState = {
    success: boolean,
    statusCode: number,
    message: string,
    data: {
        accessToken: string,
        refreshToken: string,
    }
}


export const loginAction = async (pendingState : loginPendingState ,formData : FormData) => {
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

    const result = await res.json();
    return result
}