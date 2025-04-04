interface Account {
  firstName: string;
  lastName: string;
}

export async function getAccount(): Promise<Account> {
  const response = await fetch("http://localhost:3001/api/account");
  const data = await response.json();

  return data;
}
