import React from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './style';

type Props = {
  classes: Object,
};

const Footer = ({ classes }: Props) => (
  <footer className={classes.container}>
    © {new Date().getFullYear()}, Web development
    {` `}
    <a href='https://gkalmoukis.com'>@gkalmoukis</a>
  </footer>
);

export default withStyles(styles)(Footer);
