import {
  Autocomplete,
  Button,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { debounce } from "lodash";
import { useSWR } from "swr";
import axios from "axios";
import { useRouter } from "next/router";

const SearchField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "6px 0px 0px 6px",
    },
    "&:hover fieldset": {
      borderRadius: "6px 0px 0px 6px",
    },
    "&.Mui-focused fieldset": {
      borderRadius: "6px 0px 0px 6px",
    },
  },
});

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function SearchBar() {
  const router = useRouter();
  const [rncps, setRncps] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = debounce(async (event) => {
    try {
      const { data } = await axios.get(
        `${base_url}api/v1/private/fiches/search?q=${event.target.value}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setRncps(data);
    } catch (e) {
      console.log(e);
    }
  }, 500);

  const handleSubmit = (event) => {
    setError(false);
    event.preventDefault();
    const formData = new FormData(event.target);
    if (!formData.get("search")) {
      setError(true);
      return null;
    }
    router.push("/fiches/" + formData.get("search"));
  };
  return (
    <Autocomplete
      freeSolo
      options={rncps}
      filterOptions={(x) => x}
      renderInput={(params) => (
        <Stack
          elevation={0}
          component={"form"}
          method="GET"
          onSubmit={handleSubmit}
          action="#"
          flexDirection={"row"}
          // alignItems={"center"}
          gap={0}
          sx={{ width: { xs: 270, sm: 320, md: 400, lg: 550 } }}
        >
          <SearchField
            {...params}
            variant="outlined"
            fullWidth
            name="search"
            onChange={handleChange}
            sx={{
              borderRadius: "6px 0px 0px 6px",
              outlineColor: "red",
              borderColor: "red",
            }}
            error={error}
            helperText={error ? "This field should not be empty" : null}
            placeholder="Rechercher par numéro RNCP, RS, OF..."
            InputProps={{
              ...params.InputProps,
              type: "search",
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disableElevation
            sx={{
              width: "20%",
              borderRadius: "0px 6px 6px 0px",
              color: "white",
              textTransform: "capitalize",
            }}
          >
            Search
          </Button>
        </Stack>
      )}
    />
  );
}
