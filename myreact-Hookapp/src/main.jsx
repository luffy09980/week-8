import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Index.css'
import ClickCounter from './counter'
import EmojiCounter from './EmojeeCounter'
import WeatherMoodWidget from './WeatherMoodWidget'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickCounter />
    <EmojiCounter pic='Love' />
    <EmojiCounter pic='Sad' />
    <EmojiCounter pic='Like' />
    <WeatherMoodWidget weather='Sunny' />
    <WeatherMoodWidget weather='Rainy' />
    <WeatherMoodWidget weather='Cloudy' />
  </StrictMode>,
)
