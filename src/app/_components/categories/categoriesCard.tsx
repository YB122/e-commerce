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
import Image from "next/image";

export const title = "Image Card";
export default function CategoriesCard(props: any) {
  return (
    <Card className="w-full max-w-md overflow-hidden">
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <img
          alt={props.name}
          height={500}
          src={props.image}
          width={2070}
          className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full"
        />
        {/* <Image
          src={props.image}
          alt={props.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        /> */}
      </CardContent>
    </Card>
  );
}
