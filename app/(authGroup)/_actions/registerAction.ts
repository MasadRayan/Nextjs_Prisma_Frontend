"use server"

export const registerAction = async (prevState: any, formData: FormData) => {
    const body = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        profilePhoto: formData.get("profilePhoto") as string,
    }
    
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/register`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    const result = await res.json();
    console.log(result)

    return result

}