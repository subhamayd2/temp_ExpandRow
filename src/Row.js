import { IconButton, makeStyles, TableCell, TableRow } from "@material-ui/core";
import { isEmpty } from "lodash";
import React from "react";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  childRowStyles: {
    background: "#f5f5f5",
  },
  childRowSpacing: {
    // paddingLeft: 24, // use theme.spacing
    position: "relative",

    "&:first-child::before": {
      content: "s",
      position: "absolute",
      width: 45,
      display: "inline-block",
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  const { children, batches, status, transactions } = row;

  const childSpacing = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            disabled={isEmpty(children)}
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? "-" : "+"}
          </IconButton>
        </TableCell>
        <TableCell align="left">{status}</TableCell>
        <TableCell align="right">{batches}</TableCell>
        <TableCell align="right">{transactions}</TableCell>
      </TableRow>
      {open &&
        !isEmpty(children) &&
        children.map(({ id, batches: b, status: s, transactions: t }) => (
          <TableRow key={id} className={classes.childRowStyles}>
            <TableCell />
            <TableCell align="center">
              {childSpacing}
              {s}
            </TableCell>
            <TableCell align="right">{b}</TableCell>
            <TableCell align="right">{t}</TableCell>
          </TableRow>
        ))}
    </React.Fragment>
  );
}

export default Row;
