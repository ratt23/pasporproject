import * as Icons from "lucide-react";

const FALLBACK_ICON = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
    >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
    </svg>
);

const IconBadge = ({ iconKey, size = "md" }) => {
    const sizeClasses = {
        sm: "h-9 w-9",
        md: "h-11 w-11",
        lg: "h-14 w-14",
    };

    const LucideIcon = iconKey ? Icons[iconKey] : null;

    return (
        <div
            className={`${sizeClasses[size]} flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 flex-shrink-0`}
        >
            {LucideIcon ? <LucideIcon className="h-5 w-5" strokeWidth={2} /> : FALLBACK_ICON}
        </div>
    );
};

export default IconBadge;
