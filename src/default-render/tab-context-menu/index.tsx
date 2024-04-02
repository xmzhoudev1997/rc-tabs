import { XM_TAB } from '@tant/rc-tabs';
import Render from './render';
import React, { ReactNode } from 'react';
import { TABS_NAV, TABS_NAV_REF } from '.././../tant-tab-nav/props';

export default (
    tab: XM_TAB,
    tabNode: React.ReactNode,
    func: TABS_NAV_REF,
    contextMenus: TABS_NAV['tabContextMenus'],
    tooltip?: (tab: XM_TAB) => ReactNode,
) => {
    return (
        <Render
            tab={tab}
            func={func}
            contextMenus={contextMenus}
            tooltip={tooltip}
        >
            {tabNode}
        </Render >
    );
}