
const OutcomingMessages = {
    Login: 'LOGIN',
    Logout: 'LOGOUT',
    NewInteraction: 'NEW_INTERACTION',
    InteractionRemoved: 'INTERACTION_REMOVED',
    InteractionStateChange: 'INTERACTION_STATE_CHANGE',
    InteractionSwitched: 'INTERACTION_SWITCHED',
    AgentStateChange: 'AGENT_STATE_CHANGE',
    ManualCall: 'MANUAL_CALL',
    RequestTransferData: 'REQUEST_TRANSFER_DATA',
    LoadTransferData: 'LOAD_TRANSFER_DATA',
}

const IncomingMessages = {
    CreateInteraction: 'CREATE_INTERACTION',
    GetAgentState: 'GET_AGENT_STATE',
    SetAgentState: 'SET_AGENT_STATE',
    TerminateCall: 'TERMINATE_CALL',
    CompleteInteraction: 'COMPLETE_INTERACTION',
    SwitchActiveInteraction: 'SWITCH_ACTIVE_INTERACTION',
    ChangeService: 'CHANGE_SERVICE',
    SetDisposition: 'SET_DISPOSITION',
    GetRecordingStatus: 'GET_RECORDING_STATUS',
    SetRecordingStatus: 'SET_RECORDING_STATUS',
    GetConfig: 'GET_CONFIG',
}

const response = message => message + '_RESPONSE'

const adapterDomain = 'https://bpintegrations.web.app'

const agentNameSpan = document.getElementById('agent_name'),
    agentStatusSpan = document.getElementById('agent_status'),
    interactionListDiv = document.getElementById('interaction_list'),
    authZone = document.getElementById('auth'),
    unauthZone = document.getElementById('unauth'),
    mainContent = document.getElementById('main_content'),
    manualCallButton = document.getElementById('manual_call'),
    activeCrmObjects = []

let lastId = 1
const getUniqueId = () => (++lastId + 'xO2').toString()

const clearBGColorStyles = elem => {
    if (elem && elem.classList) {

        [].forEach.call(elem.classList, cls => {
            if (cls !== 'main-content-intr') {
                elem.classList.remove(cls)
            }
        })
    }
}

/* AD CONSTANTS */
const agent = {
    id: '{3124-d87934a-23fc3de2-42ff0}',
    name: 'Pavel K',
}
const sessionId = '{87yf-3h9f0-fesfsefsefesf-g45tg4}'

const type = ['voice', 'chat']

const subject = {
    'voice': 'USD: Bright Pattern phone call session',
    'chat': 'USD: Bright Pattern messaging chat session',
}

const SCREEN_POP_DATA = {
    web: {
        type: 'web',
        action: 'OPEN_WEB_PAGE',
        URL: 'https://google.com',
        popUponAnswer: 'false',
        keepPopupOpenAfterFinish: 'false',
    },
    dynamicscrm: {
        type: 'dynamicscrm',
        action: 'SHOW_QUERY_RESULTS',
        statement: 'pau',
        popUponAnswer: 'false',
    },
}

class Interaction {
    constructor(intrData) {
        this.id = getUniqueId()
        this.duration = 0
        this.stopped = false
        this.voiceRecording = 'OFF'
        this.screenRecording = 'OFF'
        this.callTimeListeners = []
        this._state = undefined
        this.disposition = undefined
        this.notes = undefined
        this.service = 'Outbound calls'
        this.screenPop = SCREEN_POP_DATA
        this.recordingUrl = 'recordingUrl'

        this.fullname = intrData.fullname
        // this.type = intrData.type
        this.type = type[Math.floor(Math.random() * 2)]
        this.phoneNumber = intrData.phoneNumber
        this.direction = intrData.direction
        this.email = intrData.email

        this.htmlContent = ''
    }

    get state() {
        return this._state
    }

    set state(newState) {

        clearBGColorStyles(this.htmlContent)

        switch (newState) {
            case 'delivery_pending':
                this.htmlContent.classList.add('pending')
                break
            case 'delivered':
                this.htmlContent.classList.add('answered')
                break
            case 'wrap_up':
                this.htmlContent.classList.add('wrap-up')
                break
        }
        this._state = newState
    }

    run() {
        const timer = setInterval(() => {
            if (this.stopped) {
                clearInterval(timer)
            } else {
                this.duration++
                this.callTimeListeners.forEach(listener => listener(this.duration))
            }
        }, 1000)
    }

    addCallTimeListener(fn) {
        this.callTimeListeners.push(fn)
    }

    export() {
        return {
            interactionId: this.id,
            state: this.state,
            type: this.type,
            subject: subject[this.type],
            phoneNumber: this.phone,
            callDirection: this.direction,
            screenPop: this.screenPop,
            description: this.notes,
            disposition: this.disposition,
            globalInteractionId: this.id,
            service: this.service,
            recordingUrl: this.recordingUrl,
        }
    }
}

/* AD STATE */
const agentState = {
    state: 'ready',
    notReadyReason: undefined,
}
const interactionList = []
let currentInteraction = null
let getTransferDataCallback = null
let service = 'Voice Calls'

const randomCallTime = () => {
    const min = 6000, max = 15000
    return min + Math.random() * (max - min)
}

const changeActiveInteractionUI = newInteraction => {

    if (!newInteraction) {
        return
    }

    const selectedItem = document.querySelector('.selected-intr-item'),
        newItemToSelect = document.getElementById(`interaction_item_${newInteraction.id}`)

    if (selectedItem) {
        selectedItem.classList.remove('selected-intr-item')
    }
    newItemToSelect.classList.add('selected-intr-item')

    if (currentInteraction && currentInteraction.htmlContent) {
        mainContent.replaceChild(newInteraction.htmlContent, currentInteraction.htmlContent)
    } else {
        mainContent.appendChild(newInteraction.htmlContent)
    }
}

const clickOnItem = interactionId => {
    console.log(`#ad-switch from ${currentInteraction && currentInteraction.id} to ${interactionId}`)
    const clickedInteraction = interactionList.find(intr => intr.id === interactionId)
    changeActiveInteractionUI(clickedInteraction)
    switchInteraction(clickedInteraction ? clickedInteraction.id : null)
}

const createInteractionItem = interaction => {

    const itemMarkup = `
        <div
            class='interaction-item'
            id='interaction_item_${interaction.id}'
            data-id='${interaction.id}'
            onclick='clickOnItem("${interaction.id}");'
        >
            <div class='intr-item-left'>
                <span>
                    Call #${interaction.id}:
                </span>
                <span>
                    ${interaction.fullname}
                </span>
            </div>
            <div class='intr-item-right'>
                <span id='intr-duration-${interaction.id}'>
                    ${interaction.duration && interaction.duration}
                </span>
            </div>
        </div>`

    interaction.addCallTimeListener(duration => {
        const intrDurationSpan = document.getElementById(`intr-duration-${interaction.id}`)
        intrDurationSpan.textContent = duration
    })

    if (currentInteraction) {
        const lastSelectedItem = document.getElementById(`interaction_item_${currentInteraction.id}`)
        if (lastSelectedItem) {
            lastSelectedItem.classList.remove('selected-intr-item')
        }
    }

    const itemMainContent = document.createElement('div')
    itemMainContent.classList.add('main-content-intr')
    itemMainContent.id = `main_content_intr_${interaction.id}`

    const mainContentHtml = `
        <h3>
            Calling...
        </h3>
        <div class='phone-number'>
            ${interaction.phoneNumber}
        </div>
        <div class='interlocutor-name'>
            ${interaction.fullname}
        </div>
        <div class='stop-call-button' onclick='stopCall("${interaction.id}");'>
            STOP
        </div>
    `

    itemMainContent.innerHTML = mainContentHtml

    setTimeout(() => {

        const answeredCallHtmlContent = `
            <h3>
                Active Call
            </h3>
            <div class='phone-number'>
                ${interaction.phoneNumber}
            </div>
            <div class='interlocutor-name'>
                ${interaction.fullname}
            </div>
            <div class='call-duration'>
                <span>
                    Duration: 
                </span>
                <span id='content_duration'></span>
            </div>
            <div class='stop-call-button' onclick='stopCall("${interaction.id}");'>
                STOP
            </div>
        `

        itemMainContent.innerHTML = answeredCallHtmlContent
        interaction.addCallTimeListener(duration => {
            const contentDurationDiv = interaction.htmlContent.querySelector('#content_duration')
            contentDurationDiv.textContent = duration
        })

        changeInteractionState(interaction.id, 'delivered')
        interaction.run()

    }, randomCallTime())

    interaction.htmlContent = itemMainContent
    interactionListDiv.insertAdjacentHTML('beforeend', itemMarkup)
    changeActiveInteractionUI(interaction)
}

const deleteInteractionUI = interaction => {

    if (!interaction) {
        return
    }
    if (interaction.htmlContent.parentElement) {
        interaction.htmlContent.remove()
    }
    const intrListItem = document.getElementById(`interaction_item_${interaction.id}`)
    intrListItem.remove()

}

const stopInteraction = interaction => {

    changeInteractionState(interaction.id, 'completed')
    removeInteraction(interaction.id)
    const delIndex = interactionList.indexOf(interaction)
    deleteInteractionUI(interaction)
    interactionList.splice(delIndex, 1)
    if (currentInteraction === interaction) {
        if (interactionList.length) {
            clickOnItem(currentInteraction.id)
        } else {
            clickOnItem(null)
        }
    }

}

const submitACW = interactionId => {

    const interaction = interactionList.find(intr => intr.id === interactionId),
        notesField = interaction.htmlContent.querySelector('#notes_field'),
        dispositionField = interaction.htmlContent.querySelector('#disposition_field')

    interaction.notes = notesField.value
    interaction.disposition = dispositionField.value

    stopInteraction(interaction)

}

const initAfterCallWork = interaction => {

    const ACWContent = `
        <div>
            Call Review
        </div>
        <div class='call-review-field'>
            <label for='notes'>
                Notes:
            </label>
            <textarea id='notes_field' name='notes' rows='3' placeholder='Write some notes...'></textarea>
        </div>
        <div class='call-review-field'>
            <label for='notes'>
                Disposition:
            </label>
            <textarea id='disposition_field' name='disposition' rows='3' placeholder='Select disposition...'></textarea>
        </div>
        <div class='button-row'>
            <button id='submit_call_review' onclick='submitACW("${interaction.id}");'>
                Submit
            </button>
        </div>
    `
    interaction.htmlContent.innerHTML = ACWContent

    changeInteractionState(interaction.id, 'wrap_up')

}

const stopCall = interactionId => {

    const interaction = interactionList.find(intr => intr.id === interactionId)
    interaction.stopped = true

    if (interaction.state === 'delivery_pending') {
        stopInteraction(interaction)
    } else if (interaction.state === 'delivered') {
        initAfterCallWork(interaction)
    }
}

manualCallButton.onclick = () => {

    const manualCallNumber = '+777712304332'

    const message = OutcomingMessages.ManualCall
    console.log('SEND: #', message)

    window.parent.postMessage(JSON.stringify({
        type: message,
        data: {
            phonenumber: manualCallNumber,
        },
    }), adapterDomain)

    const newInteractionData = {
        type: 'voice',
        fullname: 'Mr. Proper',
        phoneNumber: manualCallNumber,
    }
    addInteraction(newInteractionData)

}







function login() {
    const message = OutcomingMessages.Login
    console.log('SEND: #', message)

    unauthZone.style.display = 'none'
    authZone.style.display = null
    agentNameSpan.textContent = agent.name
    agentStatusSpan.textContent = agentState.state

    window.parent.postMessage(JSON.stringify({
        type: message,
        data: {
            sessionId,
            agentData: {
                GUID: agent.id,
                agentId: agent.name,
            },
        },
    }), adapterDomain)
}

function logout() {
    const message = OutcomingMessages.Logout
    console.log('SEND: #', message)

    window.parent.postMessage(JSON.stringify({
        type: message,
        data: null,
    }), adapterDomain)
}

function changeAgentState(newState) {

    agentState.state = newState.state
    agentState.notReadyReason = newState.notReadyReason
    agentStatusSpan.textContent = newState.state

    const message = OutcomingMessages.AgentStateChange
    console.log('SEND: #', message)

    window.parent.postMessage(JSON.stringify({
        type: message,
        data: newState,
    }), adapterDomain)
}

function addInteraction(data) {

    const newInteract = new Interaction(data)
    console.log('# new interaction: ', newInteract)
    interactionList.push(newInteract)

    createInteractionItem(newInteract)
    switchInteraction(newInteract.id)

    console.log('#NEW INTERACTION: ', newInteract)

    const message = OutcomingMessages.NewInteraction
    console.log('SEND: #', message, ' - ', newInteract)

    window.parent.postMessage(JSON.stringify({
        type: message,
        data: newInteract.export(),
    }), adapterDomain)

    changeInteractionState(newInteract.id, 'delivery_pending')

    return newInteract
}

function removeInteraction(interactionId) {
    const message = OutcomingMessages.InteractionRemoved
    console.log('SEND: #', message, ' - ', interactionId)

    window.parent.postMessage(JSON.stringify({
        type: message,
        data: {
            id: interactionId,
        },
    }), adapterDomain)
    console.log('send data: ', interactionId)
}

function changeInteractionState(interactionId, newState) {

    const interaction = interactionList.find(intr => intr.id === interactionId)
    interaction.state = newState

    const message = OutcomingMessages.InteractionStateChange
    console.log('SEND: #', message, ' - ', newState)

    window.parent.postMessage(JSON.stringify({
        type: message,
        data: interaction.export(),
    }), adapterDomain)
    console.log('send data: ', interaction.export())
}

function switchInteraction(newInteractionId) {

    const oldInteractionId = currentInteraction && currentInteraction.id,
        newInteraction = interactionList.find(intr => intr.id === newInteractionId)
    
    if (newInteractionId === oldInteractionId) {
        return
    }

    currentInteraction = newInteraction

    const message = OutcomingMessages.InteractionSwitched
    console.log('SEND: #', message)

    window.parent.postMessage(JSON.stringify({
        type: message,
        data: {
            id: newInteractionId,
        },
    }), adapterDomain)

}

async function requestTransferData() {

    return new Promise((resolve, reject) => {

        const message = OutcomingMessages.RequestTransferData
        console.log('SEND: #', message)

        window.parent.postMessage(JSON.stringify({
            type: message,
            data: {
                id: currentInteraction.id,
            },
        }), adapterDomain)

        getTransferDataCallback = resolve

    })
}

function loadTransferData(data) {

    const message = OutcomingMessages.LoadTransferData
    console.log('SEND: #', message)

    window.parent.postMessage(JSON.stringify({
        type: message,
        data,
    }), adapterDomain)
}

function onGetAgentState() {
    return agentState
}

function onSetAgentState(data) {
    changeAgentState(data)
    return null
}

function onCreateInteraction(data) {
    data.direction = 'OUTBOUND'
    addInteraction(data)
    return null
}

function onTerminateCall(data) {

    const index = interactionList.findIndex(intr => intr.id === data.id),
        interaction = interactionList[index]

    initAfterCallWork(interaction)

    return null
}

function onCompleteInteraction(data) {

    const index = interactionList.findIndex(intr => intr.id === data.id),
        interaction = interactionList[index]

    currentInteraction.stopped = true
    stopInteraction(interaction)
    return null
}

function onSwitchActiveInteraction(data) {
    clickOnItem(data.id)
    return null
}

function onChangeService(data) {
    service = data.servicename
    return null
}

function onSetDisposition(data) {
    const interaction = interactionList.find(intr => intr.id === data.id)
    interaction.disposition = data.name || data.code
    return null
}

function onGetRecordingStatus(data) {
    const interaction = interactionList.find(intr => intr.id === data.id)
    switch (data.target) {
        case 'CALL':
            return interaction.voiceRecording
        case 'SCREEN':
            return interaction.screenRecording
    }
}

function onSetRecordingStatus(data) {
    const interaction = interactionList.find(intr => intr.id === data.id)
    switch (data.target) {
        case 'CALL':
            interaction.voiceRecording = data.status
            break
        case 'SCREEN':
            interaction.screenRecording = data.status
            break
    }
    return null
}

function onGetConfig() {
    return {
        clickToAct: 'call',
    }
}

const messageListeners = {
    [IncomingMessages.CreateInteraction]: onCreateInteraction,
    [IncomingMessages.GetAgentState]: onGetAgentState,
    [IncomingMessages.SetAgentState]: onSetAgentState,
    [IncomingMessages.TerminateCall]: onTerminateCall,
    [IncomingMessages.CompleteInteraction]: onCompleteInteraction,
    [IncomingMessages.SwitchActiveInteraction]: onSwitchActiveInteraction,
    [IncomingMessages.ChangeService]: onChangeService,
    [IncomingMessages.SetDisposition]: onSetDisposition,
    [IncomingMessages.GetRecordingStatus]: onGetRecordingStatus,
    [IncomingMessages.SetRecordingStatus]: onSetRecordingStatus,
    [IncomingMessages.GetConfig]: onGetConfig,
}

function listenMessages(mev) {

    if (mev.origin === adapterDomain) {
        if (mev.data && typeof mev.data === 'string') {

            console.log('#RECEIVE: ', mev)

            try {
                const messageData = JSON.parse(mev.data),
                    eventType = messageData.type,
                    handler = messageListeners[eventType]

                if (handler) {

                    try {
                        const returnValue = handler(messageData.data)
                        window.parent.postMessage(JSON.stringify({
                            type: response(eventType),
                            data: {
                                status: 1,
                                data: returnValue,
                            },
                        }), adapterDomain)

                    } catch (e) {

                        window.parent.postMessage(JSON.stringify({
                            type: response(eventType),
                            data: {
                                status: 2,
                                error: {
                                    message: e.message || e,
                                },
                            },
                        }), adapterDomain)
                    }

                } else if (eventType === response(OutcomingMessages.RequestTransferData)) {
                    if (getTransferDataCallback) {
                        getTransferDataCallback(messageData.data)
                        getTransferDataCallback = null
                    }
                } else {
                    console.error('Getting unknown message from Integration Middleware (probably): ', mev)
                }

            } catch (e) {
                console.error('Error ', e.message)
            }
        } else {
            console.error('Getting wrong data type in the message from Integration Middleware (probably)')
        }
    }
}

window.addEventListener('message', listenMessages, false)

