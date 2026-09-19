import {Box,Button,TextField,Typography,} from "@mui/material";

function LoginPage() {
  return (
    <Box>
      <Box>
        login content
        <TextField label="Email" variant="outlined" />
        <TextField label="Password" variant="outlined" />
        <Button variant="contained">Login</Button>
        <Typography variant="body2">
            Don't have an account? <a href="/signup">Sign up</a>
        </Typography>
      </Box>

      <Box>
        illustration
      </Box>
    </Box>
  );
}

export default LoginPage;