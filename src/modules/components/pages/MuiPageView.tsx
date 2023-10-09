import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Button,
  IMuiPageViewProps,
  MuiPageView,
  SideView,
  Chip,
  Box,
  TextField,
  InputAdornment,
} from "@faharmony/mui";

import { Sync } from "@faharmony/mui/icons-material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const Page = () => {
  const [showToolBar, setShowToolbar] = useState(true);
  const [showBackBtn, setShowBackBtn] = useState(true);
  const [fullWIndow, setFullWIndow] = useState(false);
  const [sticky, setSticky] = useState(true);
  const [variant, setVariant] = useState("secondary");
  const [sideView, setSideView] = useState(false);
  return (
    <>
      <MuiPageView
        id={"testPageView"}
        headerVariant={variant as IMuiPageViewProps["headerVariant"]}
        fullWindow={fullWIndow}
        stickyHeader={sticky}
        backButton={
          showBackBtn
            ? {
                backButtonAdditionalActions: () => {
                  console.log("Back button clicked", showBackBtn);
                },
                label: "Go back",
              }
            : false
        }
        heading="Shareholders registry"
        actions={
          <>
            <Button
              variant="contained"
              sx={{ mr: 2 }}
              onClick={() =>
                setVariant(variant === "secondary" ? "primary" : "secondary")
              }
            >
              Switch variant
            </Button>

            <Button
              variant="contained"
              sx={{ mr: 2 }}
              onClick={() => setSticky(!sticky)}
            >
              Toggle sticky header
            </Button>

            <Button
              variant="contained"
              sx={{ mr: 2 }}
              onClick={() => setShowToolbar(!showToolBar)}
            >
              {showToolBar ? "Hide tool bar" : "Show tool bar"}
            </Button>
            <Button
              variant="contained"
              sx={{ mr: 2 }}
              onClick={() => setShowBackBtn(!showBackBtn)}
            >
              {showBackBtn ? "Hide back button" : "Show back button"}
            </Button>
            <Button
              variant="contained"
              sx={{ mr: 2 }}
              onClick={() => setFullWIndow(!fullWIndow)}
            >
              {"Toggle full window"}
            </Button>
            <IconButton>
              <Sync />
            </IconButton>
          </>
        }
        toolbarContent={showToolBar ? <Toolbar /> : null}
        sxProps={{ p: 0 }}
      >
        <Content setSideView={setSideView} />
      </MuiPageView>
      <SideDrawer
        open={sideView}
        onClose={() => {
          console.log("Close");
          setSideView(false);
        }}
      ></SideDrawer>
    </>
  );
};

export default Page;

const Toolbar = () => {
  return (
    <Grid item xs={12} alignItems="center">
      <FormControl variant="outlined" size="small" sx={{ mr: 2 }}>
        <InputLabel id="demo-simple-select-label">Fund</InputLabel>
        <Select
          label="Fund"
          labelId="demo-simple-select-label"
          value="FA Equity Fund"
        >
          <MenuItem value="FA Equity Fund">FA Equity Fund</MenuItem>
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Registry date"
          value={new Date()}
          slotProps={{ textField: { size: "small" } }}
          sx={{ mr: 2 }}
        />
      </LocalizationProvider>

      <FormControlLabel
        control={<Checkbox onChange={() => {}} />}
        label="Load purchase lots"
      />
    </Grid>
  );
};

const Content = (props: { setSideView: any }) => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <DataGrid
      {...data}
      slots={{
        toolbar: GridToolbar,
      }}
      onRowClick={() => props.setSideView(true)}
    />
  );
};

const SideDrawer = (props: { open: boolean; onClose: any }) => {
  const [toolBarPos, setToolBarPos] = useState<"left" | "bottom">("left");
  const [width, setWidth] = useState<string>("50");

  return (
    <SideView
      width={width + "%"}
      id={"testSideView"}
      title={"Detailed View"}
      additionalTitleContent={
        <Chip label="success" color="success" size="small" />
      }
      subTitle="Subtitle"
      open={props.open}
      onClose={props.onClose}
      toolBarPosition={toolBarPos}
      toolbar={
        <Box
          display={"flex"}
          justifyContent={
            toolBarPos !== "left" ? "space-between" : "space-evenly"
          }
        >
          {" "}
          <TextField
            label="Set width"
            id="outlined-start-adornment"
            onChange={(e) => setWidth(e.target.value)}
            size="small"
            value={width}
            type={"number"}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
          <Button
            variant="contained"
            sx={{ mr: 2, ml: 2 }}
            onClick={() =>
              toolBarPos === "left"
                ? setToolBarPos("bottom")
                : setToolBarPos("left")
            }
          >
            Switch toolbar position
          </Button>
        </Box>
      }
    >
      <Box>Additional contents </Box>
    </SideView>
  );
};
