import { createContext, useState, type FC, type PropsWithChildren } from 'react';
import type { Graph } from '@antv/x6';

interface GraphContextValue {
  graph: Graph | null;
  setGraph: (graph: Graph | null) => void;
}

export const GraphContext = createContext<GraphContextValue>({
  graph: null,
  setGraph: () => {},
});

export const GraphProvider: FC<PropsWithChildren> = ({ children }) => {
  const [graph, setGraph] = useState<Graph | null>(null);

  return (
    <GraphContext.Provider value={{ graph, setGraph }}>
      {children}
    </GraphContext.Provider>
  );
};