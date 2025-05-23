"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NProgress from "nprogress";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return children;
}
