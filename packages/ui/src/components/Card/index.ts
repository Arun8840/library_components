"use client";
import { CardAction } from "./Card-action";
import { CardContent } from "./Card-content";
import { CardDescription } from "./Card-description";
import { CardFooter } from "./Card-footer";
import { CardHeader } from "./Card-header";
import CardRoot from "./Card-root";
import { CardTitle } from "./Card-title";

const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Action: CardAction,
  Content: CardContent,
  Footer: CardFooter,
});

export { Card };
