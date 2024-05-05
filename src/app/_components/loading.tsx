import { Spinner } from "@nextui-org/react";
import { type FC } from "react";

type LoadingProps = {
  className?: string;
};

export const Loading: FC<LoadingProps> = (props) => {
  return (
    <Spinner label="Loading..." color="primary" className={props.className} />
  );
};
