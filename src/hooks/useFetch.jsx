import { useState, useEffect } from "react";

const useFetch = (url, options) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(
        () => {
            if (!url) return;

            const controller = new AbortController();//Controller para funcionalidade de controlar a conexao de 1 ou mais requisições.
            const { signal } = controller; 

            const fetchData = async () => {
                setLoading(true);
                setError(null);

                try {
                    const response = await fetch(url, {...options, signal});
                    if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.error || `Error ${response.status}`)
                    }
                    const data = await response.json();
                    setData(data);
                } catch (error) {
                    if (error.name !== "AbortError") {
                        setError(error.message);
                    }
                } finally {
                    setLoading(false)
                }
            } 
            fetchData();

            return () => controller.abort();

        }, [url, options]
    );

    //Retorna Dados
    return [data, loading, error]
}

export default useFetch;