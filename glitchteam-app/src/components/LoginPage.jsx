import "../assets/css/LoginPage.css";
import logo from '../assets/images/logo.png'

function LoginPage() {
  return (
    <div className="login-page">
      <div className="logo-container">
        <img src={logo} alt="logo de Braincubator" className="logo-braincubator" />
      </div>
      <form className="login-form">
        <input type="email" name="name" placeholder="Adresse mail" className="login-inputs" />
        <input type="password" name="name" placeholder="Mot de passe" className="login-inputs" />
        <a className="IdButton" href="http://localhost:3000/home">Connexion</a>
      </form>
      <div className="NoAccount">
        <p>Vous n&apos;avez pas de compte ?</p>
        <button type="button">Créer son profil</button>
      </div>
    </div>
  );
}

export default LoginPage;
