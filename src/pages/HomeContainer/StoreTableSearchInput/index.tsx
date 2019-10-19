import React, { FC, useState } from 'react';
import { Input } from 'antd';
import { get } from 'lodash';

import { match, withRouter } from 'react-router';
import { History, Location, LocationState } from 'history';
import { GetStoreTableListParams } from '../../../server';

const { Search } = Input;

interface Props {
  handleFetchList: (params: GetStoreTableListParams) => Promise<any>;
  history: History;
  location: Location<LocationState>;
  match: match;
}

const SearchInput: FC<Props> = props => {
  const [value, updateValue] = useState(get(props.location.state, 'query'));

  return (
    <Search
      allowClear
      value={value}
      onChange={event => updateValue(event.target.value)}
      style={{ marginBottom: '15px' }}
      placeholder="关键字搜索"
      onSearch={(searchValue) => {
        props.history.push({
          state: { query: searchValue },
        });
        updateValue(searchValue);
        props.handleFetchList({ query: searchValue });
      }}
    />
  );
};

export default withRouter(SearchInput);
