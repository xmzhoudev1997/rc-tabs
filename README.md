# 介绍
组件采用的是导航栏和内容面板分开的模式设计。导航栏组件可以使用`RcTabsNav`，面板组件使用`RcTabsPanel`。  

组件支持标签新增、修改、关闭（自己、其他，已保存，右侧）、固定、编辑等，但是本组件是底层组件，不包含任何第三方UI组件，如需开箱即用的组件，可以使用上层封装组件`@xmzhou/semi-tabs`。

## 安装
``` shell
npm instal @xmzhou/rc-tabs
```

## API
``` typescript

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
export interface TabDrag_PARAMS {
    /**
     * 滚动容器，第一层子节点为拖拽对象
     */
    container?: HTMLElement | null;
    /**
     * 拖拽放置区的div样式
     */
    placeholderClass?: string;
    /**
     * 拖拽触发的元素样式，适用于仅拖拽元素的开头位置触发拖拽时，默认任何位置触发
     */
    dragClass?: string;
    /**
     * 元素拖拽中的样式
     */
    draggingClass?: string;
    /**
     * 拖拽方向
     * @default 'x'
     */
    asix?: 'x' | 'y';
    /**
     * 鼠标放到容器边缘触发滚动时每次滚动步长
     * @default 2
     */
    dragScrollStep?: number;
    /**
     * 鼠标放到容器边缘多少时触发滚动
     * @default 20
     */
    dragScrollTrigger?: number;
    /**
     * 拖拽元素重叠多少时触发移动位置
     * @default 20
     */
    dragStartTrigger?: number;
    /**
     * 拖拽元素移动动画
     * @default 'all 400ms linear(0, 0, 1, 1) 0s'
     */
    transition?: string;
    /**
     * 拖拽后触发
     * @default -
     */
    onDragEnd?: (startIndex: number, endIndex: number) => void;
}
```