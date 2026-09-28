import type { HTMLAttributes, SVGProps } from "react";

import { cn } from "@/lib/utils";
import logoArtwork from "./logo3.png";

type DevPilotIconProps = HTMLAttributes<HTMLSpanElement> & {
    variant?: "color" | "mono";
};

function Mark({ mono = false }: { mono?: boolean }) {
    const foreground = mono ? "var(--background)" : "#F8FAFC";
    const accent = mono ? "var(--background)" : "#5EEAD4";

    return (
        <>
            <defs>
                <linearGradient id="devpilot-gradient" x1="8" y1="8" x2="58" y2="58" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#172554" />
                    <stop offset="0.52" stopColor="#0F766E" />
                    <stop offset="1" stopColor="#14B8A6" />
                </linearGradient>
            </defs>
            <rect
                width="64"
                height="64"
                rx="18"
                fill={mono ? "currentColor" : "url(#devpilot-gradient)"}
            />
            <path
                d="M12 38.5c4.3 8.4 13 13.5 22.7 13.5 8.1 0 14.8-3.5 19.3-9.3"
                stroke={foreground}
                strokeOpacity=".2"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M19 34.5 31.5 21 45 34.5 31.5 43 19 34.5Z"
                fill={foreground}
                fillOpacity=".12"
                stroke={foreground}
                strokeWidth="2.5"
                strokeLinejoin="round"
            />
            <path
                d="m31.5 21 1.5 13.5-1.5 8.5"
                stroke={accent}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M24.5 34.5h14"
                stroke={accent}
                strokeWidth="2.5"
                strokeLinecap="round"
            />
            <path
                d="m47 14 1.3 3.7L52 19l-3.7 1.3L47 24l-1.3-3.7L42 19l3.7-1.3L47 14Z"
                fill={accent}
            />
            <circle cx="49.5" cy="39.5" r="2.25" fill={accent} />
        </>
    );
}

export function DevPilotIcon({
    className,
    variant = "color",
    ...props
}: DevPilotIconProps) {
    const { style, ...spanProps } = props;

    return (
        <span
            aria-label="DevPilot"
            role="img"
            className={cn(
                "inline-block shrink-0 overflow-hidden rounded-[28%] bg-[#07142f] bg-contain bg-center bg-no-repeat align-middle",
                variant === "mono" && "grayscale",
                className
            )}
            style={{
                backgroundImage: `url(${logoArtwork.src})`,
                ...style,
            }}
            {...spanProps}
        />
    );
}

export function DevPilotLogo({
    className,
    ...props
}: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 220 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={cn("shrink-0", className)}
            {...props}
        >
            <Mark />
            <path
                fill="currentColor"
                d="M80 44.5V19.5h8.4c5.2 0 8.6 2.7 8.6 7.2 0 3.1-1.6 5.4-4.2 6.4l5.1 11.4h-5.9l-4.6-10.4H85.2v10.4H80Zm5.2-14.6H88c2.5 0 3.9-1.2 3.9-3.3s-1.4-3.2-3.9-3.2h-2.8v6.5ZM108.2 44.9c-6.1 0-10.1-4.2-10.1-10.6s4-10.6 10.1-10.6 10.1 4.2 10.1 10.6-4 10.6-10.1 10.6Zm0-4.5c3.1 0 4.9-2.3 4.9-6.1s-1.8-6.1-4.9-6.1-4.9 2.3-4.9 6.1 1.8 6.1 4.9 6.1ZM131.6 44.5V19.5h5.2v25h-5.2ZM145.8 44.5l8.7-25h5.7l8.7 25h-5.6l-1.5-4.6h-9.1l-1.5 4.6h-5.4Zm10.1-15.9-3.1 9.6h6.2l-3.1-9.6-3.1 9.6ZM176.8 44.9c-6.1 0-10.1-4.2-10.1-10.6s4-10.6 10.1-10.6c3.6 0 6.4 1.5 7.9 4.1l-4.4 2.5c-.7-1.3-1.9-2-3.5-2-2.8 0-4.7 2.2-4.7 6s1.9 6 4.7 6c1.6 0 2.8-.7 3.5-2l4.4 2.5c-1.5 2.6-4.3 4.1-7.9 4.1ZM199.8 44.5V19.5h8.4c5.2 0 8.6 2.7 8.6 7.2 0 3.1-1.6 5.4-4.2 6.4l5.1 11.4h-5.9l-4.6-10.4h-2.4v10.4h-5.2Zm5.2-14.6h2.8c2.5 0 3.9-1.2 3.9-3.3s-1.4-3.2-3.9-3.2h-2.8v6.5Z"
            />
        </svg>
    );
}
