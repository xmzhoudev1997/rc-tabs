import { useMemo } from "react";
import { RC_TABS_PANEL } from "./props";

export default ({
  cacheNum = 5, fixedCacheNum = 10, tabKey, tabList
}: RC_TABS_PANEL) => {
  const list = useMemo(() => {
    const fixedList = tabList.filter(d => d.fixed).sort((a, b) => (b._openTime || 0) - (a._openTime || 0)).slice(0, fixedCacheNum);
    const unFixedList = tabList.filter(d => !d.fixed).sort((a, b) => (b._openTime || 0) - (a._openTime || 0)).slice(0, cacheNum);
    return [...fixedList, ...unFixedList];
  }, [tabKey]);

  return {
    list,
  }
}