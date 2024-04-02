# 介绍

<font color="red">此包是@tant私有包，部署在私有镜像上，非数数科技员工不能使用</font>

组件是`@tant/rc-tabs`的上层封装，底层接口可以点击[这里](https://xmzhoudev1997.github.io/rc-tabs/rc-tabs)


## 安装
``` shell
npm instal @tant/tabs
```
## API
更多API请查看[这里](https://xmzhoudev1997.github.io/rc-tabs/rc-tabs)

### 标签页-API
参数|是否必填|类型|说明|默认值
-|:-:|:-:|-|:-:
maxTabNum|<font color="grey">可选</font>|number|标签页最大数量|9999
tabContextMenus|<font color="grey">可选</font>|(tab: 标签页内容) => TABS_NAV_CONTEXT_MENU[]|右键内容|-
onTabAdd|<font color="grey">可选</font>|() => 标签页内容 | Promise\<标签页内容\>|新增标签页时触发，需要返回新增的标签页信息|-
onTabClose|<font color="grey">可选</font>|(tab: 标签页内容) => boolean | Promise、<boolean、>|标签删除时触发，返回boolean告知组件是否同意删除，常用来出现删除提示框|-
panel|<font color="grey">可选</font>|XM_TABS_PANEL_REF|面板ref的current对象，用以操作面板数据|{}
ref|<font color="grey">可选</font>|TABS_NAV_REF|标签页组件ref|-

``` typescript
type TABS_NAV_CONTEXT_MENU_KEY = 'fixed' | 'close' | 'close-all' | 'close-other' | 'close-right' | 'close-save';
type TABS_NAV_CONTEXT_MENU = { key: TABS_NAV_CONTEXT_MENU_KEY, label: ReactNode } | { type: 'divider' }
interface TABS_NAV_REF {
    update: (tabKey: XM_TAB['key'], params: Partial<XM_TAB>) => void | Promise<void>,
    add: (tab: XM_TAB) => void | Promise<void>,
    close: (tab: XM_TAB) => boolean | Promise<boolean>,
    closeAll: () => void | Promise<void>,
    closeOther: (tab: XM_TAB) => void | Promise<void>,
    closeRight: (tab: XM_TAB) => void | Promise<void>,
    closeSaved: () => void | Promise<void>,
    fixed: (tabKey: XM_TAB['key'], fixed: boolean) => void | Promise<void>,
    edited: (tabKey: XM_TAB['key'], edited: boolean) => void | Promise<void>,
}
```