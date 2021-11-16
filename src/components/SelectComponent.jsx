import { FormControl, makeStyles, MenuItem, Select } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    formControl: {
      "& .MuiInputBase-root": {
        color: "#272727",
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "16px",
        backgroundColor: "#F4F4F7",
        border: "none",
        borderRadius: "24px",
        minWidth: "151px",
        justifyContent: "center"
      },
      "& .MuiSelect-select.MuiSelect-select": {
        paddingRight: "0px"
      }
    },
    select: {
      width: "auto",
      "&:focus": {
        backgroundColor: "#F4F4F7"
      }
    },
    paper: {
      borderRadius: 16,
      marginTop: 8,
      marginLeft: 8,
    },
    list: {
      paddingTop: 0,
      paddingBottom: 0,
      width: "151px",
      "& li": {
        fontWeight: 200,
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: "12px",
        "&:hover": {
            fontWeight: 900,
        }
      },
      "& li.Mui-selected": {
        fontWeight: 'bold',
        backgroundColor: 'white'
      },
      "& li.Mui-selected:hover": {
        background: "white"
      }
    }
  }));

export const SelectComponent = ({ value, handleChange, items }) => {
  const classes = useStyles();
  const menuProps = {
    classes: {
      list: classes.list,
      paper: classes.paper
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    getContentAnchorEl: null
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={value}
        onChange={handleChange}
        disableUnderline
        /* IconComponent={ExpandMoreRoundedIcon} */
        IconComponent={() => (
            <span className="CUicon-interface-Caret-down test"></span>
          )}
        MenuProps={menuProps}
        classes={{
          select: classes.select,
          icon: classes.selectIcon
        }}
      >
        {items.map((item) => (
          <MenuItem key={item.key} value={item.value}>
            {item.key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
