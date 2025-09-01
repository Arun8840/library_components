"use client"

import {
  Accordion,
  Avatar,
  Button,
  Card,
  Checkbox,
  Input,
  Progress,
  Radio,
  Tab,
  Textarea,
} from "@zettastackpvt/ui/index"

export default function Page() {
  return (
    <main className="p-10 bg-slate-100 min-h-screen  gap-2">
      <div className="size-full grid lg:grid-cols-12 auto-rows-max gap-2">
        {/* //* tab  */}
        <Tab className="col-span-full" value="1">
          <Tab.List>
            <Tab.Trigger trigger="1">Buttons</Tab.Trigger>
            <Tab.Trigger trigger="5">Inputs</Tab.Trigger>
            <Tab.Trigger trigger="2">Checkboxes</Tab.Trigger>
            <Tab.Trigger trigger="3">Radio</Tab.Trigger>
            <Tab.Trigger trigger="4">Avatar</Tab.Trigger>
            <Tab.Trigger trigger="6">Card</Tab.Trigger>
            <Tab.Trigger trigger="7">Accordion</Tab.Trigger>
          </Tab.List>
          <Tab.Content className="w-1/2" value="1">
            <div className="grid grid-cols-2 gap-2">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </Tab.Content>
          <Tab.Content className="w-1/2" value="2">
            <div className="col-span-3">
              <Checkbox
                id="terms"
                name="terms"
                label="Accept terms and conditions"
              />
              <Checkbox
                id="terms_condition_with_description"
                name="terms_condition_with_description"
                label="Accept terms and conditions"
                description="By clicking this checkbox, you agree to the terms and conditions."
                className="has-checked:bg-blue-500/10 has-checked:ring has-checked:ring-blue-500 inset rounded-lg"
                inputClass="accent-blue-500"
              />
              <Checkbox
                disabled
                id="notification"
                name="notification"
                label="Accept terms and conditions"
              />

              <Progress value={40} max={100} label={"P rogress bar"} />
              <Progress
                disabled={true}
                value={40}
                max={100}
                label="Disabled progress bar"
              />
            </div>
          </Tab.Content>
          <Tab.Content className="w-1/2" value="3">
            <Radio
              id="terms"
              name="terms"
              label="Accept terms and conditions"
            />
            <Radio
              id="terms_condition_with_description"
              name="terms_condition_with_description"
              label="Accept terms and conditions"
              description="By clicking this checkbox, you agree to the terms and conditions."
              className="has-checked:bg-green-500/10 has-checked:ring has-checked:ring-green-500 inset rounded-lg"
              inputClass="accent-green-500"
            />
            <Radio
              disabled
              id="notification"
              name="notification"
              label="Accept terms and conditions"
            />
          </Tab.Content>
          <Tab.Content className="w-1/2" value="4">
            <div className="flex items-center gap-2">
              <Avatar src={"https://github.com/shadcn.png"} fallBack="ZS" />
              <Avatar
                disabled
                src={"https://github.com/shadcn.png"}
                fallBack="Iam disabled one."
              />
            </div>
          </Tab.Content>
          <Tab.Content className="w-1/2" value="5">
            <div className="flex flex-col gap-2">
              <Input label="Username" className="w-full" />
              <Input label="Phone number" type="number" className="w-full" />
              <Input
                label="Email"
                type="email"
                placeholder="example@gamil.com"
                className="w-full "
              />
              <Input label="Date of birth" type="date" className="w-full" />
              <Input
                label="Date with time"
                type="datetime-local"
                className="w-full"
              />
              <Textarea placeholder="Type your message here." />
            </div>
          </Tab.Content>
          <Tab.Content className="w-1/2" value="6">
            <Card className="max-w-80 mx-auto">
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
                  Welcome to your dashboard! Here you can view your recent
                  activity, manage your account settings, and access all the
                  tools you need to get started.
                </p>
              </Card.Content>
              <Card.Footer>
                <Button variant="secondary">I'm Card footer</Button>
                <Button>I'm Card footer</Button>
              </Card.Footer>
            </Card>
          </Tab.Content>
          <Tab.Content className="w-1/2" value="7">
            <Accordion defaultOpen="1" className="w-full col-span-4">
              <Accordion.Item>
                <Accordion.Trigger triggerId="1">
                  Im a accordion Trigger
                </Accordion.Trigger>
                <Accordion.Content value="1">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod voluptatem deleniti iure, eaque quis doloremque
                    repellat libero corporis exercitationem aliquam officiis
                    sint quidem excepturi odit provident, ab doloribus esse
                    unde!
                  </p>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item>
                <Accordion.Trigger triggerId="2">
                  Im a accordion Trigger
                </Accordion.Trigger>
                <Accordion.Content value="2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod voluptatem deleniti iure, eaque quis doloremque
                    repellat libero corporis exercitationem aliquam officiis
                    sint quidem excepturi odit provident, ab doloribus esse
                    unde!
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          </Tab.Content>
        </Tab>
      </div>
    </main>
  )
}
