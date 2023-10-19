import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Useustomhook(url = "") {
    const [data, setData] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await axios(url);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, error, loading };
}
