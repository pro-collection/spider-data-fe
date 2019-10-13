import React, { FC } from 'react';
import styles from './index.less';

const HomeContainer: FC = () => {
  return (
    <>
      <h2>爬虫数据</h2>
      <div className={styles.container}>
        内容

        <div className="content">
          我要变色
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
