import React from "react";
import PropTypes  from "prop-types";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui/svg-icons/action/delete-forever";
import { cyan500 } from "material-ui/styles/colors";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

import style from "./style.css";

const Currencies = (props) => {
  const rows = props.currencies.map(({code, price}) => (
    <TableRow key={code}>
      <TableRowColumn>{code}</TableRowColumn>
      <TableRowColumn>{price}€</TableRowColumn>
      <TableRowColumn></TableRowColumn>
      <TableRowColumn>
        <IconButton onClick={props.remove.bind(null, code)}>
          <DeleteIcon hoverColor={cyan500} />
        </IconButton>
      </TableRowColumn>
    </TableRow>
  ));

  return (
    <div className={style.Currencies}>
      <Table selectable={false}>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>Currency</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>History</TableHeaderColumn>
            <TableHeaderColumn>Delete</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {rows}
        </TableBody>
      </Table>
    </div>
  );
};

Currencies.propTypes = {
  currencies: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
};

export default Currencies;
