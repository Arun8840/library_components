import { TreeGroup } from "./Tree-group";
import { TreeItem } from "./Tree-Item";
import TreeRoot from "./Tree-root";

const Tree = Object.assign(TreeRoot, {
  Group: TreeGroup,
  Item: TreeItem,
});

export { Tree };
