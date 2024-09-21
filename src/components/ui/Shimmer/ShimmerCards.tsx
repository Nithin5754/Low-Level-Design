import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";

import { CardType } from "./ShimmerContainer";

interface DataType {
  data: CardType;
}

export function ShimmerCards({ data }: DataType) {
  return (
<>

<Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.author}</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-[200px] items-center" >
        <img src={data.url} className="w-full h-full" />
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>




       

</>

    
  );
}
