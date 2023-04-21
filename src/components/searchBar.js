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

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function SearchBar() {
  const [rncps, setRncps] = useState([]);

  const handleChange = debounce(async (value) => {
    try {
      const { data } = await axios.get(
        `${base_url}fiches/search?q=${value.target.value}`,
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
          component={Stack}
          flexDirection={"row"}
        >
          <TextField
            {...params}
            variant="outlined"
            // sx={{ bgcolor: "#80808047" }}
            label=""
            // value={textInput}
            onChange={handleChange}
            focused
            placeholder="Search by RNCP"
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
          {/* <Button variant="contained" sx={{ width: 100 }}>
            Search
          </Button> */}
        </Paper>
      )}
    />
  );
}
