export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-12 px-6 py-20 sm:px-12">
      <section className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Listee
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
          Welcome to the Listee web client.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
          This UI shares the same API handlers, validation, and Supabase
          authentication helpers used by the Listee CLI and HTTP host. Plug in a
          running `listee-api` instance via{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm text-zinc-800">
            NEXT_PUBLIC_LISTEE_API_URL
          </code>{" "}
          and start building pages in <code>src/app</code>.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-zinc-900">Next steps</h2>
        <ol className="list-decimal space-y-3 pl-5 text-zinc-700">
          <li>Wire the shared data-fetching layer to `listee-api`.</li>
          <li>Create authenticated layouts and task/category views.</li>
          <li>Add tests and ship via Vercel or your preferred host.</li>
        </ol>
      </section>
    </main>
  );
}
