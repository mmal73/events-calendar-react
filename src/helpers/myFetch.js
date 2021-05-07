const base_url = `${process.env.REACT_APP_API_URL}`;

export const fetchWithoutToken = ( endpoint, data, method='GET' ) => {
    const url = `${base_url}/${endpoint}`;

    if( method !== 'GET' ){

        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });

    }
    return fetch( url );
}