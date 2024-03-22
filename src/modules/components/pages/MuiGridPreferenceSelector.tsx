import { DataGridPremium, useGridApiRef } from "@mui/x-data-grid-premium";
import { Box, Stack, Alert, Typography } from "@mui/material";
import {
  useGridPreferenceSelector,
  GridPreferenceSelector,
} from "@faharmony/mui";
const rows = [
  { id: 1, col1: "Richard", col2: 1 },
  { id: 2, col1: "Johan", col2: 2 },
  { id: 3, col1: "Ann-kristin", col2: 1 },
];

const columns = [
  { field: "col1", headerName: "Name", width: 150 },
  { field: "col2", headerName: "Number of kids", width: 150 },
];

const id = "faharmony-playground-mui-grid-preference-selector";

const MuiGridPreferenceSelector = () => {
  const gridApiRef = useGridApiRef();

  const {
    selectablePreferences,
    defaultPreference,
    hasModifiedSelectedPreference,
    loading: gridPreferencesLoading,
    selectedGridPreference,
    onGridStateChange,
    onDeletePreference,
    onSetDefaultPreference,
    onRestorePreference,
    onRenamePreference,
    onSaveAsPreference,
    onAddNewPreference,
    onSavePreferences,
    onSetSelectedPreference,
  } = useGridPreferenceSelector(id, gridApiRef);

  return (
    <Stack p={2} gap={2}>
      <Alert severity="warning">
        <Typography>
          This component requires graphql access to function properly
        </Typography>
      </Alert>
      <GridPreferenceSelector
        selectedGridPreference={selectedGridPreference}
        defaultPreference={defaultPreference}
        selectablePreferences={selectablePreferences}
        hasModifiedSelectedPreference={hasModifiedSelectedPreference}
        onRestorePreference={onRestorePreference}
        onDeletePreference={onDeletePreference}
        onSetDefaultPreference={onSetDefaultPreference}
        onRenamePreference={onRenamePreference}
        onSaveAsPreference={onSaveAsPreference}
        onSavePreferences={onSavePreferences}
        onAddNewPreference={onAddNewPreference}
        onSetSelectedPreference={onSetSelectedPreference}
      />
      <Box>
        <DataGridPremium
          loading={gridPreferencesLoading}
          apiRef={gridApiRef}
          onStateChange={onGridStateChange}
          rows={rows}
          columns={columns}
        />
      </Box>
    </Stack>
  );
};

export default MuiGridPreferenceSelector;
