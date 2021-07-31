require('dotenv/config')
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');


module.exports = async function (text) {
    const textToSpeech = new TextToSpeechV1({
        authenticator: new IamAuthenticator({
          apikey: "fW5pbnj2lMXHhXtL_AgG08dF8Rw50b07K8yTkw-wZ7NN",
        }),
        serviceUrl: "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/aa3722fc-e1ca-47cc-be86-a4b6f78f1412"
    });

    const synthesizeParams = {
        text: `${text}`,
        accept: 'audio/wav',
        voice: 'pt-BR_IsabelaVoice',
    };
      
    const response = await textToSpeech.synthesize(synthesizeParams)
    return buffer = await textToSpeech.repairWavHeaderStream(response.result)
}
