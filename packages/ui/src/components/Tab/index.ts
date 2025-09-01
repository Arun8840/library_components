import { TabContent } from "./tab-content"
import { TabList } from "./tab-list"
import { TabRoot } from "./tab-root"
import { TabTrigger } from "./tab-trigger"

const Tab = Object.assign(TabRoot, {
  List: TabList,
  Trigger: TabTrigger,
  Content: TabContent,
})

export { Tab }
