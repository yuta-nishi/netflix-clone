interface Props {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  type?: string;
}

export const Input: React.FC<Props> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        id={id}
        onChange={onChange}
        value={value}
        type={type}
        className="peer block w-full appearance-none rounded-md bg-neutral-700 px-6 pb-1 pt-6 text-base text-white invalid:border-b-2 focus:outline-none focus:ring-0"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute left-6 top-4 z-10 origin-[0]  -translate-y-3 scale-75 transform text-base text-zinc-400 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-x-3 peer-focus:scale-75"
      >
        {label}
      </label>
    </div>
  );
};
