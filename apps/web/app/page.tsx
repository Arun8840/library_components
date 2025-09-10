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
  Timeline,
  Uploader,
  Switch,
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
const timelineData = [
  {
    title: "Project Kickoff",
    description:
      "The team met to discuss project goals, deliverables, and timelines. Roles were assigned and initial requirements were gathered.",
  },
  {
    title: "First Prototype Released",
    description:
      "The initial prototype was completed and shared with stakeholders for feedback. Early testing identified key areas for improvement.",
  },
  {
    title: "Beta Launch",
    description:
      "A beta version was launched to a limited audience. Feedback was collected and used to fix bugs and enhance features.",
  },
  {
    title: "Public Release",
    description:
      "The project was released to the public. Ongoing support and updates are planned based on user feedback.",
  },
];

const defaultDropdownItems = [
  { key: "item1", value: "Item 1" },
  { key: "item2", value: "Item 2" },
  { key: "item3", value: "Item 3" },
];

const tabData = [
  { label: "Buttons" },
  { label: "Inputs" },
  { label: "Checkboxes" },
  { label: "Radio" },
  { label: "Avatar" },
  { label: "Card" },
  { label: "Accordion" },
  { label: "Dropdown" },
  { label: "Badge" },
  { label: "Dialog" },
  { label: "Toggle Group" },
  { label: "Slider" },
  { label: "Carousel" },
  { label: "Tooltip" },
  { label: "Timeline" },
  { label: "File Uploader" },
  { label: "Switch" },
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
        <Tab className="col-span-full" value={"Buttons"}>
          <Tab.List>
            {tabData?.map(({ label }, tabIndex) => (
              <Tab.Trigger key={tabIndex + 1} trigger={label}>
                {label}
              </Tab.Trigger>
            ))}
          </Tab.List>
          <Tab.Content className="w-1/6" value="Buttons">
            <div className="grid grid-cols-2 gap-2">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </Tab.Content>
          <Tab.Content className="w-1/3" value="Inputs">
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
          <Tab.Content className="w-1/3" value="Checkboxes">
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
          <Tab.Content className="w-1/2" value="Radio">
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
          <Tab.Content className="w-1/3" value="Avatar">
            <div className="flex items-center gap-2">
              <Avatar src={"https://github.com/shadcn.png"} fallBack="ZS" />
              <Avatar
                disabled
                src={"https://github.com/shadcn.png"}
                fallBack="Iam disabled one."
              />
            </div>
          </Tab.Content>
          <Tab.Content className="w-1/2" value="Card">
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
          <Tab.Content className="w-1/2" value="Accordion">
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
          <Tab.Content
            className="w-1/2 bg-gray-100 flex gap-2"
            value="Dropdown"
          >
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
          <Tab.Content value="Badge" className="flex gap-2 w-1/3">
            <Badge variant="default">Default</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="success">Success</Badge>
          </Tab.Content>
          <Tab.Content value="Dialog" className="w-1/3">
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
          <Tab.Content value="Toggle Group" className="flex gap-2">
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
          <Tab.Content value="Slider" className="w-1/2">
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
          <Tab.Content value="Carousel">
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
          <Tab.Content value="Tooltip">
            <Tooltip>
              <Tooltip.Trigger>✨ Hover me!</Tooltip.Trigger>
              <Tooltip.Content>
                <p className="text-center">✨ Add to library </p>
              </Tooltip.Content>
            </Tooltip>
          </Tab.Content>
          <Tab.Content value="Timeline" className="p-10">
            <Timeline>
              {timelineData?.map((timeline, timelineIndex) => {
                return (
                  <Timeline.Item
                    key={`timeline_${timelineIndex}`}
                    order={timelineIndex + 1}
                    className="w-1/2"
                  >
                    <Timeline.Title>{timeline?.title}</Timeline.Title>
                    <Timeline.Description>
                      {timeline?.description}
                    </Timeline.Description>
                  </Timeline.Item>
                );
              })}
            </Timeline>
          </Tab.Content>
          <Tab.Content value="File Uploader" className="w-1/4">
            <Uploader
              onUploadFile={(e) => console.log("e", e)}
              accept="image/*"
            >
              <Uploader.Action>Choose file</Uploader.Action>
              <Uploader.Progress className="h-1" />
              <Uploader.Upload>Upload</Uploader.Upload>
            </Uploader>
          </Tab.Content>

          <Tab.Content value="Switch" className="w-1/4">
            <Switch onChange={(e) => console.log("e", e)} />
          </Tab.Content>
        </Tab>
      </div>
    </main>
  );
}
