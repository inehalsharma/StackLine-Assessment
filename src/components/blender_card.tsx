import Card from '@material-ui/core/Card';

const cardStyle = {
    height: "240px", 
    width: "250px",
    background: "",
}

const tagStyle = {
  padding: "1px 9px 1px 9px",
  marginTop: "8px",
  border: "1px solid lightgray",
  borderRadius:" 0.5em"
}

type BlenderCardProps = {
  image: string;
  subtitle: string;
  title: string;
  tags: string[];
};

const BlenderCard = (props: BlenderCardProps) => {
  const subtitle1 = props.subtitle.substring(0, 33);
  const subtitle2 = props.subtitle.substring(33);
  const tagsElement =
      props.tags &&
      props.tags.map((tag) => (
        <span key={tag} style={tagStyle}>
          {tag}
        </span>
      ));
  return (
    <Card style={cardStyle} variant="outlined">
        <img src={props.image} style={{width: "100px", marginInlineStart: "73px", marginTop: "20px"}}></img>
        <h5 style={{margin: "0px", textAlign: "center"}}>{props.title}</h5>
        <p style={{fontSize: "11px", textAlign: "center", margin: "0px"}}>{subtitle1}</p>
        <p style={{fontSize: "11px", textAlign: "center", margin: "0px"}}>{subtitle2}</p>
        <div style={{display: "flex",
                     flexWrap: "wrap",
                     padding: "10px",
                     fontSize: "10px",
                     justifyContent: "space-between",
                     borderTop: "1px solid #eee",
                     borderBottom: "1px solid #eee",
                     color: "#000"}}>{tagsElement}</div>
    </Card>
  );
}

export default BlenderCard;