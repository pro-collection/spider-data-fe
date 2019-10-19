import * as utils from 'utils';
import { get } from 'lodash';

const { axios } = utils;

const getSceneInfo = (id: number) => {
  return axios({
    url: '/api/paper',
    params: {
      sceneId: id,
    },
  }).then((res: object) => res).catch((err: object) => err);
};

const proxyGithubApi = () => {
  return axios({
    url: '/api/users',
    method: 'post',
  }).then((res: object) => res).catch((err: object) => err);
};

export interface GetStoreTableListParams {
  query?: string;
  page?: number;
  size?: number;
  order?: 'reply' | 'look_over';
}

export interface TableListItem {
  id: number;
  keyWord: string;
  title: string;
  lookOver: number;
  reply: number;
  detailUrl: string;
  downloadUrl: string;
  isLooked: number;
  isDownLoad: number;
}

export interface TableListInfo {
  list: TableListItem[];
  pageNum: number;
  pageSize: number;
  total: number;
}

export const getStoreTableList = (options?: GetStoreTableListParams) =>
  axios({
    url: '/api/store/list/',
    params: options,
  }).then(res => Promise.resolve(get(res, 'data', { list: [] })));

export const updateIsLookedApi = (id: number) => {
  axios({
    url: '/api/store/update_is_looked/',
    method: 'post',
    data: {id},
  });
};

export const updateIsDownloadApi = (id: number) => {
  axios({
    url: '/api/store/update_is_download/',
    method: 'post',
    data: {id},
  });
};

export default { getSceneInfo, proxyGithubApi };
