import { RequestUtility } from "Utilities"

export function me() {
  RequestUtility.request({
    url: "/auth/me",
  })
}

export function register(username, password) {
  return RequestUtility.request({
    url: "/auth/register",
    method: "POST",
    data: { username, password },
  })
}

export function login(username, password) {
  return RequestUtility.request({
    url: "/auth/login",
    method: "POST",
    data: { username, password },
  })
}

export function logout() {
  return RequestUtility.request({
    url: "/auth/logout",
    method: "POST",
  })
}
