"use client";

import {
  Accordion,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Dropdown,
  Input,
  Navbar,
  Progress,
  Radio,
  Tab,
  Textarea,
  Dialog,
  ToggleGroup,
  Slider,
  Carousel,
  Tooltip,
} from "@zettastackpvt/ui/index";

const defaultNavItems = [
  {
    label: "Home",
    href: "/",
    icon: "🏠",
  },
  {
    label: "About",
    href: "#",
    icon: "ℹ️",
  },
  {
    label: "Services",
    href: "#",
    icon: "🛠️",
  },
  {
    label: "Contact",
    href: "/#",
    icon: "✉️",
  },
];

const defaultNavActions = [
  {
    label: "Login",
    href: "#",
    variant: "primary",
  },
  {
    label: "Sign-up",
    href: "#",
    variant: "secondary",
  },
];

const defaultDropdownItems = [
  { key: "item1", value: "Item 1" },
  { key: "item2", value: "Item 2" },
  { key: "item3", value: "Item 3" },
];

export default function Page() {
  return (
    <main className="p-5 bg-slate-100 min-h-screen  gap-2">
      <div className="size-full grid lg:grid-cols-12 auto-rows-max gap-2">
        <div className="col-span-full">
          <Navbar
            nav={{
              items: defaultNavItems,
              logo: "https://github.com/shadcn.png",
              actions: defaultNavActions,
              itemPosition: "center",
            }}
          />
        </div>
        {/* //* tab  */}
        <Tab className="col-span-full" value="8">
          <Tab.List>
            <Tab.Trigger trigger="1">Buttons</Tab.Trigger>
            <Tab.Trigger trigger="5">Inputs</Tab.Trigger>
            <Tab.Trigger trigger="2">Checkboxes</Tab.Trigger>
            <Tab.Trigger trigger="3">Radio</Tab.Trigger>
            <Tab.Trigger trigger="4">Avatar</Tab.Trigger>
            <Tab.Trigger trigger="6">Card</Tab.Trigger>
            <Tab.Trigger trigger="7">Accordion</Tab.Trigger>
            <Tab.Trigger trigger="8">Dropdown</Tab.Trigger>
            <Tab.Trigger trigger="9">Badge</Tab.Trigger>
            <Tab.Trigger trigger="10">Dialog</Tab.Trigger>
            <Tab.Trigger trigger="11">Toggle Group</Tab.Trigger>
            <Tab.Trigger trigger="12">Slider</Tab.Trigger>
            <Tab.Trigger trigger="13">Carousel</Tab.Trigger>
            <Tab.Trigger trigger="15">Tooltip</Tab.Trigger>
          </Tab.List>
          <Tab.Content className="w-1/6" value="1">
            <div className="grid grid-cols-2 gap-2">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </Tab.Content>
          <Tab.Content className="w-1/3" value="2">
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
          <Tab.Content className="w-1/3" value="3">
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
          <Tab.Content className="w-1/3" value="5">
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
          <Tab.Content className="w-1/2 bg-gray-100 flex gap-2" value="8">
            <Dropdown
              data={{
                items: defaultDropdownItems,
                placeholder: "Select Components",
              }}
            />

            <Dropdown
              data={{
                items: defaultDropdownItems,
                placeholder: "Disabled Select",
                disabled: true,
              }}
            />
          </Tab.Content>
          <Tab.Content value="9" className="flex gap-2 w-1/3">
            <Badge variant="default">Default</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="success">Success</Badge>
          </Tab.Content>
          <Tab.Content value="10" className="w-1/3">
            <Dialog>
              <Dialog.Trigger variant="secondary">Open Dialog </Dialog.Trigger>

              <Dialog.Content>
                <Dialog.Title>Are you absolutely sure?</Dialog.Title>
                <Dialog.Description className="text-stone-500">
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </Dialog.Description>
                <Dialog.Footer>
                  <Dialog.Close>Close</Dialog.Close>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog>
          </Tab.Content>
          <Tab.Content value="11" className="flex gap-2">
            <ToggleGroup>
              <ToggleGroup.GroupItem value={"bold"}>B</ToggleGroup.GroupItem>
              <ToggleGroup.GroupItem value={"italic"}>I</ToggleGroup.GroupItem>
              <ToggleGroup.GroupItem value={"strikethrough"}>
                U
              </ToggleGroup.GroupItem>
            </ToggleGroup>
            <ToggleGroup variant="outline">
              <ToggleGroup.GroupItem value={"outline_bold"}>
                B
              </ToggleGroup.GroupItem>
              <ToggleGroup.GroupItem value={"outline_italic"}>
                I
              </ToggleGroup.GroupItem>
              <ToggleGroup.GroupItem value={"outline_strikethrough"}>
                U
              </ToggleGroup.GroupItem>
            </ToggleGroup>
          </Tab.Content>
          <Tab.Content value="12" className="w-1/2">
            <Slider defaultValue={10} min={0} max={100} />
            <Slider defaultValue={10} min={0} max={100} variant="danger" />
            <Slider defaultValue={10} min={0} max={100} variant="success" />
            <Slider defaultValue={10} min={0} max={100} variant="warning" />
            <Slider
              defaultValue={5}
              min={0}
              max={100}
              variant="default"
              disabled
            />
          </Tab.Content>
          <Tab.Content value="13">
            <Carousel total={3} className="mx-auto">
              <Carousel.Content className="p-1">
                <Carousel.Item className="bg-yellow-400 rounded-lg p-3 grid place-items-center">
                  1
                </Carousel.Item>
                <Carousel.Item className="bg-indigo-400 rounded-lg p-3 grid place-items-center">
                  2
                </Carousel.Item>
                <Carousel.Item className="bg-green-400 p-3  rounded-lg grid place-items-center">
                  3
                </Carousel.Item>
              </Carousel.Content>
            </Carousel>
          </Tab.Content>
          <Tab.Content value="15">
            <Tooltip>
              <Tooltip.Trigger>✨ Hover me!</Tooltip.Trigger>
              <Tooltip.Content>
                <p className="text-center">✨ Add to library </p>
              </Tooltip.Content>
            </Tooltip>
          </Tab.Content>
        </Tab>
      </div>
    </main>
  );
}
