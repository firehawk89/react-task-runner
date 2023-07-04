import { useRef } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ label, onSearch }) {
  const searchInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchInputRef.current.value);
    searchInputRef.current.value = "";
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", alignItems: "center" }}
      onSubmit={handleSubmit}
    >
      <Input
        fullWidth
        variant="standard"
        placeholder={label}
        inputRef={searchInputRef}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
