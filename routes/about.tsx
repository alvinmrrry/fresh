import { Handlers } from "$fresh/server.ts";

export default function AboutPage() {
    return (
        <main>
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">This is an about page</div>
            <div>This is an about page2</div>
        </main>
    );
}
export const handler: Handlers = {  GET(_req) {
    const uuid = crypto.randomUUID();
    return new Response(JSON.stringify(uuid), {
      headers: { "Content-Type": "application/json" },
    });
  },
};


