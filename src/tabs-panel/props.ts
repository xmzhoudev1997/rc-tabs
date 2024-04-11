import { ReactNode } from "react";
import { RC_TAB } from "../tabs-nav/props";


export interface RC_TABS_PANEL {
  /**
   * 标签缓存数量，超过的将被清除dom
   */
  cacheNum?: number,
  /**
   * 固定标签缓存数量，超过的将被清除dom
   */
  fixedCacheNum?: number,
  /**
   * 子元素
   */
  children: (tabKey: RC_TAB['key'], tab?: RC_TAB) => ReactNode;
  
  /**
   * 当前活动标签key，需要唯一
   */
  tabKey?: RC_TAB['key'],
  /**
   * 标签列表
   */
  tabList: RC_TAB[],
}