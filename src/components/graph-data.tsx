import Card from '@material-ui/core/Card';
import {LineChart, Line, XAxis, Tooltip, ResponsiveContainer, CartesianGrid} from 'recharts';
import moment from 'moment';


type GraphDataProps = {
    sales: string;
};  

const GraphData = (props: GraphDataProps) => {
    return (
        <Card style={{height: "500px",
                      width: "1150px"}}>
            <ResponsiveContainer>
                    <LineChart data={JSON.parse(props.sales)}
                               margin={{top: 5, right: 0, left: 15, bottom: 5}}>
                        <XAxis dataKey="weekEnding"
                               tickFormatter={(p)=>moment(p).format('MMM')}
                               interval={4}
                               tickLine={true}
                               />
                        <Tooltip/>
                        <CartesianGrid strokeDasharray="5" stroke="#DFE2E6" />
                        <Line dot={false}
                              strokeWidth={2}
                              type="monotone"
                              dataKey="retailSales"
                              stroke="#06B4E9"/>
                        <Line dot={false}
                              strokeWidth={2}
                              type="monotone"
                              dataKey="wholesaleSales"
                              stroke="#848889"/>
                    </LineChart>
                </ResponsiveContainer>
        </Card>
    )

}

export default GraphData;