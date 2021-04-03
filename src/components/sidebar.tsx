import Card from '@material-ui/core/Card';
import BlenderCard from '../components/blender_card';

const cardStyle = {
    height: "1116px", width: "250px"
}

type SidebarProps = {
    image: string;
    subtitle: string;
    title: string;
    tags: string[];
};

const Sidebar = (props: SidebarProps) => {
  return (
    <Card style={cardStyle}>
        <BlenderCard image={props.image} subtitle={props.subtitle} title={props.title} tags={props.tags}/>
    </Card>
  );
}

export default Sidebar;