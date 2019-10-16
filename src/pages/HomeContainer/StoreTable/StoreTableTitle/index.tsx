import React, { FC } from 'react';
import { Icon } from 'antd';
import cn from 'classnames';
import { get } from 'lodash';

import style from './index.less';
import { History, Location, LocationState } from 'history';
import { GetStoreTableListParams } from '../../../../server';

interface Props {
  orderType: string;
  iconType: string;
  history: History;
  location: Location<LocationState>;
  handleFetchList: (params: GetStoreTableListParams) => void;
}

const StoreTableTitle: FC<Props> = props => {
  console.log(props.location);
  const state = props.location.state;
  const onClick = () => {
    const params = Object.assign({}, props.location.state, {
      order: get(state, 'order') === props.orderType ? '' : props.orderType,
    });

    props.history.push({
      state: params,
    });
    props.handleFetchList(params);
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        style.store_table_header,
        get(state, 'order') === props.orderType && style.active,
      )}>
      {props.children} <Icon style={{ fontSize: '16px', marginLeft: '6px' }} type={props.iconType}/>
    </div>
  );
};

export default StoreTableTitle;
