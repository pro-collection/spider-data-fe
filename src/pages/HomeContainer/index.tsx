import React, { FC, useEffect, useState } from 'react';
import styles from './index.less';
import StoreTableSearchInput from './StoreTableSearchInput';
import StoreTable from './StoreTable';
import { getStoreTableList, GetStoreTableListParams, TableListInfo } from '../../server';
import { message } from 'antd';

const HomeContainer: FC = () => {
  const [storeListInfo, updateStoreListInfo] = useState<TableListInfo>({
    list: [],
    pageNum: 0,
    pageSize: 0,
    total: 0,
  });
  const [loading, updateLoading] = useState(false);

  /**
   * 列表数据请求方法
   * @param params
   */
  const handleFetchList = (params: GetStoreTableListParams = {}) => {
    updateLoading(true);
    return getStoreTableList(params)
      .then(res => updateStoreListInfo(res))
      .catch(err => message.error(err.message))
      .finally(() => {
        updateLoading(false);
      });
  };

  useEffect(() => {
    handleFetchList();
  }, []);

  return (
    <div className={styles.container}>
      <h2>爬虫数据</h2>
      <StoreTableSearchInput
        handleFetchList={handleFetchList}
      />
      <StoreTable
        loading={loading}
        handleFetchList={handleFetchList}
        storeListInfo={storeListInfo}
      />
    </div>
  );
};

export default HomeContainer;
