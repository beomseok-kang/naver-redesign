import axios from 'axios';

export async function getAutoComplete(query) {
    const response = await axios.get(`
        http://google.com/complete/search?q=${query}&hl=ko
    `, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }
    );
    console.log(response.data)
    return response.data;
}
