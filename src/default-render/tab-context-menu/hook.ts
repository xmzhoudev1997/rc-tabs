import { useState } from "react";
import { XM_TAB } from '@tant/rc-tabs';
import { TABS_NAV_REF } from ".././../tant-tab-nav/props";

export default (
    func: TABS_NAV_REF,
) => {
    const [key, setKey] = useState('');
    const handleClick = (tab: XM_TAB, key: string) => {
        setKey('');
        if (key === 'fixed' && func.fixed) {
            func.fixed(tab.key, !tab.fixed);
            return;
        }
        if (key === 'close-all' && func.closeAll) {
            func.closeAll();
            return;
        }
        if (key === 'close-other' && func.closeOther) {
            func.closeOther(tab);
            return;
        }
        if (key === 'close-right' && func.closeRight) {
            func.closeRight(tab);
            return;
        }
        if (key === 'close' && func.close) {
            func.close(tab);
            return;
        }
        if (key === 'close-saved' && func.closeSaved) {
            func.closeSaved();
            return;
        }
    }
    return {
        key,
        setKey,
        handleClick,
    };
}