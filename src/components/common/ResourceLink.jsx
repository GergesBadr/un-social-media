import { HiLink } from "react-icons/hi2";

function ResourceLink({
  children,
  link,
  label,
  withIcon = false,
  text = "text-indigo-600 hover:text-indigo-700",
}) {
  return (
    <a
      href={link}
      aria-label={label && label}
      target="_blank"
      className={`group/link ml-1 font-medium underline underline-offset-4 hover:no-underline ${text}`}
    >
      <span>{children}</span>
      {withIcon && (
        <HiLink className="inline duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
      )}
    </a>
  );
}

export default ResourceLink;
