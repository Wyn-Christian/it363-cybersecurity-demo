'use client';
import { useState, useEffect } from 'react';

export default function SecureComment() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const submitComment = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3001/api/secure-comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username: 'guest', comment }),
    });
    setComment('');
    loadComments();
  };

  const loadComments = async () => {
    const res = await fetch('http://localhost:3001/api/comment');
    const data = await res.json();
    setComments(data);
  };

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <div>
      <h2>Comment (Secure)</h2>
      <form onSubmit={submitComment}>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {comments.map((c, i) => (
          <li key={i}><b>{c.username}</b>: {c.comment}</li>
        ))}
      </ul>
    </div>
  );
}
