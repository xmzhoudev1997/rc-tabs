// @ts-nocheck
import React, { FC } from 'react';
import { TABS_NAV_REF } from '.././../tant-tab-nav/props';
import { XM_TAB } from '@tant/rc-tabs';
import { TaClose, TaPin, TaPinUnsave, TaUnsave } from '@tant/icons';
import { Button } from '@tant/ui-next';

interface Props {
    tab: XM_TAB,
    func: TABS_NAV_REF,
}

const Index: FC<Props> = ({
    tab, func
}) => {
    if (tab.fixed) {
        if (tab.edited) {
            return <TaPinUnsave className="tant-more-tab-fixed-unsave" onClick={() => func.fixed(tab.key, false)} />;
        }
        return <TaPin className="tant-more-tab-fixed" onClick={() => func.fixed(tab.key, false)} />;
    }
    if (tab.edited) {
        if (!tab.closeable) {
            return <TaUnsave className="tant-more-tab-unsave" />;
        }
        return <div className="tant-more-tab-unsave-hover">
            <TaUnsave className="tant-more-tab-unsave" />
            <Button
                type="text"
                icon={<TaPin />}
                className="tant-more-tab-unfixed"
                size="small"
                onClick={(e: any) => {
                    func.fixed(tab.key, true);
                    e.stopPropagation();
                }}
            />

            {
                !!tab.closeable &&
                <Button
                    type="text"
                    icon={<TaClose />}
                    className="tant-more-tab-close"
                    size="small"
                    onClick={(e: any) => {
                        func.close(tab);
                        e.stopPropagation();
                    }}
                />
            }
        </div>
    }
    return <>
        <Button
            type="text"
            icon={<TaPin />}
            className="tant-more-tab-unfixed"
            size="small"
            onClick={(e: any) => {
                func.fixed(tab.key, true);
                e.stopPropagation();
            }}
        />
        {
            !!tab.closeable &&
            <Button
                type="text"
                icon={<TaClose />}
                className="tant-more-tab-close"
                size="small"
                onClick={(e: any) => {
                    func.close(tab);
                    e.stopPropagation();
                }}
            />
        }
    </>
    return <div />;
}

export default Index;