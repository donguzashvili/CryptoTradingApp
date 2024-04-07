const key = import.meta.env.VITE_SERVICE_KEY;

type ApiPropType = {
    method?: 'POST' | 'GET';
    headers?: { [key: string]: string } | null;
};

const Api = async <T>(
    url: string,
    { method = 'GET', headers }: ApiPropType = { headers: {} }
): Promise<T> => {
    let customHeaders: { [key: string]: string } | undefined = {
        'X-CMC_PRO_API_KEY': key,
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip, deflate',
        ...headers,
    };
    if (headers === null) {
        customHeaders = {};
    }
    const response = await fetch(url, {
        method,
        headers: customHeaders,
    });
    return response.json();
};

export default Api;
