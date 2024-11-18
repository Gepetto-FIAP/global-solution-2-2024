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
    "bg-[#FF9800] hover:bg-[#C26100] text-white font-bold py-2 px-6 rounded duration-200 ease-in-out font-nunito-sans";
  const outlineStyle =
    "border font-bold border-[#FF9800] text-[#FF9800] py-2 px-6 rounded hover:border-[#C26100] hover:text-[#C26100] duration-200 ease-in-out font-nunito-sans";
  const buttonStyle = variant === "outline" ? outlineStyle : primaryStyle;

  return (
    <button className={clsx(buttonStyle, className)} {...props}>
      {text}
    </button>
  );
}
