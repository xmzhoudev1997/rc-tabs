import { XM_TAB, useTabsNav } from "@xmzhou/rc-tabs";
import { TABS_NAV, TABS_NAV_REF } from "./props";
import { useImperativeHandle, useState } from "react";


export default (props: TABS_NAV, ref:  React.ForwardedRef<TABS_NAV_REF>) => {
    const {
        tabKey, tabList, panel,
        onTabAdd, onTabClose = () => true, onChange = () => { },
    } = props;
    const navFunc = useTabsNav(tabKey || '', tabList, onChange, panel)
    const func = {
        update: navFunc.update,
        add: navFunc.add,
        close: (tab: XM_TAB) => navFunc.close(tab, onTabClose),
        closeAll: () => navFunc.closeAll(onTabClose),
        closeOther: (tab: XM_TAB) => navFunc.closeOther(tab, onTabClose),
        closeRight: (tab: XM_TAB) => navFunc.closeRight(tab, onTabClose),
        closeSaved: navFunc.closeSaved,
        fixed: navFunc.fixed,
        edited: navFunc.edited,
    };
    useImperativeHandle(ref, () => func, []);
    return {
        func,
    }
}