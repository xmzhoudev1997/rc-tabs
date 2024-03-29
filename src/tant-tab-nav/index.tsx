import React, { FC, forwardRef, ReactNode } from 'react';
import './index.less';
import useData from './hook';
import { TabsNav, XM_TAB } from '@xmzhou/rc-tabs';
import classNames from 'classnames';
// import { Dropdown, Tooltip, Button, Popover } from '@douyinfe/semi-ui';
// import { IconChevronDown, IconPlus } from '@douyinfe/semi-icons';
// import { TaPin, TaClose, TaAdd1, TaPinUnsave, TaUnsave } from '@tant/icons';
import { TABS_NAV, TABS_NAV_REF } from './props';
import defaultTabContextMenuRender from '../default-render/tab-context-menu';
import defaultTabAddRender from '../default-render/tab-add';
import defaultTabOperRender from '../default-render/tab-oper';
import defaultTabMoreRender from '../default-render/tab-more';

const Index = forwardRef<TABS_NAV_REF, TABS_NAV>((props, ref) => {
    const {
        maxTabNum = 9999, className, tabList = [], tabClassName, tabContextMenus,
        tabRender, tabContextMenuRender, tabOperRender, addRender,
        moreRender, onTabAdd, tabKey, tabIconRender, onChange, dragDisabled = false,
        tabTipRender,
        ...extraProps
    } = props;
    const {
        func,
    } = useData(props, ref);
    return (
        <TabsNav
            tabKey={tabKey}
            tabList={tabList}
            className={classNames(className, 'tant-tabs—nav')}
            tabClassName={classNames(tabClassName, 'tant-tab')}
            tabContextMenuRender={tabContextMenuRender || ((tab: XM_TAB, tabNode: ReactNode) => defaultTabContextMenuRender(tab, tabNode, func, tabContextMenus, tabTipRender as any))}
            tabOperRender={tabOperRender || ((tab: XM_TAB) => defaultTabOperRender(tab, func))}
            addRender={addRender || (() => defaultTabAddRender(func, onTabAdd, tabList?.length >= maxTabNum))}
            moreRender={moreRender || (() => defaultTabMoreRender(func, tabList, tabKey || '', tabIconRender, tabRender, dragDisabled, onChange))}
            tabIconRender={tabIconRender}
            tabRender={tabRender}
            onChange={onChange}
            dragDisabled={dragDisabled}
            {...extraProps}
        />
    );
});

export default Index;