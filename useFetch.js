import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const customFetch = async (params = {}) => {
        if (!url) {
            setError(new Error("URL is required"));
            return;
        }
        setIsLoading(true);
        setError(null);
        setData(null);

        try {
            const queryParams = new URLSearchParams(params).toString();
            const fullUrl = queryParams ? `${url}?${queryParams}` : url;
            const res = await fetch(fullUrl);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setData(data)
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        customFetch();
    }, [url])

    const refetch = ({ params }) => {
        customFetch(params);
    }

    return {
        data,
        isLoading,
        error,
        refetch
    }
}
