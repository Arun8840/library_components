"use client";
import { Accordion, Button, Card, Input } from "@repo/ui/index";

export default function Page() {
  return (
    <main className="p-10 bg-slate-100 min-h-screen grid grid-cols-6 auto-rows-max gap-2">
      <div className="size-full">
        <div className="grid lg:grid-cols-2 gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>

      <Input label="Username" className="w-full self-end" />

      <Accordion defaultOpen="1" className="w-full col-span-2">
        <Accordion.Item>
          <Accordion.Trigger triggerId="1">
            Im a accordion Trigger
          </Accordion.Trigger>
          <Accordion.Content value="1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              voluptatem deleniti iure, eaque quis doloremque repellat libero
              corporis exercitationem aliquam officiis sint quidem excepturi
              odit provident, ab doloribus esse unde!
            </p>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Trigger triggerId="2">
            Im a accordion Trigger
          </Accordion.Trigger>
          <Accordion.Content value="2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              voluptatem deleniti iure, eaque quis doloremque repellat libero
              corporis exercitationem aliquam officiis sint quidem excepturi
              odit provident, ab doloribus esse unde!
            </p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>

      <Card>
        <Card.Header>
          <Card.Title>Welcome to the Dashboard</Card.Title>
          <Card.Description>
            This is the first line of the description.
          </Card.Description>
          <Card.Action>
            <Button>Action</Button>
          </Card.Action>
        </Card.Header>
        <Card.Content>
          <p>
            Welcome to your dashboard! Here you can view your recent activity,
            manage your account settings, and access all the tools you need to
            get started.
          </p>
        </Card.Content>
        <Card.Footer>
          <Button variant="secondary">Im Card footer</Button>
          <Button>Im Card footer</Button>
        </Card.Footer>
      </Card>
    </main>
  );
}
