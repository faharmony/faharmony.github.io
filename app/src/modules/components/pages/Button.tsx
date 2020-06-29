import React from "react";
import { PageView } from "@faharmony/views";
import { Button, IIconButtonObject, Box } from "@faharmony/components";
import { faBell } from "@faharmony/icons";

export default () => {
  const iconButton: IIconButtonObject = {
    id: "notify",
    icon: faBell,
    tooltip: "Notifications",
    variant: "warning",
  };
  return (
    <PageView heading="Button">
      <Box>
        <Button value="Notifications" variant="info" />
        <Button
          icon={faBell}
          tooltip="Notifications"
          spacing="sm"
          outline={true}
        />
        <Button {...iconButton} spacing="sm" outline />
      </Box>
    </PageView>
  );
};
