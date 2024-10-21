import { createContext, useReducer } from "react";
import questions from '../data/questions_complete';

const STAGES = ["Start", "Category", "Playing", "Finished"];

const initialStage = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
    help: false,
    optionToHide: null,
};

const quizReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1]
            };

        case "START_GAME":
            let quizQuestions = null;

            state.questions.forEach((question) => {
                if (question.category === action.payload) {
                    quizQuestions = question.questions;
                }
            });

            return {
                ...state,
                questions: quizQuestions,
                gameStage: STAGES[2],
            };

        case "REORDER_QUESTIONS":
            const reorderedQuestions = state.questions.sort(() => {
                return Math.random() - 0.5;
            });

            return {
                ...state,
                reorderedQuestions
            };

        case "CHECK_ANSWER":
            if (state.answerSelected)
                return state;

            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0;

            if (answer === option)
                correctAnswer = 1;

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            };

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false;

            if (!state.questions[nextQuestion])
                endGame = true;

            return {
                ...state,
                help: false,
                answerSelected: false,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[3] : state.gameStage
            };

        case "NEW_GAME":
            return initialStage;

        case "SHOW_TIP":
            return {
                ...state,
                help: "tip",
            };

        case "REMOVE_ONE":
            const questionsWithoutOneOption = state.questions[state.currentQuestion];

            let repeat = true;
            let optionToHide;

            questionsWithoutOneOption.options.forEach((option) => {
                if (option !== questionsWithoutOneOption.answer && repeat) {
                    optionToHide = option;
                    repeat = false;
                }
            });

            return {
                ...state,
                help: true,
                optionToHide,
            };
    
        default:
            break;
    }
};

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialStage);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};