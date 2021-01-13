// import react from "react";
import "../assets/css/LoginPage.css";

function LoginPage() {
  return (
      
    
    <form>
        {/* <div className="LogInPage"/> */}
        <div className="NoAccount">
        <p>Vous n&apos;avez pas de compte ?</p>
       <button type="button">Créer son profil</button>

        </div>
        
      <label className="IdArea">
        Identifiant :
        <input type="text" name="name" />
      </label>
      <label className="PasswordArea">
        Mot de passe :
        <input type="text" name="name" />
      </label>
      
      <a className="IdButton">
        <input
        className="IdButton"
          href="http://localhost:3000/home"
          type="button"
          value="Connexion"
        />
      </a>
    </form>
  );
}

export default LoginPage;
