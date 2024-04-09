import request from '@/utils/request'

// 申明接口
export async function queryProse(): Promise<any> {
  return request('/project/prose')
}
