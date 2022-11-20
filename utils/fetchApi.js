import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
    headers: {
    'X-RapidAPI-Key': '1fc9f210dcmsh213ef76744325a9p146d12jsnb5f5f79bfefa',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
}
    });

    return data;
}