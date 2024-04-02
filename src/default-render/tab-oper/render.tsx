import React, { FC } from 'react';
import { TABS_NAV_REF } from '.././../tant-tab-nav/props';
import { XM_TAB } from '@tant/rc-tabs';
import { TaClose, TaPin, TaPinUnsave, TaUnsave } from '@tant/icons';
import './index.less';

interface Props {
    tab: XM_TAB,
    func: TABS_NAV_REF,
}

const Index: FC<Props> = ({
    tab, func
}) => {
    if (tab.fixed) {
        if (tab.edited) {
            return <TaPinUnsave className="tant-tab-fixed-unsave" onClick={() => func.fixed(tab.key, false)} />;
        }
        return <TaPin className="tant-tab-fixed" onClick={() => func.fixed(tab.key, false)} />;
    }
    if (tab.edited) {
        if (!tab.closeable) {
            return <TaUnsave className="tant-tab-unsave" />;
        }
        return <div className="tant-tab-unsave-hover">
            <TaUnsave className="tant-tab-unsave" />
            <TaClose className="tant-tab-close" onClick={() => func.close(tab)} />
        </div>
    }
    if (tab.closeable) {
        return <TaClose className="tant-tab-close" onClick={() => func.close(tab)} />;
    }
    return <div />;
}

export default Index;