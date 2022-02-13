export var BaseUrl = process.env.VUE_APP_API_BASE_URL ? process.env.VUE_APP_API_BASE_URL : "";

function get(path) {
  return fetch(BaseUrl + path);
}

function getWithCredentials(path) {
  return fetch(BaseUrl + path, {
    credentials: 'include'
  });
}

function post(path, data) {
  return fetch(BaseUrl + path, {
    method: 'POST',
    body: createSearchParams(data),
    credentials: 'include',
    headers: new Headers({'content-type': 'application/x-www-form-urlencoded'})
  });

}

function put(path, data) {
  return fetch(BaseUrl + path, {
    method: 'PUT',
    credentials: 'include',
    body: JSON.stringify(data)
  });
}

function del(path) {
  return fetch(BaseUrl + path, {
    credentials: 'include',
    method: 'DELETE'
  });
}

function createSearchParams(data) {
  return Object.keys(data).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
  }).join('&');
}

export default {
  get,
  getWithCredentials,
  post,
  put,
  delete: del,
};
