import auth0 from 'auth0-js';
import jwt_decode from 'jwt-decode';

export default class Auth {
    constructor(props) {
        this.login = this.login.bind(this)
        this.isAuthenticated = this.isAuthenticated.bind(this)
        this.getProfile = this.getProfile.bind(this)
    }
    auth0 = new auth0.WebAuth({
        domain: 'thanhnd.auth0.com',
        clientID: '64NgKAauKG8pJu1ctsd4ZZdJAt6PI3Y3',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile'
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

      getProfile() {
          if(localStorage && localStorage.getItem("id_token")) {
              return jwt_decode(localStorage.getItem("id_token"))
          } else {
              return {}
          }
      }

      logout() {
          localStorage.removeItem('accesToken')
          localStorage.removeItem('id_token')
          localStorage.removeItem('expires_at')
        //   window.location.pathname = ""
        window.history.replace("/")
      }

      isAuthenticated() {
        console.log("isAuthenticated")
          if(localStorage && localStorage.getItem("expires_at")) {
              let expiresAt = JSON.parse(localStorage.getItem("expires_at"))

              console.log("new Date().getTime", new Date().getTime )
              console.log("expiresAt", expiresAt)
              return new Date().getTime() < expiresAt
          }
      }
}