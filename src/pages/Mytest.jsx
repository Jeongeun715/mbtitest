import axios from "axios";
import { useEffect, useState } from "react";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

function App() {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchUsers = async () => {
    // 1. axios instance로 데이터 가져오기 및 posts 상태 업데이트
    // 여기에 코드를 추가하세요.
    const res = await instance.get(`/users`);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAdd = async () => {
    if (!title || !userPassword) return;
    // 2. axios instance로 데이터 추가하기
    // 여기에 코드를 추가하세요.
    await instance.post(`/users`, {
      title: title,
      userPassword: userPassword,
    });
    setTitle("");
    userPassword("");
    fetchUsers();
  };

  const handleDelete = async (id) => {
    // 3. axios instance로 데이터 삭제하기
    // 여기에 코드를 추가하세요.
    await instance.delete(`/users/${id}`); //백틱  필수!!
    fetchUsers();
  };

  const handleEdit = async () => {
    if (!editId || !title || !userPassword) return;
    // 4. axios instance로 데이터 수정하기
    // 여기에 코드를 추가하세요.
    await instance.put(`/users/${editId}`, {
      title: title,
      userPassword: userPassword,
    });
    setEditId(null);
    setTitle("");
    userPassword("");
    fetchUsers();
  };

  const startEdit = (post) => {
    setEditId(post.id);
    setTitle(post.title);
    userPassword(post.userPassword);
  };

  return (
    <div>
      <h1>Posts CRUD</h1>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
        />
        <input
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          placeholder="작성자"
        />
        {editId ? (
          <button onClick={handleEdit}>수정하기</button>
        ) : (
          <button onClick={handleAdd}>추가하기</button>
        )}
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} - {post.userPassword}
            <button onClick={() => startEdit(post)}>수정</button>
            <button onClick={() => handleDelete(post.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
