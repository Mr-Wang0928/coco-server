// Interface data format used to return a unified format
// enum ResultEnum {
//     SUCCESS = 0,
//     ERROR = -1,
//     TIMEOUT = 401,
//     TYPE = 'success',
// }
  const ResultEnum = {
    SUCCESS : 0,
    ERROR : -1,
    TIMEOUT : 401,
    TYPE : 'success',
  }
// export const test  = {

// }
export function resultSuccess(result, message = 'ok') {
    
  return {
    code: ResultEnum.SUCCESS,
    result,
    message,
    type: 'success',
  }
}

export function resultPageSuccess(
  page,
  pageSize,
  list,
  { message = 'ok' } = {},
) {
  const pageData = pagination(page, pageSize, list)

  return {
    ...resultSuccess({
      items: pageData,
      total: list.length,
    }),
    message,
  }
}

export function resultError(
  message = 'Request failed',
  { code = ResultEnum.ERROR, result = null } = {},
) {
  return {
    code,
    result,
    message,
    type: 'error',
  }
}

export function pagination(pageNo, pageSize, array) {
  const offset = (pageNo - 1) * Number(pageSize)
  return offset + Number(pageSize) >= array.length
    ? array.slice(offset, array.length)
    : array.slice(offset, offset + Number(pageSize))
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken({ headers }) {
  return headers?.authorization
}
