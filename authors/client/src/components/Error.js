import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

const Error = (props) => {
  return (
    <div>
      <p>
        We're sorry, but we could not find the author you are looking for. Would
        you like to add an Author instead?
      </p>
      <Link to={'/new'}>Create an Author</Link>
    </div>
  );
};

export default Error;
