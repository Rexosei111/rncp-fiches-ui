import {
  Autocomplete,
  Button,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { debounce } from "lodash";
import { useSWR } from "swr";
import axios from "axios";
import { useRouter } from "next/router";

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function SearchBar() {
  const router = useRouter();
  const [rncps, setRncps] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = debounce(async (event) => {
    try {
      const { data } = await axios.get(
        `${base_url}fiches/search?q=${event.target.value}`,
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
    }
    router.push("/fiches/" + formData.get("search"));
  };
  return (
    <Autocomplete
      freeSolo
      options={rncps}
      filterOptions={(x) => x}
      renderInput={(params) => (
        <Paper
          sx={{ p: 1 }}
          my={4}
          elevation={20}
          component={"form"}
          method="GET"
          onSubmit={handleSubmit}
          action="#"
        >
          <TextField
            {...params}
            variant="outlined"
            name="search"
            onChange={handleChange}
            focused
            error={error}
            placeholder="Search by RNCP"
            InputProps={{
              ...params.InputProps,
              type: "search",
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <Button variant="contained" type="submit">
                  Search
                </Button>
              ),
            }}
          />
        </Paper>
      )}
    />
  );
}
