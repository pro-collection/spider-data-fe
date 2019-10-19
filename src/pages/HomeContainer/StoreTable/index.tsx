import React, { FC, useState } from 'react';
import { Table } from 'antd';
import { GetStoreTableListParams, TableListInfo } from '../../../server';
import { match, withRouter } from 'react-router';
import { History, Location, LocationState } from 'history';
import StoreTableTitle from './StoreTableTitle';

interface Props {
  storeListInfo: TableListInfo;
  handleFetchList: (params: GetStoreTableListParams) => void;
  loading?: boolean;
  history: History;
  location: Location<LocationState>;
  match: match;
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
      title: () => (
        <StoreTableTitle
          handleFetchList={props.handleFetchList}
          orderType="look_over"
          location={props.location}
          history={props.history}
          iconType="read"
        >
          查看量
        </StoreTableTitle>
      ),
      dataIndex: 'lookOver',
      key: 'lookOver',
    },
    {
      title: () => (
        <StoreTableTitle
          handleFetchList={props.handleFetchList}
          orderType="reply"
          location={props.location}
          history={props.history}
          iconType="save"
        >
          回复量
        </StoreTableTitle>
      ),
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
      dataIndex: 'downLoadUrl',
      key: 'downLoadUrl',
      render(value: string) {
        if (value) {
          return <a href={value} target="_blank">下载</a>;
        }
        return ' - ';
      },
    },
  ];

  const handlePageChange = (page: number, pageSize: number) => {
    props.history.push({
      state: Object.assign({}, props.location.state, {
        page,
        size: pageSize,
      }),
    });
    props.handleFetchList(Object.assign({}, props.location.state, {
      page,
      size: pageSize,
    }));
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
          current: props.storeListInfo.pageNum,
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

export default withRouter(StoreTable);
