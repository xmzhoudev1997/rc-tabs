import React, { FC } from "react";
import { RC_TABS_PANEL } from "./props";
import './index.less';
import classnames from 'classnames';
import useData from './hook';
const Index: FC<RC_TABS_PANEL> = (props) => {
  const {
    children, tabKey,
  } = props;
  const {
    list,
  } = useData(props);

  return (
    <div className={classnames(
      'rc-tabs-panels',
    )}>
      {
        list?.length ? list.map(d => {
          return <div
            key={d.key}
            className={classnames(
              'rc-tabs-panel',
              tabKey === d.key ? 'rc-tabs-panel-active' : ''
            )}
          >
            {children(d.key, d.tab)}
          </div>;
        }) :
          <div
            key="-1"
            className={classnames(
              'rc-tabs-panel',
              'rc-tabs-panel-active',
            )}
          >
            {children('', undefined)}
          </div>
      }
    </div>
  );
};

export default Index;