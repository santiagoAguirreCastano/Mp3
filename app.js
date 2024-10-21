import { playList } from "./playList.js"
window.addEventListener('DOMContentLoaded', madeCards)

let currentIndex = 0

function makeSong(song) {
    const container = document.createElement('div')
    container.id = 'container-player'
    container.classList.add('container-player')

    const title = document.createElement('h1')
    title.innerText = "Play Music"

    const containerAlbum = document.createElement('div')
    containerAlbum.id = 'controls'
    containerAlbum.classList.add('container-album')

    const containerControls = document.createElement('div')
    containerControls.id = 'player_controls'
    containerControls.classList.add('player_controls')

    const containerBtn = document.createElement('div')
    containerBtn.classList.add("player_controls")

    const imgCard = document.createElement('img')
    imgCard.src = song.img

    const titleArtist = document.createElement('h2')
    titleArtist.classList.add('player__artist')
    titleArtist.innerHTML = song.artist

    const titleSong = document.createElement('h3')
    titleSong.classList.add('player__song')
    titleSong.innerHTML = song.title

    const audio = document.createElement('audio')
    audio.classList.add('player__audio')
    audio.controls = true
    audio.id = 'audio'

    const source = document.createElement('source')
    source.src = song.song 

    audio.appendChild(source)
    audio.load()

    const changeTenMore = document.createElement('i')
    changeTenMore.classList.add('bx', 'bxs-chevron-right')
    changeTenMore.id = 'TenMore'

    const changeTenLess = document.createElement('i')
    changeTenLess.classList.add('bx', 'bxs-chevron-left')
    changeTenLess.id = 'TenLess'

    const rewindButton = document.createElement('i')
    rewindButton.classList.add('bx', 'bx-rewind')
    rewindButton.id = 'rewind'

    const playButton = document.createElement('i')
    playButton.classList.add('bx', 'bx-play')
    playButton.id = 'play'

    const stopButton = document.createElement('i')
    stopButton.classList.add('bx', 'bx-stop')
    stopButton.id = 'stop'

    const pauseButton = document.createElement('i')
    pauseButton.classList.add('bx', 'bx-pause')
    pauseButton.id = 'pause'

    const forwardButton = document.createElement('i')
    forwardButton.classList.add('bx', 'bx-fast-forward')
    forwardButton.id = 'forward'

    container.appendChild(title)
    container.appendChild(containerAlbum)
    containerAlbum.appendChild(imgCard)
    containerAlbum.appendChild(titleArtist)
    containerAlbum.appendChild(titleSong)
    container.appendChild(containerControls)
    containerControls.appendChild(audio)
    containerControls.appendChild(containerBtn)
    containerBtn.appendChild(rewindButton)
    containerBtn.appendChild(changeTenLess)
    containerBtn.appendChild(playButton)
    containerBtn.appendChild(stopButton)
    containerBtn.appendChild(pauseButton)
    containerBtn.appendChild(changeTenMore)
    containerBtn.appendChild(forwardButton)

    document.querySelector('main').appendChild(container)

    changeTenLess.addEventListener('click', () => {
        audio.currentTime -= 10
    })
    changeTenMore.addEventListener('click', () => {
        audio.currentTime += 10
    })
    playButton.addEventListener('click', () => {
        audio.play()
    })

    pauseButton.addEventListener('click', () => {
        audio.pause()
    })

    stopButton.addEventListener('click', () => {
        audio.pause()
        audio.currentTime = 0
    })

    forwardButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % playList.length
        loadSong(playList[currentIndex])
    })

    rewindButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + playList.length) % playList.length
        loadSong(playList[currentIndex])
    })
}

function loadSong(song) {
    const audio = document.getElementById('audio')
    const imgCard = document.querySelector('.container-player img')
    const titleArtist = document.querySelector('.player__artist')
    const titleSong = document.querySelector('.player__song')

    audio.src = song.song
    imgCard.src = song.img
    titleArtist.innerHTML = song.artist
    titleSong.innerHTML = song.title
    audio.load()
    audio.play()
}

function madeCards() {
    makeSong(playList[currentIndex])
}
