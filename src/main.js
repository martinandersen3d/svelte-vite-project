import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})


import AppState from './App-State.svelte'

const appState = new AppState({
  target: document.getElementById('app-state'),
})


export default {app, AppState}




