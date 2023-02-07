import { useState } from 'react'

export default function MyPage() {
  const [prompt, setPrompt] = useState('')
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    const response = await fetch('/api/get-answer', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt }),
    })
    const data = await response.json()
    setAnswer(data.text.trim())
    setIsLoading(false)
  }

  function handleChange(e) {
    setPrompt(e.target.value)
  }

  return (
    <div className='container'>
      <h1>大仁哥智能AI請輸入隨意想問的事情</h1>
      <h5>
        <span style={{ color: 'red' }}>僅限英文!!!</span>
        譬如：台灣的15個地名，台鐵的列車種類
      </h5>
      <form className='our-form' onSubmit={handleSubmit}>
        <input className='prompt-field' type='text' onChange={handleChange} />
        <button className='prompt-button'>Go!</button>
      </form>

      {isLoading && <div className='loading-spinner'></div>}

      <div className='answer-area'>{answer}</div>
    </div>
  )
}
