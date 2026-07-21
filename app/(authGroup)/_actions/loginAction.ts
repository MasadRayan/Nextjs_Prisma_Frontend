"use server"


export const loginAction = async (formData : FormData) => {
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
    console.log(result)
}