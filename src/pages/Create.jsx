import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [topic, setTopic] = useState('')
  const navigate = useNavigate()

  const handleCreate = () => {
    if (topic.trim()) {
      navigate("/preview")
    }
  }

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">주제 입력</h2>
      <input
        type="text"
        placeholder="예: 성공에 대한 명언"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full max-w-xl p-4 border border-gray-300 rounded-lg mb-4"
      />
      <button
        onClick={handleCreate}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        영상 생성 시작
      </button>
    </div>
  )
}

export default Create