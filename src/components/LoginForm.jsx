import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate=useNavigate();

  const submitForm = (e)=>{
      e.preventDefault();
      navigate("/home-page");
  }
  
  return (
    <div className=" min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <form  onSubmit={submitForm}
        action=""
        className="w-full max-w-md bg-white rounded-2xl p-8 shadow-xl"
      >
        <h1 className="mb-4 text-xl font-bold text-gray-950">
          Connexion
        </h1>

        <p className="text-sm text-gray-800 mb-6">
          Connectez-vous a votre compte
        </p>

        <div className="flex flex-col gap-2 mb-4">
          <label 
            htmlFor="email"
            className="text-sm text-gray-900 font-medium"
          >
            Email
          </label>

          <input 
           id="email" 
           type="email" 
           placeholder="enter your email"
           className=" rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 " 
           />
           
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <label 
          htmlFor="password"
          className="text-sm font-medium text-gray-900 "
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="enter your password "
            className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-700 focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        <div >
          <button
            type="submit"
            className="w-full rounded-lg border border-indigo-700 py-3 font-medium transition hover:bg-indigo-700 hover:text-white active:scale-90"
            > 
            connexion 
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
