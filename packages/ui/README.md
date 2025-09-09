# Button Component

The `Button` component is a reusable UI element for user interactions such as submitting forms, triggering actions, or navigation. It supports multiple variants and sizes to fit different use cases.

## Usage

Import the `Button` component from the `ui` package:

## ✨ Features

- Supports different variants (`primary`, `secondary`, `danger`, etc.)
<!-- - Supports sizes (`sm`, `md`, `lg`) -->
- Customizable via `className` prop
- Works with icons and loading state

---

### 🔹 Example for Button component

````markdown
```tsx
import { Button } from "@zettastackpvt/ui/index";

export default function App() {
  return <Button variant="primary">Click Me</Button>;
}
```
````

---

## Usage

Import the `Input` component from the `ui` package:

## ✨ Features

- Supports different input types (`text`, `number`, `email`, `date`, `password`, etc.)
- Optional `label` and `placeholder` props

---

### 🔹 Example for Input component

````markdown
```tsx
import { Input } from "@zettastackpvt/ui/index";

export default function App() {
  return <Input label="Username" />;
}
```
````

### 🔹 Example for Checkbox component and same as for radio component

````markdown
```tsx
import { Checkbox } from "@zettastackpvt/ui/index";

export default function App() {
  return (
    <>
      <Checkbox id="terms" name="terms" label="Accept terms and conditions" />
      <Radio id="terms" name="terms" label="Accept terms and conditions" />
    </>
  );
}
```
````

## ✨ Features

- Supports disabled avatar

### 🔹 Example for Avatar component

````markdown
```tsx
import { Avatar } from "@zettastackpvt/ui/index";

export default function App() {
  return (
    <>
      <Avatar src={"https://github.com/shadcn.png"} fallBack="ZS" />
      <Avatar
        disabled
        src={"https://github.com/shadcn.png"}
        fallBack="Iam disabled one."
      />
    </>
  );
}
```
````

### 🔹 Example for Card component

The `Card` component is built using the compound component pattern, allowing you to compose your card UI using subcomponents like `Card.Header`, `Card.Title`, `Card.Description`, `Card.Action`, `Card.Content`, and `Card.Footer`. This provides flexibility and clear structure for your card layouts.

````markdown
```tsx
import { Card } from "@zettastackpvt/ui/index";

export default function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card title</Card.Title>
        <Card.Description>Card description</Card.Description>
        <Card.Action>
          <Button>Action</Button>
        </Card.Action>
      </Card.Header>
      <Card.Content>
        <p>Card content</p>
      </Card.Content>
      <Card.Footer>
        <Button variant="secondary">Action</Button>
        <Button>Action</Button>
      </Card.Footer>
    </Card>
  );
}
```
````
