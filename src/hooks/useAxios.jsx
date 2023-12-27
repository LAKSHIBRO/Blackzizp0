import axios from "axios";
import { useEffect, useState } from "react"


const UseAxios = (param) => {

    const [response, setResponse] = useState(null);
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');



    axios.defaults.baseURL = 'https://api.coingecko.com/api/v3/';

    const fetchData = async (param) => {
        try {
            setLoading(true)
            const result = await axios(param);
            setResponse(result.data);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(param);
    }, [param]);


    return {
        response, loading, error
    }
}

export default UseAxios;
