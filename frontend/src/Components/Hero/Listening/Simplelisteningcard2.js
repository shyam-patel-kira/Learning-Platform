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

export default function Simplecard2() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>; //eslint-disable-line

  return (
    <Card className={classes.root}>
      <CardContent className='bg-green-cardColor'>
        <Typography variant='body2' component='p'>
          <div className='font-serif text-lg text-white'>
            <b className='text-xl'>Don’t leave any answers:</b> As there is no
            negative marking in the examination candidates should always attempt
            all the answers even if they have doubt in some answers.
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
