import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function Hello(props) {

  return (
   <div>
	<h1> Hello World </h1>
   </div>
  );
}

export default withRouter(Hello);
