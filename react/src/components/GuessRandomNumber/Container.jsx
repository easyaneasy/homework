import { useState, useEffect } from "react";
import Form from './Form'
import RandomNumber from './RandomNumber'


export default function Container() {
    // 랜덤 숫자
    const [randomNumber, setRandomNumber] = useState(null);
    // 시도 횟수
    const [attempts, setAttempts] = useState(0); 
    // 힌트 메세지
    const [hintMessage, setHintMessage] = useState(""); 
    // 정답 여부
    const [isCorrect, setIsCorrect] = useState(false);

    // 랜덤 숫자 생성
    useEffect(() => {
        const newRandomNumber = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(newRandomNumber);
        console.log(newRandomNumber);
    }, []); 

    // 숫자 비교
    const compareNumbers = (num) => {
        setAttempts(currentCount => currentCount + 1);
        if(num === randomNumber){
            setIsCorrect(true);
            setHintMessage("정답");
        }else if(num < randomNumber){
            setHintMessage("UP!");
        }else{
            setHintMessage("DOWN!")
        }
    }

    return (
        <div className="flex justify-center w-screen">
            <div className="flex flex-col items-center rounded-xl shadow-xl w-100 h-auto">
                <h1 className="text-3xl font-bold mt-10">랜덤 숫자 맞추기 게임</h1>
                
                <p className="text-xl font-bold mt-4">정답 숫자</p>
                <RandomNumber randomNumber={randomNumber} isCorrect={isCorrect} ></RandomNumber>

                <Form compareNumber={compareNumbers} isCorrect={isCorrect}></Form>
      
                {!isCorrect && <p className="font-bold"> {hintMessage}</p>}
                <p className="mt-3 mb-6 font-bold">시도 횟수: {attempts}</p>
            </div>
        </div>
    )
}
