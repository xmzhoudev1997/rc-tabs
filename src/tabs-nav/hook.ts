import { useScroll, useSize } from "ahooks";
import { RC_TAB, RC_TABS_NAV } from './props'
import { useEffect, useMemo, useRef, useState } from "react";
import useTabDrag from "../hooks/use-tab-drag";

export default ({
  tabKey, tabList, maxTabWidth = 216, minTabWidth = 100, tabDrag, dragTransition,
  onDrag = () => {}, onTabKeyChange = () => {}
}: RC_TABS_NAV) => {
  const [isRight, setIsRight] = useState(true);
  const tabNavRef = useRef<HTMLDivElement>(null);
  const tabOperRef = useRef<HTMLDivElement>(null);
  const tabNavSize = useSize(tabNavRef);
  const tabOperSize = useSize(tabOperRef);
  const scrollDom: HTMLDivElement | undefined | null = tabNavRef.current?.querySelector('.rc-tabs-scroll');
  const tabScrollPosition = useScroll(scrollDom);
  useTabDrag({
    container: tabDrag ? scrollDom : null,
    placeholderClass: 'rc-tab',
    dragClass: 'rc-tab',
    draggingClass: 'rc-tab-dragging',
    onDragEnd: onDrag,
    transition: dragTransition,
  })
  const tabWidth = useMemo(() => {
    if (!tabNavSize?.width || !tabList?.length || !minTabWidth || !maxTabWidth) {
      return 0;
    }
    const length = tabList?.length;
    const width = tabNavSize?.width - (tabOperSize?.width || 0);
    if (length * maxTabWidth <= width) {
      return maxTabWidth;
    }
    if (length * minTabWidth <= width) {
      return Math.floor(width / length);
    }
    return minTabWidth;
  }, [tabNavSize?.width, tabOperSize?.width, tabList?.length]);
  const handleChange = (tab: RC_TAB) => {
    if (tabKey === tab.key) {
      return;
    }
    tab._openTime = Date.now();
    onTabKeyChange(tab.key);
  }
  useEffect(() => {
    if (!tabKey || !scrollDom) {
      return;
    };
    const index = tabList.findIndex(t => t.key === tabKey);
    if (scrollDom.children[index]) {
      (scrollDom.children[index] as any).scrollIntoViewIfNeeded();
    }
  }, [tabKey]);
  useEffect(() => {
    const left = tabScrollPosition?.left || 0;
    const offsetWidth = scrollDom?.offsetWidth || 0;
    const scrollWidth = scrollDom?.scrollWidth || 0 - 1;
    setIsRight(scrollWidth <= offsetWidth || left + offsetWidth >= scrollWidth)
  }, [tabScrollPosition, scrollDom?.offsetWidth, scrollDom?.scrollWidth]);
  return {
    tabWidth,
    tabNavRef,
    tabOperRef,
    isLeft: !tabScrollPosition?.left,
    isRight,
    handleChange,
  }
}