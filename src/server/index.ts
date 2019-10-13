import * as utils from 'utils';
import { get } from 'lodash';
import { PromiseState } from 'q';

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

interface GetStoreTableListParams {
  query?: string;
  page?: number;
  size?: number;
  order?: 'reply' | 'look_over';
}

export interface TableList {
  id: number;
  keyWord: string;
  title: string;
  lookOver: number;
  reply: number;
  detailUrl: string;
  downloadUrl: string;
}

export const getStoreTableList = (options?: GetStoreTableListParams) =>
  axios({
    url: '/api/store/list/',
    params: options,
  }).then(res => Promise.resolve(get(res, 'data.list', [])));

export default { getSceneInfo, proxyGithubApi };
