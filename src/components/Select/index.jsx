export function Select({ ...props }) {
  return (
    <>
      <label
        htmlFor={props.id}
        className="block text-sm font-semibold text-black mb-1"
      >
        {props.label}
      </label>
      <select
        className="w-full h-14 p-2 border-gray-300 border-2 text-black placeholder:text-black rounded-md shadow-sm"
        {...props}
      />
    </>
  );
}
