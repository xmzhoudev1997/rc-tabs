// @ts-nocheck
import { RcTabsNav, RcTabsPanel } from '@xmzhou/rc-tabs';
import React from 'react';
import { useSetState } from 'ahooks';
import { RC_TAB } from 'xm-tabs/tabs-nav/props';
export default () => {
  const [state, setState] = useSetState<any>({
    tabList: [{
      key: '1',
      label: '标签页1',
      closeable: true,
    },
    {
      key: '2',
      label: '标签页2',
      closeable: true,
    },
    {
      key: '3',
      label: '标签页3',
      closeable: true,
    },
    {
      key: '5',
      label: '标签页5',
      closeable: true,
    },
    {
      key: '6',
      label: '标签页6',
      closeable: true,
    },
    {
      key: '7',
      label: '标签页7',
      closeable: true,
    },
    {
      key: '8',
      label: '标签页8',
      closeable: true,
    },
    {
      key: '4',
      label: '标签页4',
      closeable: true,
      fixed: true,
    },
    {
      key: '83',
      label: '标签页8',
      closeable: true,
    },
    {
      key: '81',
      label: '标签页81',
      closeable: true,
    },
    {
      key: '82',
      label: '标签页82',
      closeable: true,
    },
    {
      key: '84',
      label: '标签页84',
      closeable: true,
    },
    {
      key: '85',
      label: '标签页85',
      closeable: true,
    },
    {
      key: '841',
      label: '标签页841',
      closeable: true,
    },
    {
      key: '852',
      label: '标签页852',
      closeable: true,
    },
    {
      key: '843',
      label: '标签页843',
      closeable: true,
    },
    {
      key: '854',
      label: '标签页854',
      closeable: true,
    },
    ],
    tabKey: '1',
  });
  return (
    <div style={{
      display: 'flex',
      height: 400,
      flexDirection: 'column',
    }}>
      <RcTabsNav
        tabKey={state.tabKey}
        tabList={state.tabList}
        onTabKeyChange={(tabKey: string) => {
          setState({ tabKey });
        }}
        dragTransition={''}
        onDrag={(sourceIndex, targetIndex) => {
          const sourceTab = state.tabList[sourceIndex];
          const targetTab = state.tabList[targetIndex];
          if (!sourceTab || !targetTab) {
            return;
          }
          state.tabList.splice(sourceIndex, 1);
          state.tabList.splice(targetIndex, 0, sourceTab);
          if (sourceTab.fixed && state.tabList[targetIndex - 1]) {
            targetTab.fixed = state.tabList[targetIndex - 1].fixed;
          }
          if (!sourceTab.fixed && state.tabList[targetIndex + 1]) {
            targetTab.fixed = state.tabList[targetIndex + 1].fixed;
          }
          setState({ tabList: [...state.tabList] });
        }}
        tabDrag
      />
      <RcTabsPanel
        tabKey={state.tabKey}
        tabList={state.tabList}
      >
        {(tabKey: RC_TAB['key'], tab: RC_TAB) => {
          return <div style={{ height: '100%' }} suppressContentEditableWarning contentEditable >{tab?.label}</div>;
        }}
      </RcTabsPanel>
    </div>
  );
}