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
      <CardContent className='bg-green-cardColor'>
        <Typography variant='body2' component='p'>
          <div className='font-serif text-lg text-white'>
            <b>Maintain the order:</b> Any candidate who is appearing in the
            exam should remember one thing that the questions follow the order
            of the text in the majority of cases.
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
