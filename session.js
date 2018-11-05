function generateTrustSessionId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(t)  {
        var e = 16*Math.random()|0
        return ("x" === t ? e:3&e|8).toString(16)
    })
}

module.exports = {generateTrustSessionId}
