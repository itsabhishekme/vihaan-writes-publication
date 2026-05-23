"use client";

import AppLoader from "@/components/AppLoader";
import useAppLoader from "@/hooks/useAppLoader";

export default function LoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const loading =
    useAppLoader();

  return (
    <>
      <AppLoader
        loading={loading}
      />

      {!loading && children}
    </>
  );
}