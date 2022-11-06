import API from './client';

export function authentication(payload) {
  console.log(payload)
    return API({
      method: 'POST',
      url: `/authentication`,
      data: payload
    })
}