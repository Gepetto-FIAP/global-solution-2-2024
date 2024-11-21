export function OngRow({ ongName, ongEmail, ...props }) {
  return (
    <label className="flex items-start space-x-2">
      <input
        type="radio"
        className="mt-1 h-4 w-4 text-green-500 focus:ring-green-400"
        name="ong"
        value={ongName}
        {...props}
      />
      <div>
        <p className="text-gray-800 font-semibold">{ongName}</p>
        <p className="text-sm text-gray-500">{ongEmail}</p>
      </div>
    </label>
  );
}
