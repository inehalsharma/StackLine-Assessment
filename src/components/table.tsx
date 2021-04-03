import Card from '@material-ui/core/Card';
import TableData from './table-data';

const cardStyle = {
    height: "500px", width: "1150px",
}


type TableProps = {
  sales: string;
};  

const Table = (props: TableProps) => {
    return (
      <Card style={cardStyle}>
        <TableData sales={props.sales}/>
      </Card>
    );
}

export default Table;

