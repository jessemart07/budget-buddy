import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import classes from './TabPanel.module.css';
import Transition from 'react-transition-group/Transition';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Transition 
      in={value === index} 
      timeout={400}
      mountOnEnter
      unmountOnExit>
        {state => (
          <div
          role="tabpanel"
          
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
          
          style={{

            transition: 'all ease 0.6s ',
           
            opacity:state === 'exiting' ? 0 : state === 'entering' ? 0 : state === 'entered' ? 1 : 0,
            transform: state === "entered" ? "translateX(0)": state === "exiting" ? "translateX(-100%)" : state === "entering" ? "translateX(100%)" : "translateX(0)",
         
            
          }}
        >
          
            <Box p={3} className={classes.TabPanel}>
              {children}
            </Box>
         
        </div>
        )}
      </Transition>
      
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  export default TabPanel;