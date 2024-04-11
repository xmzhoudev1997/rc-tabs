import React, { FC } from "react";
import './index.less';
import classnames from 'classnames';
import useData from './hook';
import { RC_TAB, RC_TABS_NAV } from "./props";

const Index: FC<RC_TABS_NAV> = (props) => {
  const {
    className,
    tabClassName,
    tabKey,
    tabList,
    tabRender,
    addNode,
    moreNode,
    extraNode,
  } = props;
  const {
    tabWidth, tabNavRef, tabOperRef, isLeft, isRight, handleChange,
  } = useData(props);

  const tabNodeRender = (tab: RC_TAB) => {
    const tabNode =
      <div
        className={classnames(
          'rc-tab',
          tabClassName,
          tabKey === tab.key ? 'rc-tab-active' : '',
        )}
        key={tab.key}
        style={{ width: tabWidth, minWidth: tabWidth }}
        onClick={() => handleChange(tab)}
      >
        {tab.label}
      </div >;
    return tabRender ? tabRender(tab, tabNode) : tabNode;
  }


  return (
    <div className={classnames('rc-tabs-nav', className)}>
      <div className="rc-tabs-bar" ref={tabNavRef}>
        {!isLeft && <div className="rc-tabs-scroll-left" />}
        <div className="rc-tabs-scroll">
          {
            tabList?.map(tabNodeRender)
          }
        </div>
        <div className="rc-tabs-oper" ref={tabOperRef}>
          {!isRight && <div className="rc-tabs-scroll-right" />}
          {!!addNode && <div className="rc-tabs-add">{addNode}</div>}
          {!!moreNode && !!addNode && <div className="rc-tabs-split" />}
          {!!moreNode && <div className="rc-tabs-more">{moreNode}</div>}
        </div>
      </div>
      {!!extraNode && <div className="rc-tabs-extra"> {extraNode} </div>}
    </div>
  );
};

export default Index;