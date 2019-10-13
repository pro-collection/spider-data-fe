import React, { FC } from 'react';
import { Input } from 'antd';
import { GetStoreTableListParams } from '../../../server';
import { match, withRouter } from 'react-router';
import { History, Location, LocationState } from 'history';

const { Search } = Input;

interface Props {
  handleFetchList: (params: GetStoreTableListParams) => Promise<any>;
  history: History;
  location: Location<LocationState>;
  match: match;
}

const SearchInput: FC<Props> = props => {

  console.log(props.history);

  return (
    <Search
      style={{ marginBottom: '15px' }}
      placeholder="关键字搜索"
      onSearch={(value) => props.handleFetchList({ query: value })}
    />
  );
};

export default withRouter(SearchInput);
