import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">VideoStew Clone</h1>
      <p className="text-lg mb-8 text-gray-600">AI 기반 영상 자동 생성기</p>
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
        onClick={() => navigate("/create")}
      >
        시작하기
      </button>
    </div>
  )
}

export default Home