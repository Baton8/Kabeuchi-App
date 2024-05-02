import { Spinner } from "@nextui-org/react";
import { FC } from "react";

export const Loading: FC = () => {
  return <Spinner label="Loading..." color="warning" />;
};
