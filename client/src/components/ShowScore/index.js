import React, { useEffect, useState } from 'react';
import api from '../../utils/api';

export default function ShowScore(props) {
  const [result, setResult] = useState([]);
  const fetchResponse = async () => {
    const res = await api
      .get(`/user/showres/${props.match.params.id}`)
      .then((res) => res)
      .catch((err) => console.log(err));
    setResult([...res.data]);
  };
  useEffect(() => {
    fetchResponse();
  }, [props.match.params.id]);
  return (
    <div className="result-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {result.map((res) => {
            return (
              <tr key={res._id}>
                <td>{res.name}</td>
                <td>{res.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
