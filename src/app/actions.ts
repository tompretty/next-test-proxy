"use server";

import * as accountService from "./accountService";

export async function getAccount() {
  const account = await accountService.getAccount();

  return account;
}
