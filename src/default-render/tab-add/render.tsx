// @ts-nocheck
import { Button } from '@tant/ui-next';
import React, { FC } from 'react';
import useData from './hook';
import { TABS_NAV, TABS_NAV_REF } from '.././../tant-tab-nav/props';
import { TaAdd1 } from '@tant/icons';

interface Props {
    func: TABS_NAV_REF,
    onTabAdd: TABS_NAV['onTabAdd'],
    disabled: boolean,
}

const Index: FC<Props> = ({
    func, onTabAdd, disabled
}) => {
    const { handleAdd } = useData(
        func, onTabAdd
    );
    return (
        <Button
            onClick={handleAdd}
            icon={<TaAdd1 />}
            type="text"
            disabled={disabled}
        />
    );
}

export default Index;