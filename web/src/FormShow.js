import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import axios from 'axios';
import user from './images/ic_account_circle_white_36px.svg';

const center =
{
  margin: '30px 200px 0 200px'
};

class FormShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    };
  }

  componentDidMount() {
    this.interval = setInterval(() =>{
      axios.get('http://oat.southeastasia.cloudapp.azure.com:5000/all')
        .then(response => {
          this.setState({
            datas: response.data.data
          });
        });  
    }
      , 1000);

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        {
          this.state.datas.map(data => (
            <Card style={center} key={data._id}>
              <CardHeader title={data.name} avatar={user} subtitle='Hello!'></CardHeader>
              <CardTitle title='Why do you love dog?'></CardTitle>
              <CardText>
                {data.txt}
              </CardText>
              <CardText>
                How much do you love dog? => {data.dog}
              </CardText>
              <CardText>
                How much do you love cat? => {data.cat}
              </CardText>
            </Card>
          ))
        }
      </div>
    );
  }
}

export default FormShow
