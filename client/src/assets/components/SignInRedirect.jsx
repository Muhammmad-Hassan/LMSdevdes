import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignInRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to SignIn page upon sign-up completion
    const redirectToSignIn = () => {
      navigate("/SignIn");
    };

    redirectToSignIn();
  }, [navigate]);

  return null;
};

export default SignInRedirect;
