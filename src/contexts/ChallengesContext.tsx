import React, { createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json'
import { LevelUp } from '../components/LevelUp'

interface Challenge {
  type: string;
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenged: () => void;
  completeChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  const initialState = {
    type: '',
    description: '',
    amount: 0
  }

  const [activeChallenge, setActiveChallenge] = useState(initialState)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)
  }

  function resetChallenged() {
    setActiveChallenge(initialState)
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(initialState)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider 
      value={{ 
        level, 
        currentExperience, 
        challengesCompleted, 
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenged,
        completeChallenge
      }}>
      {children}

      <LevelUp />
    </ChallengesContext.Provider>
  )


}