import './App.css';
import data from './util/json_data.json';
import Sidebar from './components/sidebar';
import Graph from './components/graph';
import Table from './components/table';
import Grid from '@material-ui/core/Grid';
import Header from './components/header';
import store from './store/index';


function getImage() {
  console.log(data[0].image);
  return data[0].image;
}

function getSubtitle() {
  console.log(data[0].subtitle);
  return data[0].subtitle;
}

function getTags() {
  console.log(data[0].tags)
  return data[0].tags;
}

function getTitle() {
  console.log(data[0].title);
  return data[0].title;
}

function App() {
  return (
    <div>
      <Header/>
      <Grid container style={{padding: "15px"}}>
        <Grid item xs>
          <Sidebar image={getImage()} subtitle={getSubtitle()} title={getTitle()} tags={getTags()}/>
        </Grid>
        <Grid item xs style={{marginLeft: "270px", position: "absolute"}}>
          <Grid item xs={12}>
            <Graph sales={store.getState().sales.sales}/>
          </Grid>
          <br/>
          <br/>
          <br/>
          <Grid item xs={12}>
            <Table sales={store.getState().sales.sales}/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
