import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { memo, type ComponentProps } from "react";

const InformationTypography = styled(Typography, {
  label: "msg",
  name: "InformationTypography",
})({
  fontSize: "1.2rem",
  margin: "0 0 2rem 0",
  marginTop: "-1rem",
  padding: 0,
  color: "grey.500",
  lineHeight: "100%",

  "&::before": {
    content: '"\\002A\\00a0"',
  },
});

export interface PropsWithInformation {
  information?: React.ReactNode;
}

export const Information = memo<ComponentProps<typeof InformationTypography>>(
  (props) => {
    return <InformationTypography {...props} />;
  }
);
