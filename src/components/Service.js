import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import Button from '@material-ui/core/Button'
import Popup from "reactjs-popup"
import * as Markdown from 'react-markdown'

const green = '#39D1B4';

const divStyle = {
    margin: '5px',
    
      };
  
const pStyle = {
    fontSize: '15px',
    textAlign: 'center',

  };
  

  


const Service = (props) => (
    <div className="box content" style={divStyle}> 
        <Card color= '#39D1B4'>
            <CssBaseline />
            <CardContent style={pStyle}>
                <Typography gutterBottom variant="headline" component="h3">
                {props.title} 
                </Typography>        
            </CardContent>
            <CardActions>
                <Popup
                    trigger = {<Button 
                        size="medium" 
                        color="secondary" 
                         >
                        Skills
                    </Button>}
                    position="botton left"
                    modal
                    closeOnDocumentClick
                    >
                    <div className="card">                        
                        <div className="content"><Markdown source={props.skills} /></div>
                    </div>
                </Popup>
                
                <Popup
                    trigger = {<Button 
                        size="medium" 
                        color="secondary" 
                         >
                        Tools
                    </Button>}
                    position="bottom center"
                    modal
                    closeOnDocumentClick
                    >
                    <div className="card">                        
                        <div className="content"><Markdown source={props.tools} /></div>
                    </div>
                </Popup>
                <Popup
                    trigger = {<Button 
                        size="medium" 
                        color="secondary" 
                         >
                        BusinessUsage
                    </Button>}
                    position="botton right"
                    modal
                    closeOnDocumentClick
                    >
                    <div className="card">                        
                        <div className="content"><Markdown source={props.businessUsage} /></div>
                    </div>
                </Popup>
                </CardActions>            
        </Card>    
  </div>
)

export default Service;