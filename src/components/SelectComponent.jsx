import { FormControl, makeStyles, MenuItem, Select } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  formControl: {
    width: "100%",
    borderRadius: "24px",
    "& .MuiInputBase-root": {
      color: "#272727",
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
      backgroundColor: "#F4F4F7",
      border: "none",
      fontFamily: "Montserrat",
      borderRadius: "24px",
      minWidth: "100%",
      height: "32px",
      justifyContent: "center",
    },
    "& .MuiSelect-select.MuiSelect-select": {
      //paddingRight: "0px",
    },
  },
  select: {
    width: "auto",
    paddingLeft: "12px",
    paddingRight: "29px !important",
    borderRadius: "16px",
    position: "relative",
    "&:focus": {
      backgroundColor: "#F4F4F7",
      borderRadius: "24px",
    }
  },

  paper: {
    borderRadius: 16,
    marginTop: "8px",
    //marginLeft: "16px",
    marginRight: "0px",
    paddingRight: "0px",
    margin: "0 auto",
    //width: "100%",
    width: '151px',
    '@media (max-width: 699px)' : {
      width: '100%'
    }
    
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    width: "100%",
    
    //paddingRight: "5px",
    "& li": {
      fontFamily: "Montserrat",
      fontWeight: 200,
      paddingTop: 8,
      paddingBottom: 8,
      fontSize: "12px",
      width: "100%",
      
      "&:hover": {
        fontWeight: 900,
      },
    },
    "& li.Mui-selected": {
      fontWeight: "bold",
      backgroundColor: "white",
    },
    "& li.Mui-selected:hover": {
      background: "white",
    },
  },
}));

export const SelectComponent = ({ value, handleChange, items }) => {
  const classes = useStyles();
  const menuProps = {
    classes: {
      list: classes.list,
      paper: classes.paper,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    getContentAnchorEl: null,
  };

  return (
    <FormControl className={classes.formControl}>
      <Select 

        value={value}
        onChange={handleChange}
        disableUnderline
        IconComponent={() => (
          <span className="CUicon-interface-Caret-down select__icon"></span>
        )}
        MenuProps={menuProps}
        classes={{
          select: classes.select,
          icon: classes.selectIcon,
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
