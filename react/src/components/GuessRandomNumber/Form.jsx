import { useState, useEffect } from "react";

export default function Form({compareNumber, isCorrect}) {

  const [inputNumber, setInputNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    compareNumber(Number(inputNumber));
    // 제출시 초기화
    setInputNumber('');
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setInputNumber(value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}
        className="flex flex-col">
        <input type="number" value={inputNumber}
          onChange={handleChange}
          placeholder="1부터 100 사이의 숫자를 입력하세요" 
          min="1" max="100" required
          className="w-90 h-10 p-2 mb-2  border-1 border-gray-400 rounded-lg" />
        <input type="submit" value="제출"
          disabled={isCorrect}
          className={`w-90 h-10 mb-3  text-white rounded-lg 
          ${inputNumber ? 'bg-blue-400' : 'bg-gray-400'}`} />
      </form>
    </div>
  )
}
