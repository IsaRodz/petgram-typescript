import { createContext, ReactNode, useState } from 'react';

interface IFeedContext {
  page: number;
  setPage(page: number): void;
}

interface IContextProviderProps {
  children: ReactNode;
}

export const FeedContext = createContext<IFeedContext>({
  page: 0,
  setPage: () => {}
});

export default function FeedProvider(props: IContextProviderProps) {
  const [page, setPage] = useState(0);

  return (
    <FeedContext.Provider
      value={{
        page,
        setPage
      }}
    >
      {props.children}
    </FeedContext.Provider>
  );
}
