import React from 'react';
import { signInWithGoogle } from '../Firebase';

const Signin = () => (
  <div>
    <button type="button" onClick={signInWithGoogle}>Sign In with Google</button>
  </div>
);

export default Signin;
