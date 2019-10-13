import React, { FC } from 'react';
import { Table } from 'antd';
import { GetStoreTableListParams, TableListInfo } from '../../../server';

interface Props {
  storeListInfo: TableListInfo;
  handleFetchList: (params: GetStoreTableListParams) => void;
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

  const handlePageChange = (page: number, pageSize: number) => {
    props.handleFetchList({
      page,
      size: pageSize,
    });
  };

  return (
    <div>
      <Table
        bordered
        loading={props.loading}
        columns={columns}
        // @ts-ignore
        pagination={{
          onChange: handlePageChange,
          total: props.storeListInfo.total,
          showQuickJumper: true,
          hideOnSinglePage: true,
          defaultCurrent: 1,
          defaultPageSize: 20,
          pageSizeOptions: ['10, 20', '50', '100'],
        }}
        dataSource={props.storeListInfo.list.map((item, index) => Object.assign(item, { key: index }))}
      />
    </div>
  );
};

export default StoreTable;
