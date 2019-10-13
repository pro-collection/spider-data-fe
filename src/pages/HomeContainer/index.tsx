import React, { FC, useEffect, useState } from 'react';
import styles from './index.less';
import StoreTableSearchInput from './StoreTableSearchInput';
import StoreTable from './StoreTable';
import { getStoreTableList, TableList } from '../../server';
import { message } from 'antd';

const HomeContainer: FC = () => {
  const [storeList, updateStoreList] = useState<TableList[]>([]);

  useEffect(() => {
    getStoreTableList({
      size: 10,
    })
      .then(res => updateStoreList(res))
      .catch(err => message.error(err.message));
  }, []);

  return (
    <div className={styles.container}>
      <h2>爬虫数据</h2>
      <StoreTableSearchInput/>
      <StoreTable
        storeList={storeList}
      />
    </div>
  );
};

export default HomeContainer;
