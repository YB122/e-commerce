import React from "react";
import { faker } from "@faker-js/faker";
import { Bath, Bed, Maximize } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const title = "Image Card";
export default function CategoriesCard(props) {
  return (
    <Card className="w-full max-w-md overflow-hidden">
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <img alt={props.name} height={500} src={props.image} width={2070} />
      </CardContent>
    </Card>
  );
}
