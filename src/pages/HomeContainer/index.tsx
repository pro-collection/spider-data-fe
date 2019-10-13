import React, { FC, useEffect, useState } from 'react';
import styles from './index.less';
import StoreTableSearchInput from './StoreTableSearchInput';
import StoreTable from './StoreTable';
import { getStoreTableList, GetStoreTableListParams, TableList } from '../../server';
import { message } from 'antd';

const HomeContainer: FC = () => {
  const [storeList, updateStoreList] = useState<TableList[]>([]);

  /**
   * 列表数据请求方法
   * @param params
   */
  const handleFetchList = (params: GetStoreTableListParams) =>
    getStoreTableList(params)
      .then(res => updateStoreList(res))
      .catch(err => message.error(err.message));

  useEffect(() => {
    handleFetchList({
      size: 10,
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2>爬虫数据</h2>
      <StoreTableSearchInput
        handleFetchList={handleFetchList}
      />
      <StoreTable
        handleFetchList={handleFetchList}
        storeList={storeList}
      />
    </div>
  );
};

export default HomeContainer;
