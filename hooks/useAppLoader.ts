"use client";

import { useEffect, useState } from "react";

export default function useAppLoader() {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () =>
      clearTimeout(timer);
  }, []);

  return loading;
}