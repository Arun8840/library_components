import { Button, Input } from "@repo/ui/index";

export default function Page() {
  return (
    <main className="p-10 bg-slate-100 min-h-screen">
      <Button>Iam from Web</Button>

      <Input label="Username" />
    </main>
  );
}
