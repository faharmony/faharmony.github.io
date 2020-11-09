import React from "react";
import { PageView } from "@faharmony/views";
import { Box } from "@faharmony/theme";
import {
  Button,
  IIconButtonObject,
  ButtonPopover,
} from "@faharmony/components";
import { faBell, faSquare } from "@faharmony/icons";

const Page = () => {
  const iconButton: IIconButtonObject = {
    id: "notify",
    icon: faSquare,
    tooltip: "Notifications",
    variant: "warning",
  };
  return (
    <PageView heading="Button" overflow="scroll">
      <Box>
        <Box direction="column">
          <Button value="Notifications" variant="info" fullWidth />
          <Button
            icon={faBell}
            value="Notifications"
            outline={true}
            fullWidth
          />
          <Button icon={faBell} value="Notifications" spacing="xl" fullWidth />
          <Button icon={faBell} value="Notifications" spacing="lg" fullWidth />
          <Button
            icon={faBell}
            value="Notifications"
            variant="primary"
            fullWidth
          />
          <Button icon={faBell} value="Notifications" spacing="sm" fullWidth />
          <Button icon={faBell} value="Notifications" spacing="xs" fullWidth />
          <Button
            icon={faBell}
            value="Notifications"
            spacing="none"
            fullWidth
          />

          <ButtonPopover {...iconButton} spacing="sm" outline fullWidth />
          <ButtonPopover {...iconButton} fullWidth outline />
          <ButtonPopover {...iconButton} fullWidth />
        </Box>
        <Box direction="column">
          <Button value="Notifications" variant="info" />
          <Button icon={faBell} value="Notifications" outline={true} />
          <Button icon={faBell} value="Notifications" spacing="xl" />
          <Button icon={faBell} value="Notifications" spacing="lg" />
          <Button icon={faBell} value="Notifications" variant="primary" />
          <Button icon={faBell} value="Notifications" spacing="sm" />
          <Button icon={faBell} value="Notifications" spacing="xs" />
          <Button icon={faBell} value="Notifications" spacing="none" />

          <ButtonPopover {...iconButton} spacing="sm" outline />
          <ButtonPopover {...iconButton} outline />
          <ButtonPopover {...iconButton} />
        </Box>
      </Box>
    </PageView>
  );
};

export default Page;
