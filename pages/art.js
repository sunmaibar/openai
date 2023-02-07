import { useState } from 'react'

export default function MyPage() {
  const [prompt, setPrompt] = useState('')
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    const response = await fetch('/api/get-painting', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt }),
    })
    const data = await response.json()
    setAnswer(data.text)
    setIsLoading(false)
  }

  function handleChange(e) {
    setPrompt(e.target.value)
  }

  return (
    <div className='container'>
      <h1>你想要電腦幫你畫什麼?</h1>
      <h5>
        <span style={{ color: 'red' }}>僅限英文!!!</span>
        譬如：驢子身上有紅色的刺青 donkey with red tattoos
      </h5>
      <form className='our-form' onSubmit={handleSubmit}>
        <input className='prompt-field' type='text' onChange={handleChange} />
        <button className='prompt-button'>Go!</button>
      </form>

      {isLoading && <div className='loading-spinner'></div>}

      {isLoading == false && <img src={answer} />}
    </div>
  )
}
