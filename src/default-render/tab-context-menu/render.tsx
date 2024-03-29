import { Dropdown, Tooltip } from '@tant/ui-next';
import React, { FC, ReactNode } from 'react';
import { XM_TAB } from '@xmzhou/rc-tabs';
import useData from './hook';
import { TABS_NAV, TABS_NAV_REF } from '.././../tant-tab-nav/props';
import './index.less';

interface Props {
    tab: XM_TAB,
    children: ReactNode,
    func: TABS_NAV_REF,
    contextMenus: TABS_NAV['tabContextMenus'],
    tooltip?: (tab: XM_TAB) => ReactNode,
}

const Index: FC<Props> = ({
    tab, children, func,
    contextMenus = () => [], tooltip,
}) => {
    const { key, setKey, handleClick, } = useData(
        func,
    );
    if (key === tab.key) {
        return <Dropdown
            key={tab.key}
            trigger={["contextMenu"]}
            menu={{
                items: contextMenus(tab),
                onClick: ({ key }) => handleClick(tab, key),
            }}
            visible={key === tab.key}
            onVisibleChange={v => {
                setKey(v ? tab.key : '')
            }}
        >{children}</Dropdown>;
    }
    return (
        <Tooltip
            placement='bottomLeft'
            className='tant-tab-tooltip'
            mouseLeaveDelay={0}
            mouseEnterDelay={0.5}
            title={tooltip ? tooltip(tab) : `${tab.label}${tab.label}${tab.label}${tab.label}${tab.label}${tab.label}${tab.label}`}
        >
            <Dropdown
                key={tab.key}
                trigger={["contextMenu"]}
                menu={{
                    items: contextMenus(tab),
                    onClick: ({ key }) => handleClick(tab, key),
                }}
                placement="bottom"
                visible={key === tab.key}
                onVisibleChange={v => {
                    setKey(v ? tab.key : '')
                }}
            >{children}</Dropdown>
        </Tooltip>
    );
}

export default Index;