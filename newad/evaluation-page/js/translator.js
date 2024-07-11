var translator = new function() {
    var lang = 'lang' // Actually the name doesn't matter when the server returns already localized messages
    var dictionary = {}
    var messages = typeof translatedMessages !== 'undefined' ? mergeMessages(defaultMessages, window.translatedMessages) : defaultMessages
    for (var message in messages) {
        if (messages.hasOwnProperty(message)) {
            var value = {}
            value[lang] = messages[message]
            dictionary[message] = value
        }
    }

    this.setNewTranslation = function(newMessages) {
        messages = typeof translatedMessages !== 'undefined' ? mergeMessages(defaultMessages, newMessages) : defaultMessages
        for (var message in messages) {
            if (messages.hasOwnProperty(message)) {
                var value = {}
                value[lang] = messages[message]
                dictionary[message] = value
            }
        }
    }


    this.translate = function(element) {
        $(element).translate({lang: lang, t: dictionary})
    }

    this.get = function(label) {
        var msg = messages[label]
        if (arguments.length > 1) {
            // inject arguments
            for (var i = 1; i < arguments.length; i++) {
                let argument = arguments[i] || ''
                msg = msg.replace('{' + (i - 1) + '}', argument)
            }
        }
        return msg
    }

    function mergeMessages(defaults, translated) {
        return $.extend({}, defaults, translated)
    }
}
