import { Box, CronScheduler } from "@faharmony/mui";
import { useState } from "react";

export default function CronSchedulerExample() {
  const [cron, setCron] = useState("0 0 * * *");

  return (
    <Box>
      Received CRON: {cron}
      <CronScheduler value={cron} onChange={setCron} />
    </Box>
  );
}
