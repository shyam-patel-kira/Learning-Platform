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
  const bull = <span className={classes.bullet}>•</span>; //eslint-disable-line

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" component="p">
        <b>Cross out the wrong answers:</b> If the candidate doesn’t know what the correct answer is or if the candidate is unable to do so, then they should cancel out the wrong answers especially in matching the list, MCQ’s and matching the paragraphs.           
        </Typography>
      </CardContent>
    </Card>
  );
}