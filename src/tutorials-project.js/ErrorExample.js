import React, { useState, useEffect } from 'react';
import { data } from './data';
//seconnd agrument
const url = 'https://api.github.com/users/QuincyLarson';
// const url = 'https://api.github.com/users';
function Project() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('Default user');

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then(({ login }) => {
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>please wait...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }
  return <h2>{user}</h2>;
}

export default Project;
