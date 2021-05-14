import { fetchWithoutToken, fetchWithToken } from '../../helpers/myFetch';

describe('Tests in helpers', () => {

    let token = '';

    test('fetch without token working correct', async() => {
        const bodyRequest = {
            "email": "test@test.com",
            "password": "12345678"
        };

        const resp = await fetchWithoutToken( 'auth/login', bodyRequest, 'POST' );
        
        expect( resp instanceof Response ).toBe( true );

        const bodyResponse = await resp.json();

        expect( bodyResponse.status ).toBe( true );

        token = bodyResponse.token;
    });

    test('fetch with token working correct', async() => {

        localStorage.setItem('token', token);

        const resp = await fetchWithToken( 'events' );
        
        expect( resp instanceof Response ).toBe( true );

        const bodyResponse = await resp.json();

        expect( bodyResponse.status ).toBe( true );
        expect( typeof bodyResponse.events ).toBe( 'object' );
        expect( !!bodyResponse.events.length ).toBe( true );
        
    });
    
})
