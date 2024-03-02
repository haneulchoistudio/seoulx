export async function login<
  Before extends CallableFunction,
  After extends CallableFunction
>(before: Before, after: After) {
  before();
  // login logics
  after();
}

export async function logout() {
  // logout logics
}
