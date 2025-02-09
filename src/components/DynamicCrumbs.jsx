'use client'

import { usePathname } from "next/navigation";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function DynamicCrumbs() {
  const pathname = usePathname();
  
  const generateBreadcrumbs = () => {
    const segments = pathname
      .replace(/\/$/, '')
      .split('/')
      .filter(segment => segment !== '');

    return segments.map((segment, index) => {
      const url = `/${segments.slice(0, index + 1).join('/')}`;
      
      const formattedText = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      const isLastItem = index === segments.length - 1;

      return (
        <BreadcrumbItem key={url} className="hidden md:block">
          {isLastItem ? (
            <BreadcrumbPage>{formattedText}</BreadcrumbPage>
          ) : (
            <>
              <BreadcrumbLink href={url}>{formattedText}</BreadcrumbLink>
              <BreadcrumbSeparator />
            </>
          )}
        </BreadcrumbItem>
      );
    });
  };

  if (pathname === '/') return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
        {generateBreadcrumbs()}
      </BreadcrumbList>
    </Breadcrumb>
  );
}