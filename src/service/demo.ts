import { request } from '../utils/request';

export function baseInfo(params: Record<string, unknown>): Promise<unknown> {
  return request('GET', '/app/ec/product/baseinfo', { query: params });
}

export function editName(params: Record<string, unknown>): Promise<unknown> {
  return request('PUT', 'http://api.dlab.cn/ec/bms/media/image/update', { body: params });
}
