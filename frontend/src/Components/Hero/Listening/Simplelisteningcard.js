import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginLeft: -5,
    marginRight: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  
});

export default function Simplecard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" component="p">
            <b>Improve general listening skills:</b> In order to improve the listening skills one should listen to the radio talks, Ted-Talks of native English speakers, documental programs, etc. 
            Only giving practice tests will not elevate the performance of the examiner instead the examiner will get friendly only to the type of questions asked.          
        </Typography>
      </CardContent>
    </Card>
  );
}