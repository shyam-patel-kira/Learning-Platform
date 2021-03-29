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

export default function Simplecard1() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" component="p">
        <b>Focus:</b> The candidate should not lose concentration at any cost as the audio is only played once. 
        In some cases it might happen that if a candidate loses one answer then there is a chance that he/she might lose another answer due to pressure. 
        Hence, it is extremely vital to remain focused during the whole examination.          
        </Typography>
      </CardContent>
    </Card>
  );
}