import { ReactNode } from "react";


export interface RC_TAB {
  /**
   * 标签的唯一标识
   */
  key: string;
  /**
   * 标签的名称
   */
  label: string;
  /**
   * 标签是否可关闭
   */
  closeable?: boolean;
  /**
   * 标签是否固定
   */
  fixed?: boolean;
  /**
   * 标签是否已编辑
   */
  edited?: boolean;
  /**
   * 标签最后打开时间
   */
  _openTime?: number;
  [k: string]: any;
}

export  interface RC_TABS_NAV {
  /**
   * 当前活动标签key，需要唯一
   */
  tabKey?: RC_TAB['key'],
  /**
   * 标签列表
   */
  tabList: RC_TAB[],
  /**
   * 组件样式
   */
  className?: string;
  /**
   * 标签样式
   */
  tabClassName?: string;
  /**
   * 最大标签宽度
   */
  maxTabWidth?: number;
  /**
   * 最小标签宽度
   */
  minTabWidth?: number;
  /**
   * 自定义渲染标签添加
   * @returns 
   */
  addNode?: ReactNode;
  /**
   * 自定义渲染更多内容
   * @returns 
   */
  moreNode?: ReactNode;
  /**
   * 自定义渲染标签页右侧内容
   * @returns 
   */
  extraNode?: ReactNode;
  /**
   * tab标签支持拖拽
   */
  tabDrag?: boolean;
  /**
   * 拖拽动画，设置''即关闭动画
     * @default 'all 400ms linear(0, 0, 1, 1) 0s'
   */
  dragTransition?: string;
  /**
   * 自定义渲染标签操作部分
   * @returns 
   */
  tabRender?: (tab: RC_TAB, node: ReactNode) => ReactNode;
  /**
   * 点击tab切换时触发
   * @returns 
   */
  onTabKeyChange?: (tabKey: RC_TAB['key'] | undefined) => void;
  /**
   * 拖拽后触发，需要设置`tabDrag`=true才有效
   * @returns 
   */
  onDrag?: (oldIndex: number, newIndex: number) => void;
}