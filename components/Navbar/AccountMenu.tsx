import { signOut } from 'next-auth/react';

import { useCurrentUser } from '@/hooks/useCurrentUser';

interface Props {
  visible?: boolean;
}

export const AccountMenu: React.FC<Props> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="absolute right-0 top-14 flex w-56 flex-col border-2 border-gray-800 bg-black py-5">
      <div className="flex flex-col gap-3">
        <div className="group/item flex w-full flex-row items-center gap-3 px-3">
          <img src="/images/default-blue.png" alt="" className="w-8 rounded-md" />
          <p className="text-sm text-white group-hover/item:underline">
            {currentUser?.name}
          </p>
        </div>
      </div>
      <hr className="my-4 h-px border-0 bg-gray-600" />
      <div
        onClick={() => signOut()}
        className="px-3 text-center text-sm text-white hover:underline"
      >
        Sign out of Netflix
      </div>
    </div>
  );
};
