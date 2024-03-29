import { XM_TABS_NAV, XM_TAB, XM_TABS_PANEL_REF } from '@xmzhou/rc-tabs';
import { ReactNode } from 'react';

export interface TABS_NAV_REF {
    update: (tabKey: XM_TAB['key'], params: Partial<XM_TAB>) => void | Promise<void>,
    add: (tab: XM_TAB) => void | Promise<void>,
    close: (tab: XM_TAB) => boolean | Promise<boolean>,
    closeAll: () => void | Promise<void>,
    closeOther: (tab: XM_TAB) => void | Promise<void>,
    closeRight: (tab: XM_TAB) => void | Promise<void>,
    closeSaved: () => void | Promise<void>,
    fixed: (tabKey: XM_TAB['key'], fixed: boolean) => void | Promise<void>,
    edited: (tabKey: XM_TAB['key'], edited: boolean) => void | Promise<void>,
}

export type TABS_NAV_CONTEXT_MENU_KEY = 'fixed' | 'close' | 'close-all' | 'close-other' | 'close-right' | 'close-save';
export type TABS_NAV_CONTEXT_MENU = { key: TABS_NAV_CONTEXT_MENU_KEY, label: ReactNode } | { type: 'divider' }

export interface TABS_NAV extends XM_TABS_NAV {
    maxTabNum?: number;
    tabContextMenus?: (tab: XM_TAB) => TABS_NAV_CONTEXT_MENU[];
    onTabAdd?: () => XM_TAB | Promise<XM_TAB>;
    onTabClose?: (tab: XM_TAB) => boolean | Promise<boolean>;
    panel?: XM_TABS_PANEL_REF,
    ref?:  TABS_NAV_REF,
  }