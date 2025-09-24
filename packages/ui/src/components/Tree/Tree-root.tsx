import React, { createContext } from "react";
import { TreeRootTypes, UseTreeReturn } from "./tree-types";
import { cn } from "../../lib/utils";
import { useTree } from "./hook/use-tree";

const baseClass = "";

const TreeContext = createContext<UseTreeReturn | undefined>(undefined);

const TreeRoot: React.FC<TreeRootTypes> = ({
  children,
  className,
  collapsible = false,
  defaultOpen = "",
}) => {
  const treeValue = useTree({ defaultOpen, collapsible });
  return (
    <div className={cn(baseClass, className)}>
      <TreeContext.Provider value={treeValue}>{children}</TreeContext.Provider>
    </div>
  );
};

export const useTreeContext = () => {
  const context = React.useContext(TreeContext);
  if (!context) {
    throw new Error("useTreeContext must be used within a TreeRoot");
  }
  return context;
};

export default TreeRoot;
