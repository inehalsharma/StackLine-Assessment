import Card from '@material-ui/core/Card';
import DataTable from "react-data-table-component";

const columns = [
    {
      name: "WEEK ENDING",
      selector: "weekEnding",
      sortable: true,
    },
    {
      name: "RETAIL SALES",
      selector: "retailSales",
      sortable: true,
      right: true,
    },
    {
      name: "WHOLESALE SALES",
      selector: "wholesaleSales",
      sortable: true,
      right: true,
    },
    {
      name: "UNITS SOLD",
      selector: "unitsSold",
      sortable: true,
      right: true,
    },
    {
      name: "RETAILER MARGIN",
      selector: "retailerMargin",
      sortable: true,
      right: true,
    },
  ];


type TableDataProps = {
    sales: string;
};  


const TableData = (props: TableDataProps) => {
    return (
        <Card style={{height: "550px",
                      width: "1150px",
                      overflowY: "scroll",
                      marginTop: "-50px"}}>
            <DataTable
            title=""
            columns={columns}
            data={JSON.parse(props.sales)}
            pagination={true}/>
        </Card>
      );
}

export default TableData;