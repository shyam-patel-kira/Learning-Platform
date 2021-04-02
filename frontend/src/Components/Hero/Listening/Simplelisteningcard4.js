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

export default function Simplecard3() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>; //eslint-disable-line

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" component="p">
        <b>Don’t write answers promptly:</b> Many candidates fall into this trap easily as they write the answers quickly by just listening to the audio related to the answers. 
        The candidates should listen properly to the contractions which are used in the audio and after listening to it only they should write the correct answer.
        </Typography>
      </CardContent>
    </Card>
  );
}