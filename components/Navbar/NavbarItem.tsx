interface Props {
  label: string;
  active?: boolean;
}

export const NavbarItem: React.FC<Props> = ({ label, active }) => {
  return (
    <div
      className={
        active
          ? 'cursor-default text-white'
          : 'cursor-pointer text-gray-200 transition hover:text-gray-300'
      }
    >
      {label}
    </div>
  );
};
