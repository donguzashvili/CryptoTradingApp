// ** MUI
import { Skeleton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableSkeleton = ({ rows = 10, columns = 7 }) => {
  const range = (length: number) => Array.from({ length }, (_, i) => i);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {range(columns).map((index) => (
              <TableCell key={index}>
                <Skeleton animation="wave" />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {range(rows).map((index) => (
            <TableRow key={index}>
              {range(columns).map((index) => (
                <TableCell key={index}>
                  <Skeleton animation="wave" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableSkeleton;
