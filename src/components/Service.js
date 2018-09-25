import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'


const Service = (props) => {
    console.log(props)
    return(
        <div>
            { props.service ? (
                <Card >                    
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.service.fields.title}
                        </Typography>
                        <Typography Typography variant="body2" gutterBottom>
                            {props.service.fields.skills}
                        </Typography>
                        <Typography Typography variant="body2" gutterBottom>
                            {props.service.fields.tools}
                        </Typography>
                        <Typography Typography variant="body2" gutterBottom>
                            {props.service.fields.businessUsage}
                        </Typography>
                   
                    </CardContent>                    
                </Card>
            ) : null}
        </div>
    )
}

export default Service;