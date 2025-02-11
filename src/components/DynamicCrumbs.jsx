"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";


export default function Breadcrumbs() {
    const pathname = usePathname();

    // Remove trailing slash and split path into segments
    const segments = pathname.replace(/\/$/, "").split("/").filter(Boolean);

    return (
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="flex items-center gap-1 text-gray-200 hover:text-gray-400">
                <Home className="w-4 h-4" />
                <span>Home</span>
            </Link>

            {segments.length > 0 && <span className="text-gray-400"><ChevronRight size={15} /></span>}

            {segments.map((segment, index) => {
                const href = `/${segments.slice(0, index + 1).join("/")}`;
                const formattedText = segment
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase());

                return (
                    <div key={href} className="flex items-center space-x-2">
                        {index !== 0 && <span className="text-gray-400">/</span>}
                        {index === segments.length - 1 ? (
                            <span className="text-gray-100 font-medium">{formattedText}</span>
                        ) : (
                            <Link href={href} className="text-gray-100 hover:text-gray-900">
                                {formattedText}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
