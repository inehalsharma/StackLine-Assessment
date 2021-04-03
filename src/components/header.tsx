import Card from '@material-ui/core/Card';
import stackline_logo from '../images/stackline_logo.svg';

export default function Header() {
    return (
        <div>
            <Card style={{background: "#163656", height: "50px"}}>
                <img src={stackline_logo} style={{width: "100px", padding: "15px"}}></img>
            </Card>
        </div>
    )
}