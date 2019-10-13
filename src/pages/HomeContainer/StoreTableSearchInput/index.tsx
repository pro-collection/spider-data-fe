import React, { FC } from 'react';
import { Input } from 'antd';
import { GetStoreTableListParams } from '../../../server';

const { Search } = Input;

interface Props {
  handleFetchList: (params: GetStoreTableListParams) => Promise<any>;
}

const SearchInput: FC<Props> = props => {

  return (
    <Search
      style={{ marginBottom: '15px' }}
      placeholder="关键字搜索"
      onSearch={(value) => props.handleFetchList({ query: value })}
    />
  );
};

export default SearchInput;
