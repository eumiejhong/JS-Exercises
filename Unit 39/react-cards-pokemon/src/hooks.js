import { useState, useEffect } from "react";
import uuid from 'uuid/v4';
import axios from 'axios';

function useFlipCard(initialFlipState = true) {
    const [isFlipped, setFlipped] = useState(initialFlipState);

    const flip = () => {
        setFlipped(isUp => !isUp);
    };
    return [isFlipped, flip];
}

function useAxios(initialUrl, initialState = {}) {
    const [url, setUrl] = useState(initialUrl);
    const [respData, setRespData] = useState(initialState);

    useEffect(() => {
        getData();
    }, [url])

    const getData = async () => {
        const response = await axios.get(url);
        setRespData({...response.data, request_id: uuid() });
    };
    return [respData, getData, setUrl];
};

export { useFlipCard, useAxios };