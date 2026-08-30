import LoginView from "../features/auth/LoginView";

// LoginPage : point d'entrée de la route "/login" — seule route publique
// de l'application. Ne passe pas par AppLayout, volontairement.
function LoginPage() {
  return <LoginView />;
}

export default LoginPage;