var initializer = new function() {

    var globalEvalPermissions
    var token
    var mode
    var locale
    var timezoneId

    this.init = function(userToken, loginId, evalPermissions, evaluationMode, userLocale, data, pTimezoneId) {
        token = userToken
        globalEvalPermissions = evalPermissions
        mode = evaluationMode
        locale = userLocale
        setMomentLocale(userLocale)
        timezoneId = pTimezoneId
        api.init(userToken, loginId)
        var $appBody = $('.app-body')
        translator.translate($appBody)

        // if this statement become too big move it to a separate file
        if (evaluationMode === EVAL_MODE_CONSOLE) {
            $appBody.on(EVENT_OPEN_INTERACTION, function(e, data) {
                var panelId = tabs.getPanelId(evaluationConsoleFactory.prefix, 0)
                tabs.createPanelOnly(panelId, 'active')
                evaluationConsoleFactory.createSingle(data)
            })
            $appBody.trigger(EVENT_OPEN_INTERACTION, [data])
        } else {
            evaluationHome.init(userToken, loginId)
        }

        startAuthCheckTask()
        tabs.addWindowResizeEventHandler()
    }

    this.getGlobalEvalPermissions = function() {
        return globalEvalPermissions
    }

    this.getToken = function() {
        return token
    }

    this.getMode = function() {
        return mode
    }

    this.getLocale = function() {
        return locale
    }

    this.getTimezoneId = function() {
        return timezoneId
    }

    function startAuthCheckTask() {
        setInterval(function() { api.checkAuth() }, REFRESH_SESSION_INTERVAL)
    }
}

window.initializer = initializer

function getSuitableLocale(locale) {
    const localeFirst = locale.substring(0, 2)
    if (localeFirst.length < 2) {
        return
    }
    switch (localeFirst) {
        case 'ru':
            return 'ru_RU'
        case 'en':
            return 'en_US'
        case 'ja':
            return 'ja_JP'
        case 'ko':
            return 'ko_KR'
        case 'es':
            return 'es_MX'
        default:
            return ''
    }
}

// Function to set a language cookie
function setLanguageCookie(lang) {
    const date = new Date()
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000))
    const expires = 'expires=' + date.toUTCString()
    document.cookie = 'locale=' + lang + '; ' + expires + '; path=/'
}

window.addEventListener(
    'message',
    event => {
        if (event.origin !== document.location.origin) return
        if (event.data.type === 'init-evaluation') {
            const {token, loginId, locale, timezone, permissions} = event.data
            const parsedLocale = getSuitableLocale(locale)

            function init() {
                $('#container').load('/agent/evaluation-page/common-template.html', function() {
                    $('#container-holder').load('/agent/evaluation-page/home-layout-template.html', function() {
                        initializer.init(token, loginId, permissions, EVAL_MODE_FULL, parsedLocale, undefined, timezone)
                    })
                })
            }
            if (parsedLocale) {
                $(function() {
                    const localeScript = document.createElement('script')
                    localeScript.onload = () => {
                        translator.setNewTranslation(window.translatedMessages)
                        setLanguageCookie(parsedLocale)
                        init()

                    }
                    localeScript.src = `/agent/evaluation-page/i18n/${parsedLocale}_messages.js`
                    window.document.body.appendChild(localeScript)
                })
            } else {
                init()
            }
        }
    },
    false,
)
