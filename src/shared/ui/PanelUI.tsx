import type { PropsWithChildren } from "react";
import MUIPaper from "@mui/material/Paper";
import { isNullOrEmpty } from "../lib/commonHelpers";
import { Col } from "./ColUI";
import { Information, type PropsWithInformation } from "./InformationUI";
import { Row } from "./RowUI";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type React from "react";

const StyledPaper = styled(MUIPaper, {
  label: "panel",
})(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.grey[40]}`,
  marginTop: "1.6rem",

  boxShadow: "0px 0px 13px 0px rgba(62, 44, 90, 0.08)",
  border: "1px solid rgba(0, 0, 0, 0.09)",
}));

const PanelHeader = styled(Box, {
  label: "panel-hdr",
})(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderBottom: `1px solid rgba(0,0,0,0.07)`,
  borderRadius: "4px",
  transition: "background-color 0.4s ease-out",
  minHeight: "4rem",
  backgroundColor: theme.palette.background.paper,
}));

const StyledTypography = styled(Typography, {
  name: "panel-h2",
})(({ theme }) => ({
  padding: `0 ${theme.spacing(2)}`,

  fontWeight: "bold",
  letterSpacing: "-1px",
  lineHeight: "4rem",
  flex: 1,
  fontSize: "1.4rem",
  margin: 0,
  display: "flex",
  alignItems: "center",
  color: theme.palette.grey[700],
  position: "relative",
}));

const PanelContainer = styled(Box, {
  label: "panel-container",
})({
  position: "relative",
  borderRadius: `0 0 4px 4px`,
});

const PanelContent = styled(Box, {
  label: "panel-content",
})(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: `0 0 4px 4px`,
}));

export interface PropsWithPanelProps extends PropsWithInformation {
  title?: React.ReactNode;
}
export interface PanelProps extends PropsWithPanelProps, PropsWithChildren {}
export const Panel = ({ title, information, children }: PanelProps) => {
  return (
    <Row>
      <Col size={12}>
        <StyledPaper elevation={0}>
          <PanelHeader>
            <StyledTypography variant="h2">{title}</StyledTypography>
          </PanelHeader>
          <PanelContainer>
            <PanelContent>{children}</PanelContent>
          </PanelContainer>
        </StyledPaper>
        {isNullOrEmpty(information) ? null : (
          <Information>{information}</Information>
        )}
      </Col>
    </Row>
  );
};
