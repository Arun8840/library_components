"use client";

import {
  defaultDropdownItems,
  defaultNavActions,
  defaultNavItems,
  tabData,
  tableData,
  timelineData,
  treeData,
} from "@zettastackpvt/ui/src/data/index";
import {
  Accordion,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
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
  Stepper,
  Url,
  Tree,
  Divider,
  Table,
  Dropdown,
} from "@zettastackpvt/ui/src/index";
import { Home } from "lucide-react";
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
              <Button variant="success">Success</Button>
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
          <Tab.Content className="w-1/3 flex flex-col gap-2" value="Checkboxes">
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
              className="inset rounded-lg"
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
          </Tab.Content>
          <Tab.Content className="w-1/2 flex flex-col gap-2" value="Radio">
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
            <Dropdown className="w-80">
              <Dropdown.Trigger>Select</Dropdown.Trigger>
              <Dropdown.Content>
                {defaultDropdownItems.map((item) => (
                  <Dropdown.Item key={item.key}>{item.value}</Dropdown.Item>
                ))}
              </Dropdown.Content>
            </Dropdown>
            <Dropdown className="w-80">
              <Dropdown.Trigger disabled>Disabled</Dropdown.Trigger>
              <Dropdown.Content>
                {defaultDropdownItems.map((item) => (
                  <Dropdown.Item key={item.key}>{item.value}</Dropdown.Item>
                ))}
              </Dropdown.Content>
            </Dropdown>
          </Tab.Content>
          <Tab.Content value="Badge" className="flex gap-2 w-1/3">
            <Badge variant="default">Default</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="success">Success</Badge>
          </Tab.Content>
          <Tab.Content value="Dialog" className="w-1/3">
            <Dialog>
              <Dialog.Trigger variant="primary">Open Dialog </Dialog.Trigger>

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
          <Tab.Content value="Stepper" className="p-5">
            <Stepper active={1} maxStep={4}>
              <Stepper.List>
                <Stepper.Item>
                  <div>
                    <h3 className="font-semibold text-lg py-2">
                      Create an Account
                    </h3>
                    <p>
                      Sign up with your email address to get started. Make sure
                      to use a valid email so you can verify your account.
                    </p>
                  </div>
                </Stepper.Item>
                <Stepper.Item>
                  <div>
                    <h3 className="font-semibold text-lg py-2">
                      Verify Your Email
                    </h3>
                    <p>
                      Check your inbox for a verification link. Click the link
                      to activate your account and continue the registration
                      process.
                    </p>
                  </div>
                </Stepper.Item>
                <Stepper.Item>
                  <div>
                    <h3 className="font-semibold text-lg py-2">
                      Complete Your Profile
                    </h3>
                    <p>
                      Fill in your personal details and preferences to complete
                      your profile. This helps us personalize your experience.
                    </p>
                  </div>
                </Stepper.Item>
                <Stepper.Item>
                  <div>
                    <h3 className="font-semibold text-lg py-2">
                      Start Using the App
                    </h3>
                    <p>
                      You’re all set! Explore the features and enjoy using the
                      application.
                    </p>
                  </div>
                </Stepper.Item>
              </Stepper.List>
            </Stepper>
          </Tab.Content>
          <Tab.Content value="Url" className="flex items-center gap-2">
            <Url
              label="Zetta stack"
              href="https://zettastack.com/"
              target="_blank"
            />
            <Url
              label="Disabled"
              href="https://zettastack.com/"
              target="_blank"
              disabled
            />
          </Tab.Content>

          <Tab.Content value="Tree">
            <Tree collapsible defaultOpen={"Landing page"}>
              {treeData?.map((group, groupIndex) => {
                return (
                  <Tree.Group
                    key={`${groupIndex}_${group?.groupLabel}`}
                    groupLabel={group?.groupLabel}
                    icon={() => (
                      <>
                        <Home size={15} />
                      </>
                    )}
                  >
                    {group?.items?.length > 0 &&
                      group?.items?.map((groupItem, itemIndex) => {
                        return (
                          <Tree.Item key={`${itemIndex}_${groupItem?.label}`}>
                            {groupItem?.label}
                          </Tree.Item>
                        );
                      })}
                  </Tree.Group>
                );
              })}
            </Tree>
          </Tab.Content>

          <Tab.Content value="Divider" className="flex flex-col gap-2">
            <div className="flex h-full">
              <span>Home</span>
              <Divider direction="vertical" />
              <span>About</span>
              <Divider direction="vertical" />
              <span>Settings</span>
            </div>
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              illum ex beatae doloribus fuga voluptatem hic voluptatibus,
            </p>
            <Divider className="w-1/2" />
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              illum ex beatae doloribus fuga voluptatem hic voluptatibus,
              impedit repellat nostrum incidunt tempore, fugit voluptas deleniti
              nisi quibusdam, rerum nihil unde!
            </p>
          </Tab.Content>

          <Tab.Content value="Table" className="w-1/2">
            <Table className="border border-gray-300 rounded">
              <Table.Caption>A list of your recent invoices.</Table.Caption>
              {/* //* filter */}
              <Table.Filter>
                <Table.Search
                  searchKeys={["Status"]}
                  placeholder="Search by Invoice..."
                />
                <Table.DropDown
                  keys={["Invoice", "Status", "Method", "Amount"]}
                />
              </Table.Filter>

              {/* //* header */}
              <Table.Header>
                <Table.Row>
                  <Table.Head>Invoice</Table.Head>
                  <Table.Head>Status</Table.Head>
                  <Table.Head>Method</Table.Head>
                  <Table.Head className="text-end">Amount</Table.Head>
                </Table.Row>
              </Table.Header>

              {/* //* body of the table data */}
              <Table.Body>
                {tableData?.map((row, rowIndex) => {
                  const isPaid = row?.status === "Paid";
                  return (
                    <Table.Row
                      key={`tablecell_${rowIndex}`}
                      data-ispaid={isPaid}
                      className="group"
                    >
                      <Table.Cell>{row?.invoice}</Table.Cell>
                      <Table.Cell className="group-data-[ispaid=true]:text-green-600">
                        {row?.status}
                      </Table.Cell>
                      <Table.Cell>{row?.method}</Table.Cell>
                      <Table.Cell className="text-end">
                        {row?.amount}
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Tab.Content>
        </Tab>
      </div>
    </main>
  );
}
