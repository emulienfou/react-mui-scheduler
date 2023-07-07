import React, { FC, Fragment, JSX } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import configuration from "../config/configuration.json";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${ tableCellClasses.head }`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${ tableCellClasses.body }`]: {
    fontSize: 14,
  },
}));

const Configuration: FC = (): JSX.Element => (
  <Grid container spacing={ 2 }>
    <Grid xs={ 12 } item>
      <Typography variant="h1">Configuration</Typography>
      <Divider sx={ { my: 2 } }/>
      { configuration.map(({ label, rows }) => (
        <Fragment key={ label }>
          <Typography variant="h2" sx={ { mb: 1 } }>{ label }</Typography>
          <TableContainer component={ Paper } sx={ { mb: 1 } }>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  { rows.some(r => Object.keys(r).some(key => key === "params")) && (
                    <StyledTableCell>Params</StyledTableCell>
                  ) }
                  <StyledTableCell>Type</StyledTableCell>
                  { rows.some(r => Object.keys(r).some(key => key === "defaultValue")) && (
                    <StyledTableCell>Default</StyledTableCell>
                  ) }
                  { rows.some(r => Object.keys(r).some(key => key === "required")) && (
                    <StyledTableCell>Required</StyledTableCell>
                  ) }
                  <StyledTableCell>Description</StyledTableCell>
                  { rows.some(r => Object.keys(r).some(key => key === "values")) && (
                    <StyledTableCell>Values</StyledTableCell>
                  ) }
                </TableRow>
              </TableHead>
              <TableBody>
                { rows.map(({ name, type, description, ...rest }) => (
                  <TableRow key={ name } sx={ { "&:last-child td, &:last-child th": { border: 0 } } }>
                    <TableCell component="th" scope="row">
                      { name }
                    </TableCell>
                    { rest.hasOwnProperty("params") && (
                      <TableCell><code>{ (rest as any).params }</code></TableCell>
                    ) }
                    <TableCell>{ type }</TableCell>
                    { rest.hasOwnProperty("defaultValue") && (
                      <TableCell><code>{ (rest as any).defaultValue }</code></TableCell>
                    ) }
                    { rest.hasOwnProperty("required") && (
                      <TableCell><code>{ (rest as any).required ? "true" : "false" }</code></TableCell>
                    ) }
                    <TableCell>{ description }</TableCell>
                    { rest.hasOwnProperty("values") && (
                      <TableCell>
                        <Box display="flex" flexWrap="wrap" gap={ 1 }>
                          { (rest as any).values?.map((value: string) => <Chip label={ value }/>) }
                        </Box>
                      </TableCell>
                    ) }
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>
        </Fragment>
      )) }
    </Grid>
  </Grid>
);

export default Configuration;
