import { useState, useEffect } from "react";

const useFetch = (url, options) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(
        () => {
            if (!url) return;

            const controller = new AbortController(); 
            const { signal } = controller; 

            const fetchData = async () => {
                setLoading(true);
                setError(null);

                try {
                    const response = await fetch(url, {...options, signal});
                    if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.error || `Error ${error}`)
                    }
                    const data = await response.json();
                    setData(data)
                } catch (error) {
                    if (error.name !== "AbortError") {
                        setError(error.message);
                    }
                } finally {
                    setLoading(false)
                }
            } 

        }, [url, options]
    );

    //Retorna Dados
    return [data, loading, error]
}

export default useFetch;