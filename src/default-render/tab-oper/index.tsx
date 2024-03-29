import Render from './render';
import React from 'react';
import { TABS_NAV_REF } from '.././../tant-tab-nav/props';
import { XM_TAB } from '@xmzhou/rc-tabs';

export default (
    tab: XM_TAB,
    func: TABS_NAV_REF,
) => {
    return (
        <Render
            func={func}
            tab={tab}
        />
    );
}