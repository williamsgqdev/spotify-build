import { getProviders, signIn } from "next-auth/react";

const Login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen justify-center w-full">
      <img src="https://links.papareact.com/9xl" className="w-52 mb-5" />

      {Object.values(providers).map(providers => (
          <div key={providers.name}>
              <button className="bg-[#18d860] text-white p-5 rounded-full"
              onClick={()=> signIn(providers.id ,{ callbackUrl : "/"})}
              >Login with {providers.name}</button>
          </div>
      ))
      }
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
