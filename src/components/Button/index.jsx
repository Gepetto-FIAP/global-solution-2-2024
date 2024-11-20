import Link from "next/link";
import clsx from "clsx";

/**
 * @param {string} text
 * @param {"primary" | "outline"} variant
 */
export function Button({
  text,
  variant = "primary",
  className = "",
  ...props
}) {
  const primaryStyle =
    "bg-[#008E28] hover:bg-[#006403] text-white font-bold py-2 px-6 rounded duration-200 ease-in-out font-nunito-sans";
  const outlineStyle =
    "border font-bold border-[#008E28] text-[#008E28] py-2 px-6 rounded hover:border-[#006403] hover:text-[#006403] duration-200 ease-in-out font-nunito-sans";
  const buttonStyle = variant === "outline" ? outlineStyle : primaryStyle;

  return (
    <button className={clsx(buttonStyle, className)} {...props}>
      {text}
    </button>
  );
}
