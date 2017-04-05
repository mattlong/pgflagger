// @flow

const HOST = 'http://localhost:5000'
export const helloEndpointRoute = (num: number) => `${HOST}/ajax/hello/${num}`