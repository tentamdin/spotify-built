import React from "react";
import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col bg-black min-h-screen w-full items-center justify-center">
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="logo"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="text-black font-semibold bg-green-500 p-5 rounded-full "
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    }, // will be passed to the page component as props
  };
}
