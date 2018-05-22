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

const Currencies = () => (
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
        <TableRow>
          <TableRowColumn>BTC</TableRowColumn>
          <TableRowColumn>1331.13€</TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn>
            <IconButton>
              <DeleteIcon hoverColor={cyan500} />
            </IconButton>
          </TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>LTC</TableRowColumn>
          <TableRowColumn>7123€</TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn>
            <IconButton>
              <DeleteIcon hoverColor={cyan500} />
            </IconButton>
          </TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

Currencies.propTypes = {
  currencies: PropTypes.array
};

export default Currencies;
