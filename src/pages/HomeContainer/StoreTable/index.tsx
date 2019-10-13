import React, { FC } from 'react';
import { Table } from 'antd';
import { GetStoreTableListParams } from '../../../server';

interface Props {
  storeList: any[];
  handleFetchList?: (params: GetStoreTableListParams) => Promise<any>;
  loading?: boolean;
}

const StoreTable: FC<Props> = props => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '关键字',
      dataIndex: 'keyWord',
      key: 'keyWord',
    },
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '查看量',
      dataIndex: 'lookOver',
      key: 'lookOver',
    },
    {
      title: '回复量',
      dataIndex: 'reply',
      key: 'reply',
    },
    {
      title: '详情链接',
      dataIndex: 'detailUrl',
      key: 'detailUrl',
      render(value: string) {
        if (value) {
          return <a href={value} target="_blank">查看</a>;
        }
        return ' - ';
      },
    },
    {
      title: '下载链接',
      dataIndex: 'downloadUrl',
      key: 'downloadUrl',
      render(value: string) {
        if (value) {
          return <a href={value} target="_blank">查看</a>;
        }
        return ' - ';
      },
    },
  ];

  return (
    <div>
      <Table
        bordered
        loading={props.loading}
        columns={columns}
        dataSource={props.storeList.map((item, index) => Object.assign(item, { key: index }))}
      />
    </div>
  );
};

export default StoreTable;
