import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
  loading: number;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoadingState] = useState(0);

  const setLoading = (percent: number) => {
    setLoadingState(percent);
    // If we set progress back below 100, show the loading screen again
    if (percent < 100) setIsLoading(true);
  };

  // keep compatibility with your existing code
  useEffect(() => {}, [loading]);

  const value: LoadingType = {
    isLoading,
    setIsLoading,
    setLoading,
    loading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
