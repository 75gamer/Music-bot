module.exports = {
    app: {
        token: 'MTI1Njk1MzczNDEwNjQ1MjAzOQ.G-5yLR.1cqm1VPwxCeg_IkbINE3xgOhe2d0j7CCgT8oqY',
        playing: 'by the Community ❤️',
        global: true,
        guild: '1253350941994913922',
        extraMessages: false,
        loopMessage: false,
        lang: 'en',
        enableEmojis: false,
    },

    emojis:{
        'back': '⏪',
        'skip': '⏩',
        'ResumePause': '⏯️',
        'savetrack': '💾',
        'volumeUp': '🔊',
        'volumeDown': '🔉',
        'loop': '🔁',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        Translate_Timeout: 10000,
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
