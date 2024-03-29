import Render from './render';
import React from 'react';
import { TABS_NAV, TABS_NAV_REF } from '.././../tant-tab-nav/props';

export default (
    func: TABS_NAV_REF,
    onTabAdd: TABS_NAV['onTabAdd'],
    disabled: boolean,
) => {
    return (
        <Render
            func={func}
            onTabAdd={onTabAdd}
            disabled={disabled}
        />
    );
}