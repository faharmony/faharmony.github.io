import React, { useState } from "react";
import { DataGridPremium, GridColDef } from "@mui/x-data-grid-premium";
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

  return (
    <MuiPageView
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
      <Content />
    </MuiPageView>
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

const Content = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "number",
      headerName: "Number",
      width: 160,
    },
    {
      field: "units",
      headerName: "Number",
      width: 160,
    },
    {
      field: "ownership",
      headerName: "Number",
      width: 160,
    },
  ];

  const rows = [...Array(20)].map((row, index) => {
    return {
      id: index + 1,
      firstName: "Firstname " + (index + 1),
      lastName: "Lastname " + (index + 1),
      number: 12 + index,
      units: index * 12,
      ownership: (index + 1) / 12,
    };
  });

  return (
    <DataGridPremium
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
    />
  );
};
