/** @format */
import { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.headers.get['X-Api-Key'] =
  'X0RJf1RjhctUxTka7UQisg==TgVq8OcBO5Lh3LUw';

export default function Quotes() {
  const [data, setData] = useState('Loading...');

  const FetchQuotes = () => {
    axios
      .get('https://api.api-ninjas.com/v1/quotes?category=success')
      .then((res) => {
        if (res.status === 200) {
          setData(res.data[0].quote)
        }
      })
      .catch((e) => {
        setData(e.message)
      });
  };

  useEffect(() => {
    FetchQuotes()
  }, []);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}
