import { useState, useEffect } from "react";
import { Box } from "@faharmony/theme";
import { Button, ButtonPopover, ProgressLoader } from "@faharmony/components";

const Page = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage >= 100) {
        setPercentage(0);
      } else setPercentage(percentage + 1);
    }, 100);
  });

  return (
    <Box
      style={{
        padding: "20px",
        flexWrap: "wrap",
        width: "fit-content",
      }}
    >
      <ProgressLoader
        progress={percentage}
        size={150}
        trackWidth={5}
      ></ProgressLoader>{" "}
      <ProgressLoader
        progress={percentage}
        size={80}
        trackWidth={5}
      ></ProgressLoader>
      <ProgressLoader
        progress={percentage}
        size={50}
        trackWidth={5}
      ></ProgressLoader>
      <ProgressLoader
        progress={percentage}
        size={45}
        trackWidth={5}
      ></ProgressLoader>
      <Button
        value="Loading"
        spacing="xl"
        loading={true}
        progressPercentage={percentage}
      />
      <Button
        value="Loading"
        spacing="lg"
        loading={true}
        progressPercentage={percentage}
      />
      <Button
        value="Loading"
        spacing="md"
        loading={true}
        progressPercentage={percentage}
      />
      <Button
        value="Loading"
        spacing="sm"
        loading={true}
        progressPercentage={percentage}
      />
      <Button
        value="Loading"
        spacing="xs"
        loading={true}
        progressPercentage={percentage}
      />
      <ButtonPopover
        tooltip="Loading"
        variant="secondary"
        loading={true}
        progressPercentage={percentage}
      />
    </Box>
  );
};

export default Page;
