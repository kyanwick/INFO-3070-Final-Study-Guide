import React, { useState, useEffect } from 'react';
import { labReviewQuestions } from './quizData';
import { ChevronRight, RefreshCcw, Check, X } from 'lucide-react';

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedLab, setSelectedLab] = useState(null);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Extract unique lab sources
  const availableLabs = labReviewQuestions.map(section => section.source);

  const handleLabSelection = (lab) => {
    setSelectedLab(lab);
    // Find the selected lab's questions and shuffle their options
    const labQuestions = labReviewQuestions.find(section => section.source === lab);
    const questionsWithShuffledOptions = labQuestions.questions.map(question => ({
      ...question,
      shuffledOptions: shuffleArray(question.options)
    }));
    
    // Reset quiz 
    setShuffledQuestions(questionsWithShuffledOptions);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setIncorrectQuestions([]);
  };

  const currentLabQuestions = shuffledQuestions;

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    const currentQuizQuestion = currentLabQuestions[currentQuestion];

    // Check if answer is correct 
    if (selectedAnswer === currentQuizQuestion.correctAnswer) {
      setScore(score + 1);
    } else {
      // Track incorrect questions with their details
      setIncorrectQuestions([
        ...incorrectQuestions, 
        {
          question: currentQuizQuestion.question,
          selectedAnswer,
          correctAnswer: currentQuizQuestion.correctAnswer
        }
      ]);
    }

    // Move to next question or show results
    if (currentQuestion < currentLabQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }

    setSelectedAnswer(null);
  };

  const resetQuiz = () => {
    setSelectedLab(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setIncorrectQuestions([]);
    setShuffledQuestions([]);
  };

  // Lab Selection Screen
  if (!selectedLab) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-6">Select a Lab</h2>
          <div className="space-y-4">
            {availableLabs.map((lab, index) => (
              <button
                key={index}
                onClick={() => handleLabSelection(lab)}
                className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                {lab} Review
                <ChevronRight className="ml-2 inline" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Result Screen
  if (showResult) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center">{selectedLab} Quiz Results</h2>
          
          {/* Overall Score */}
          <div className="text-center mb-6">
            <p className="text-xl">
              You scored {score} out of {currentLabQuestions.length}
            </p>
            <p className={`font-bold ${score / currentLabQuestions.length > 0.7 ? 'text-green-600' : 'text-red-600'}`}>
              {score / currentLabQuestions.length > 0.7 
                ? 'Great job! You passed the review.' 
                : 'You might want to review the material again.'}
            </p>
          </div>

          {/* Incorrect Questions */}
          {incorrectQuestions.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Incorrect Questions:</h3>
              {incorrectQuestions.map((q, index) => (
                <div key={index} className="bg-red-50 p-4 rounded mb-3">
                  <p className="font-medium mb-2">{q.question}</p>
                  <p className="text-red-600 mb-1">Your answer: {q.selectedAnswer}</p>
                  <p className="text-green-600">Correct answer: {q.correctAnswer}</p>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <button 
              onClick={resetQuiz} 
              className="bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600"
            >
              <RefreshCcw className="mr-2" /> Change Lab
            </button>
            <button 
              onClick={() => {
                const labQuestions = labReviewQuestions.find(section => section.source === selectedLab);
                const questionsWithShuffledOptions = labQuestions.questions.map(question => ({
                  ...question,
                  shuffledOptions: shuffleArray(question.options)
                }));
                setShuffledQuestions(questionsWithShuffledOptions);
                setShowResult(false);
                setCurrentQuestion(0);
                setSelectedAnswer(null);
                setScore(0);
                setIncorrectQuestions([]);
              }} 
              className="bg-green-500 text-white px-4 py-2 rounded flex items-center hover:bg-green-600"
            >
              Retake {selectedLab}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Screen
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">
          {selectedLab} Review Quiz
        </h2>
        <p className="text-lg mb-4">{currentLabQuestions[currentQuestion].question}</p>
        
        <div className="space-y-3">
          {currentLabQuestions[currentQuestion].shuffledOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`w-full p-3 text-left rounded 
                ${selectedAnswer === option 
                  ? (option === currentLabQuestions[currentQuestion].correctAnswer 
                      ? 'bg-green-200 border-green-500' 
                      : 'bg-red-200 border-red-500')
                  : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {option}
              {selectedAnswer === option && (
                selectedAnswer === currentLabQuestions[currentQuestion].correctAnswer 
                  ? <Check className="float-right text-green-600" /> 
                  : <X className="float-right text-red-600" />
              )}
            </button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <button 
            onClick={handleNextQuestion} 
            className="mt-4 w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 flex items-center justify-center"
          >
            Next Question <ChevronRight className="ml-2" />
          </button>
        )}

        <div className="mt-4 text-center text-sm text-gray-600">
          Question {currentQuestion + 1} of {currentLabQuestions.length} 
          {` (${selectedLab})`}
        </div>
      </div>
    </div>
  );
}

export default App;