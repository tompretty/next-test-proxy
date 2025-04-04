import { getAccount } from "./actions";

export default async function Home() {
  const account = await getAccount();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Account</h1>

        <dl>
          <dt>First Name</dt>
          <dd>{account.firstName}</dd>

          <dt>Last Name</dt>
          <dd>{account.lastName}</dd>
        </dl>
      </main>
    </div>
  );
}
