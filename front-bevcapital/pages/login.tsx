import Input from "@/components/Input";
import { useCallback, useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signingUp, setSigningUp] = useState(false);
  const toggleSigningUp = useCallback(() => {
    setSigningUp((curr) => !curr);
  }, []);

  return (
    <div className="relative h-full w-full bg-zinc-900">
      <div className="bg-zinc-800 w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5 text-red-600">Bevcapital</nav>
        <div className="flex justify-center">
          <div className="bg-zinc-800 bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {signingUp ? "Register" : "Sign In"}
            </h2>
            <div className="flex flex-col gap-4">
              {signingUp ? (
                <Input
                  id="username"
                  label="Name"
                  onChange={(e: any) => setUsername(e.target.value)}
                  type="text"
                  value={username}
                  maxLength={20}
                />
              ) : null}
              <Input
                id="email"
                label="Email"
                onChange={(e: any) => setEmail(e.target.value)}
                type="text"
                value={email}
                maxLength={20}
              />
              <Input
                id="password"
                label="Password"
                onChange={(e: any) => setPassword(e.target.value)}
                type="password"
                value={password}
                maxLength={50}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-800 transition">
              {signingUp ? "Sign up": "Login"}
            </button>
            <p className="text-neutral-500 mt-12">
              {signingUp ? "Already have an account?": "First time using Bevcapital?"}
              <span onClick={toggleSigningUp} className="text-white ml-1 hover:underline cursor-pointer">
              {signingUp ? "Login": "Create an account"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
