import { addToastMUI, removeToastMUI } from "@faharmony/core";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import SnackbarContent from "@mui/material/SnackbarContent";

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

export default function SnackbarExample() {
  return (
    <Box
      sx={{
        maxWidth: 600,
        "& > * + *": {
          mt: 2,
        },
      }}
    >
      <SnackbarContent message="I love snacks." action={action} />
      <SnackbarContent
        message={
          "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
        }
        action={
          <IconButton size="small" aria-label="close" color="inherit">
            <CloseIcon />
          </IconButton>
        }
      />
      <SnackbarContent
        message="I love candy. I love cookies. I love cupcakes."
        action={action}
      />
      <SnackbarContent
        message={
          "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
        }
        action={action}
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        sx={{ width: "100%" }}
      >
        <Button
          onClick={() =>
            addToastMUI(
              "I love candy. I love cookies. I love cupcakes. I love cheesecake. I love chocolate.",
              { variant: "default" }
            )
          }
        >
          Open snackbar default
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() =>
            addToastMUI(
              "I love candy. I love cookies. I love cupcakes. I love cheesecake. I love chocolate.",
              { variant: "success" }
            )
          }
        >
          Success
        </Button>
        <Button
          variant="contained"
          color="info"
          onClick={() =>
            addToastMUI(
              "I love candy. I love cookies. I love cupcakes. I love cheesecake. I love chocolate.",
              { variant: "info" }
            )
          }
        >
          Info
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() =>
            addToastMUI(
              "I love candy. I love cookies. I love cupcakes. I love cheesecake. I love chocolate.",
              { variant: "warning" }
            )
          }
        >
          Warning
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() =>
            addToastMUI("Error message, click X button to close me -> ", {
              variant: "error",
              persist: true,
              key: "error-snackbar",
              action: (
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={() => removeToastMUI("error-snackbar")}
                >
                  <CloseIcon />
                </IconButton>
              ),
            })
          }
        >
          Error X
        </Button>
      </Box>
    </Box>
  );
}
