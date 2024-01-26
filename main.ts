basic.forever(function () {
    basic.showString("Hello!")
    while (false) {
        music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    }
})
