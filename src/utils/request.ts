import { API_PREFIX } from './constans';

interface requestReturnType {
  flag: boolean;
  code: number;
  data: unknown;
}

interface requestParamsType {
  headers?: Record<string, unknown>;
  body?: Record<string, unknown>;
  query?: Record<string, unknown>;
  loading?: boolean;
}

function getRelativeUrl(url: string, query?: Record<string, unknown>) {
  let newUrl = url;
  if (newUrl.slice(0, 4) !== 'http') {
    newUrl = API_PREFIX + url;
  }
  if (query) {
    newUrl += '?';
    for (const key in query) {
      newUrl += `${key}=${query[key]}&`;
    }
  }
  if (newUrl[newUrl.length - 1] === '&') {
    newUrl = newUrl.slice(0, newUrl.length - 1);
  }
  return newUrl;
}

function getToken(): string {
  return `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTI1MTQ2MzksImlhdCI6MTYxMjQyODIzOSwidXNlciI6eyJ0aW1lc3RhbXAiOiIxNjEyNDI4MjM5NTgyMDA0MDQzIiwidXNlcl9pZCI6Mjc0NDA3Mn19.Kh093N4bgp8d2BRKlaIlT0G5VEWauFSPqpC4dWRNE50`;
}

export function request(method: string, url: string, params: requestParamsType): Promise<requestReturnType> {
  return new Promise((resolve, reject) => {
    fetch(getRelativeUrl(url, params.query), {
      method: method || 'GET',
      body: params.body ? JSON.stringify(params.body) : null,
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json;charset=utf-8',
        'api-version': 'v1.2.0',
        'request-source': 'web',
        Authorization: getToken(),
        ...(params.headers || {}),
      },
    })
      .then(response => {
        response.json().then(res => {
          resolve(res);
        });
      })
      .catch(err => {
        console.error(err);
        reject(err);
      });
  });
}
