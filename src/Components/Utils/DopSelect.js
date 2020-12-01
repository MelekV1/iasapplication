import React,{useState}from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "./DropSelect.css"
const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
    boxShadow: '0 3px 5px 2px rgba(37,158,87,.3)',
    color: '#2bc36b',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    color: '#2bc36b',
  }
}));

export default function DopSelect({setField}) {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handleChange = (event) => {
        setField(event.target.value);
      };
    const handleClose = () => {
    setOpen(false);
    };

    const handleOpen = () => {
    setOpen(true);
    };
    return (
        <div className="Dropable">
            <Button className={classes.button} onClick={handleOpen}>
                    Select your field of study
            </Button>
            <FormControl className={classes.formControl}>
                <InputLabel color ="palette.success.dark">Field </InputLabel>
                <Select
                    className={classes.select}
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    onChange={handleChange}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"IT"}>IT</MenuItem>
                <MenuItem value={"Mechanical"}>Mechanical</MenuItem>
                <MenuItem value={"Electrical"}>Electrical</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
