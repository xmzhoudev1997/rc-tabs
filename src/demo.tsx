
// @ts-nocheck
import { TabsPanel } from '@tant/rc-tabs';
import React, { useEffect, useRef } from 'react';
import { useSetState } from 'ahooks';
import { TaLanguage } from '@tant/icons';
import { TantTabNav } from '@tant/tabs';
import { XM_TAB } from '@tant/rc-tabs';
export default () => {
    const [state, setState] = useSetState<any>({
        tabList: [{
            key: '1',
            label: '1',
        }],
        tabKey: '1',
    });
    const panelRef = useRef<any>(null);
    const navRef = useRef<any>(null);
    return (
        <div style={{
            display: 'flex',
            height: 400,
            flexDirection: 'column',
        }}>
            <TantTabNav
                tabKey={state.tabKey}
                tabList={state.tabList}
                onChange={(tabKey, tabList) => {
                    console.log(tabKey, tabList);
                    setState({ tabKey, tabList });
                }}
                onTabAdd={() => ({
                    label: `空白标签页${Date.now()}`,
                    closeable: true,
                    fixed: false,
                    key: String(Date.now()),
                })}
                tabIconRender={() => {
                    return <TaLanguage style={{ display: 'flex' }} />
                }}
                tabContextMenus={(tab: XM_TAB) => {
                    const contextMenus = [
                        {
                            key: 'fixed',
                            label: tab.fixed ? '取消固定' : '固定标签页',
                        },
                        {
                            node: 'divider',
                        },
                        {
                            key: 'close-other',
                            label: '关闭其他',
                        },
                        {
                            key: 'close-right',
                            label: '关闭右侧',
                        },
                        {
                            key: 'close-all',
                            label: '关闭所有',
                        },
                        {
                            key: 'close-saved',
                            label: '关闭已保存',
                        },
                    ];
                    if (tab.closeable) {
                        contextMenus.splice(2, 0, {
                            key: 'close',
                            label: '关闭',
                        });
                    }
                    return contextMenus;
                }}
                tabTipRender={(tab: XM_TAB) => {
                    return <>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: 4,
                            color: 'var(--tant-text-white-color-text2-1)'
                        }}>
                            <TaLanguage style={{ color: '#1E76F0' }} />
                            {tab.label}
                        </div>
                        <div style={{
                            color: '#FFFFFFB2',
                            font: 'var(    --tant-description-font-description-regular)'
                        }}>
                            最近编辑：03/28 19:00
                        </div>
                    </>
                }}
                ref={navRef}
                panel={panelRef}
            />
            <TabsPanel
                ref={panelRef}
            >
                {(tabKey: string) => {
                    console.log(tabKey);
                    const tab = state.tabList.find(t => t.key === tabKey);
                    return <div
                        style={{ height: '100%' }}
                        suppressContentEditableWarning
                        contentEditable
                        onInput={(e) => {
                            navRef.current?.edited(tabKey, true)
                        }}
                    >{tab?.label}</div>;
                }}
            </TabsPanel>
        </div>
    );
}