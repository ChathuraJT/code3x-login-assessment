import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import loginIllustration from "../assets/illustrations/login-illustration.svg";
import { useState } from "react";

const controlRadius = "28px";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100svh",
        bgcolor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
        "& *": { fontFamily: "inherit" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 5, lg: 6, xl: 8 },
        py: { xs: 3, sm: 5, lg: 6 },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1440,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "minmax(380px, 0.85fr) minmax(500px, 1.15fr)",
          },
          gap: { lg: 6, xl: 8 },
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 420, mx: "auto" }}>
          <Stack spacing={{ xs: 2.5, sm: 3 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h1"
                sx={{
                  color: "#101010",
                  fontSize: { xs: "2.25rem", sm: "2.75rem" },
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                  mb: 1.5,
                }}
              >
                Welcome back!
              </Typography>
              <Typography variant="body2" sx={{ color: "#777777", maxWidth: 300, mx: "auto", lineHeight: 1.5 }}>
                Simplify your workflow and boost your productivity with Tuga&apos;s App.
              </Typography>
            </Box>

            <Box component="form" onSubmit={(event) => event.preventDefault()} noValidate>
              <Stack spacing={1.5}>
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  autoComplete="username"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      minHeight: 44,
                      borderRadius: controlRadius,
                    },
                    "& .MuiOutlinedInput-input": { padding: "10px 16px" },
                    "& .MuiInputLabel-root": {
                      px: "6px",
                      ml: "4px",
                      mr: "4px",
                      bgcolor: "#ffffff",
                      fontSize: "0.8rem",
                      lineHeight: 1.2,
                      transform: "translate(16px, 13px) scale(1)",
                    },
                    "& .MuiInputLabel-shrink": {
                      transform: "translate(14px, -8px) scale(0.75)",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      minHeight: 44,
                      borderRadius: controlRadius,
                    },
                    "& .MuiOutlinedInput-input": { padding: "10px 16px" },
                    "& .MuiInputLabel-root": {
                      px: "6px",
                      ml: "4px",
                      mr: "4px",
                      bgcolor: "#ffffff",
                      fontSize: "0.8rem",
                      lineHeight: 1.2,
                      transform: "translate(16px, 13px) scale(1)",
                    },
                    "& .MuiInputLabel-shrink": {
                      transform: "translate(14px, -8px) scale(0.75)",
                    },
                  }}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            onClick={() => setShowPassword((visible) => !visible)}
                            edge="end"
                            sx={{
                              color: "#777777",
                              opacity: 0.8,
                              "& svg": { fontSize: 20 },
                            }}
                          >
                            {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Link href="#forgot-password" underline="hover" sx={{ color: "#202020", fontSize: "0.75rem", fontWeight: 600 }}>
                    Forgot Password?
                  </Link>
                </Box>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{
                    minHeight: 48,
                    borderRadius: controlRadius,
                    bgcolor: "#050505",
                    color: "#ffffff",
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": { bgcolor: "#262626", boxShadow: "none" },
                  }}
                >
                  Login
                </Button>
              </Stack>
            </Box>

            <Divider sx={{ color: "#777777", fontSize: "0.75rem" }}>or continue with</Divider>

            <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
              {[
                { label: "Google", mark: "G" },
                { label: "Apple", mark: "A" },
                { label: "Facebook", mark: "f" },
              ].map((provider) => (
                <IconButton
                  key={provider.label}
                  aria-label={`Continue with ${provider.label}`}
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: controlRadius,
                    bgcolor: "#050505",
                    color: "#ffffff",
                    fontWeight: 700,
                    "&:hover": { bgcolor: "#262626" },
                  }}
                >
                  {provider.mark}
                </IconButton>
              ))}
            </Stack>

            <Typography variant="body2" sx={{ color: "#444444", textAlign: "center", pt: { xs: 4, sm: 7 } }}>
              Not a member?{" "}
              <Link href="/signup" underline="hover" sx={{ color: "#6b8d63", fontWeight: 700 }}>
                Register now
              </Link>
            </Typography>
          </Stack>
        </Box>

        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            minHeight: { lg: 560, xl: 680 },
            maxHeight: "calc(100svh - 96px)",
            borderRadius: { lg: 4, xl: 5 },
            bgcolor: "#f1f7ed",
            position: "relative",
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            p: { lg: 4, xl: 6 },
          }}
        >
          <Box
            component="img"
            src={loginIllustration}
            alt="Person working at a desk"
            sx={{
              width: "76%",
              height: "auto",
              maxHeight: "62%",
              objectFit: "contain",
              position: "relative",
              zIndex: 1,
              mb: { lg: 8, xl: 10 },
            }}
          />
          <Typography variant="h2" sx={{ position: "absolute", bottom: { lg: "7%", xl: "8%" }, px: 2, color: "#171717", fontSize: { lg: "1.2rem", xl: "1.55rem" }, fontWeight: 500, lineHeight: 1.35, textAlign: "center", maxWidth: 480 }}>
            Make your work easier and organized
            <br />
            with <Box component="span" sx={{ fontWeight: 800 }}>Tuga&apos;s App</Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;