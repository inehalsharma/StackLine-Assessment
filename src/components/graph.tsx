import Card from '@material-ui/core/Card';
import GraphData from './graph-data';

const cardStyle = {
    height: "550px", width: "1150px",
}

type GraphProps = {
  sales: string;
};  

const Graph = (props: GraphProps) => {
    return (
      <Card style={cardStyle}>
        <p style={{marginInlineStart: "15px", fontWeight: "bold"}}>Retail Sales</p>
        <GraphData sales={props.sales}/>
      </Card>
    );
}

export default Graph;

