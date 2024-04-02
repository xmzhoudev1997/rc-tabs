import { XM_TAB } from '@tant/rc-tabs';
import Render from './render';
import React from 'react';
import { TABS_NAV, TABS_NAV_REF } from '.././../tant-tab-nav/props';

export default (
    func: TABS_NAV_REF,
    tabList: XM_TAB[],
    tabKey: TABS_NAV['tabKey'],
    tabIconRender?: TABS_NAV['tabIconRender'],
    tabRender?: TABS_NAV['tabRender'],
    dragDisabled?: boolean,
    onChange?: TABS_NAV['onChange'],
) => {
    return (
        <Render
            func={func}
            tabKey={tabKey}
            tabList={tabList}
            tabIconRender={tabIconRender}
            tabRender={tabRender}
            onChange={onChange}
            dragDisabled={dragDisabled}
        />
    );
}