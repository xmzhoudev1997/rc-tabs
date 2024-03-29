// @ts-nocheck
import { Dropdown, Button, Search, Empty } from '@tant/ui-next';
import React, { FC } from 'react';
import { XM_TAB } from '@xmzhou/rc-tabs';
import useData from './hook';
import './index.less';
import { TaArrowDown, TaDrag } from '@tant/icons';
import { TABS_NAV, TABS_NAV_REF } from '.././../tant-tab-nav/props';
import { DragDropContext, Draggable, DraggableProvided, Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import OperRender from './oper-render';

interface Props {
    func: TABS_NAV_REF,
    tabKey: TABS_NAV['tabKey'],
    tabList: XM_TAB[],
    tabIconRender?: TABS_NAV['tabIconRender'],
    tabRender?: TABS_NAV['tabRender'],
    dragDisabled?: boolean,
    onChange?: TABS_NAV['onChange'],
}

const Index: FC<Props> = ({
    func, tabKey, tabList, tabIconRender, tabRender, dragDisabled, onChange = () => { },
}) => {
    const { kwd, setKwd, disable, filterList, open, setOpen, handleDragEnd} = useData(
        tabList, onChange, tabKey
    );
    const tabNodeRender = (tab: XM_TAB, dragging: boolean, provided: DraggableProvided) => {
        const iconNode = tabIconRender ? tabIconRender(tab) : null;
        const tabNode =
            <div
                key={tab.key}
                className={classNames(
                    'tant-more-tab',
                    tabKey === tab.key ? 'tant-more-tab-active' : '',
                    dragging ? 'tant-more-tab-dragging' : '',
                )}
                ref={provided?.innerRef}
                {...(provided?.dragHandleProps || {})}
                {...(provided?.draggableProps || {})}
                onClick={() => tabKey === tab.key ? null : onChange(tab.key, [...tabList])}
            >
                {
                    !dragDisabled && !disable && <TaDrag className="tant-more-tab-drag" />
                }
                {
                    !!iconNode && <div className="tant-more-tab-icon" onMouseDown={e => e.stopPropagation()}>
                        {iconNode}
                    </div>
                }
                <div className="tant-more-tab-name">
                    {tabRender ? tabRender(tab) : tab.label}
                </div>
                {
                    <div className="xm-tab-oper" >
                        <OperRender tab={tab} func={func} />
                    </div>
                }
            </div >;
        return tabNode;
    }
    const dropdownContent = <div className="tant-more-dropdown">
        <Search value={kwd} onChange={setKwd as any} size="middle" bordered={false} allowClear />
        <div className="tant-more-dropdown-split"/>
        {
            !filterList.length ? <Empty

            /> : <DragDropContext
                onDragEnd={handleDragEnd}
            >
                <Droppable
                    droppableId="more"
                    isDropDisabled={dragDisabled || disable}
                    renderClone={(provided: any, snapshot: any, descriptor: any) => {
                        const index = descriptor?.source?.index;
                        const tab = tabList[index];
                        if (!tab) {
                            return null;
                        }
                        if (provided.draggableProps.style?.transform) {
                            provided.draggableProps.style.transform = provided.draggableProps.style?.transform.replace(/\([\-0-9]+px/, '(0px');
                        }
                        return tabNodeRender(tab, true, provided) as any
                    }}
                >
                    {
                        (dropProvided) => {
                            return <div className="tant-more-scroll" ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
                                {
                                    filterList?.map((tab, index) => {
                                        return <Draggable draggableId={tab.key} index={index} key={tab.key} isDragDisabled={dragDisabled || disable}>
                                            {
                                                (provided, snapshot) => {
                                                    return tabNodeRender(tab, snapshot.isDragging, provided) as any
                                                }
                                            }
                                        </Draggable>
                                    })
                                }
                                {
                                    dropProvided.placeholder
                                }
                            </div>

                        }
                    }
                </Droppable>
            </DragDropContext>
        }
    </div>

    return (
        <Dropdown
            trigger={["click"]}
            menu={{
                items: [],
            }}
            open={open}
            onVisibleChange={(v: boolean) => {
                setOpen(v);
                if (v) {
                    setKwd('');
                }
            }}
            dropdownRender={() => dropdownContent}
        >
            <Button
                icon={<TaArrowDown />}
                type="text"
            />
        </Dropdown>
    );
}

export default Index;