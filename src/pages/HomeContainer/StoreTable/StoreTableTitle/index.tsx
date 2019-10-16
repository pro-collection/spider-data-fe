import React, { FC } from 'react';
import { Icon } from 'antd';

interface Props {
  iconType: string;
}

const StoreTableTitle: FC<Props> = props => {
  return (
    <div>
      {props.children} <Icon type={props.iconType}/>
    </div>
  );
};

export default StoreTableTitle;
