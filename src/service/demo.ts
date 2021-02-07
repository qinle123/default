import { request, requestReturnType } from '../utils/request';

export function baseInfo(params: Record<string, unknown>): Promise<requestReturnType> {
  return request('GET', '/app/ec/product/baseinfo', { query: params });
}

export function editName(params: Record<string, unknown>): Promise<requestReturnType> {
  return request('PUT', 'http://api.dlab.cn/ec/bms/media/image/update', { body: params });
}
