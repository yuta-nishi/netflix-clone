import axios from 'axios';
import { NextPage, NextPageContext } from 'next';
import { getSession, signIn } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { Input } from '@/components/UI/Input';
import { useRouter } from 'next/router';

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const Auth: NextPage = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [mode, setMode] = useState('login');

  const modeToggler = useCallback(() => {
    setMode((prevMode) => (prevMode === 'login' ? 'register' : 'login'));
  }, []);

  const loginHandler = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/',
      });

      router.push('/profiles');
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const registerHandler = useCallback(async () => {
    try {
      await axios.post('/api/register', { name, email, password });

      loginHandler();
    } catch (error) {
      console.log(error);
    }
  }, [name, email, password, loginHandler]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="h-full w-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="mt-2 w-full self-center rounded-md bg-black bg-opacity-70 px-16 py-16 lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {mode === 'login' ? 'Sign in' : 'Register'}
            </h2>

            <div className="flex flex-col gap-4">
              {mode === 'register' && (
                <Input
                  id="name"
                  type="text"
                  label="Username"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              )}
              <Input
                id="email"
                type="email"
                label="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Input
                id="password"
                type="password"
                label="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
              onClick={mode === 'login' ? loginHandler : registerHandler}
              className="mt-10 w-full rounded-md bg-red-600 py-3 text-white transition hover:bg-red-700"
            >
              {mode === 'login' ? 'Login' : 'Sign up'}
            </button>
            <div className="mt-8 flex flex-row items-center justify-center gap-4">
              <div
                onClick={() => signIn('google', { callbackUrl: '/profiles' })}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80"
              >
                <FcGoogle size={32} />
              </div>
              <div
                onClick={() => signIn('github', { callbackUrl: '/profiles' })}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80"
              >
                <FaGithub size={32} />
              </div>
            </div>
            <p className="mt-12 text-neutral-500">
              {mode === 'login'
                ? 'First time using Netflix? '
                : 'Already have an account? '}
              <span
                onClick={modeToggler}
                className="mt-1 cursor-pointer text-white hover:underline"
              >
                {mode === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
