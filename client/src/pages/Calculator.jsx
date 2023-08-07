import { useAuth } from "../context/AuthContext";
import Keys from "../components/Keys";

function Calculator() {
  const { user } = useAuth();
  console.log(user);

  return <Keys />;
}

export default Calculator;
