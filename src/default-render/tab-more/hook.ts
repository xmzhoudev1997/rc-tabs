import { useState } from "react";
import { XM_TAB } from '@xmzhou/rc-tabs';
import { useMemo } from "react";
import pinyinMatch from 'pinyin-match';
import { TABS_NAV } from '.././../tant-tab-nav/props';
import { DropResult } from "react-beautiful-dnd";

export default (
    tabList: XM_TAB[], onChange: TABS_NAV['onChange'] = () => {}, tabKey: XM_TAB['tabKey'],
) => {
    const [kwd, setKwd] = useState('');
    const [open, setOpen] = useState(false);
    const filterList = useMemo(() => kwd.length ? tabList?.filter(d => pinyinMatch.match(d.label, kwd)) : tabList, [kwd, tabList]);
    const handleDragEnd = async (data: DropResult) => {
        const sourceIndex = data?.source?.index ?? -1;
        const targetIndex = data?.destination?.index ?? -1;
        const sourceDropId = data?.source?.droppableId;
        const sourceTab = tabList[sourceIndex];
        const targetDropId = data?.destination?.droppableId || '';
        const targetTab = tabList[targetIndex];
        if (!sourceDropId || !sourceTab || !targetDropId || !targetTab) {
            return;
        }
        tabList.splice(sourceIndex, 1);
        tabList.splice(targetIndex, 0, sourceTab);
        if (sourceTab.fixed && tabList[targetIndex - 1]) {
            targetTab.fixed = tabList[targetIndex - 1].fixed;
        }
        if (!sourceTab.fixed && tabList[targetIndex + 1]) {
            targetTab.fixed = tabList[targetIndex + 1].fixed;
        }
        onChange(tabKey, [...tabList]);
    }
    return {
        kwd,
        setKwd,
        filterList,
        disable: !!kwd.length,
        open,
        setOpen,
        handleDragEnd,
    };
}