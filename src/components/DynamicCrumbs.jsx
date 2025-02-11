"use client";

import { usePathname } from "next/navigation";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";

export default function DynamicCrumbs() {
  const pathname = usePathname();

  const generateBreadcrumbs = () => {
    const segments = pathname
      .replace(/\/$/, '')
      .split('/')
      .filter(segment => segment !== '');

    const breadcrumbs = [];

    breadcrumbs.push(
      <BreadcrumbItem key="home" className="hidden md:flex items-center">
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        {segments.length > 0 && <BreadcrumbSeparator />}
      </BreadcrumbItem>
    );

    segments.forEach((segment, index) => {
      const url = `/${segments.slice(0, index + 1).join('/')}`;
      const formattedText = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      if (index === segments.length - 1) {
        breadcrumbs.push(
          <BreadcrumbPage key={url}>{formattedText}</BreadcrumbPage>
        );
      } else {
        breadcrumbs.push(
          <>
            <BreadcrumbItem key={url} className="hidden md:block">
              <BreadcrumbLink href={url}>{formattedText}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator key={`${url}-separator`} />
          </>
        );
      }
    });

    return breadcrumbs;
  };

  if (pathname === '/') return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>{generateBreadcrumbs()}</BreadcrumbList>
    </Breadcrumb>
  );
}
