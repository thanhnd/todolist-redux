import auth0 from 'auth0-js';

export default class Auth {
    constructor(props) {
        this.login = this.login.bind(this)
    }
    auth0 = new auth0.WebAuth({
        domain: 'thanhnd.auth0.com',
        clientID: '64NgKAauKG8pJu1ctsd4ZZdJAt6PI3Y3',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            this.setSession(authResult);
            window.location.pathname = "/secret";
          } else if (err) {
            window.location.pathname = ""
            console.log(err);
          }
        });
      }
    
      setSession(authResult) {
        // Set the time that the Access Token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        // navigate to the home route
        window.location.pathname = "/secret"
      }
}