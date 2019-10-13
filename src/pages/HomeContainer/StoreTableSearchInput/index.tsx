import React, { FC } from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchInput: FC = () => {
  return (
    <Search
      style={{marginBottom: '15px'}}
      placeholder="关键字搜索"
      onSearch={(value) => {
        console.log(value);
      }}
    />
  );
};

export default SearchInput;
