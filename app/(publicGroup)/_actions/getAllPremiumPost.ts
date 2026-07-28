"use server"

import { cookies } from 'next/headers';

const getAllPremiumPost = async ({query} : {query?: {[key: string]: string | string[] | undefined }}) => {
    
    const params = new URLSearchParams();

    if (query && query.searchTerm) {
        params.set('searchTerm', query.searchTerm as string);
    }
    console.log(params)
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            statusCode: 401,
            message: "Unauthorized",
        }
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/premium?${params.toString()}`, {
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
