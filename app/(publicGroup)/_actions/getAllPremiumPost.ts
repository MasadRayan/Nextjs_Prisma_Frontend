import { cookies } from 'next/headers';

const getAllPremiumPost = async () => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            statusCode: 401,
            message: "Unauthorized",
        }
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/premium`, {
        headers: {
            Cookie: `accessToken=${accessToken}`
        },
        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 6, // 6 hours
            tags: ["premium-posts"]
        }
    })

    const result = await res.json()

    return result
}

export default getAllPremiumPost
