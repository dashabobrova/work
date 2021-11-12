import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  thumb: {
    borderRadius: 100
  }
};
class SwitchLabels extends React.Component {
  state = {
    checked: true
  };

  handleChange = event => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    return (
      <FormControlLabel
        control={
          <Switch
            classes={this.props.classes}
            checked={this.state.checked}
            onChange={this.handleChange}
            value="checked"
            color="primary"
          />
        }
        labelPlacement="start"
        label={this.state.checked ? "On" : "Off"}
      />
    );
  }
}

export default withStyles(styles)(SwitchLabels);