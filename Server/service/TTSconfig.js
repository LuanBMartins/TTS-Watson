require('dotenv').config()
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');


module.exports = async function (text) {
    const textToSpeech = new TextToSpeechV1({
        authenticator: new IamAuthenticator({
          apikey: process.env.APIKEY,
        }),
        serviceUrl: process.env.APIURL,
    });

    const synthesizeParams = {
        text: `${text}`,
        accept: 'audio/wav',
        voice: 'pt-BR_IsabelaVoice',
    };
      
    const response = await textToSpeech.synthesize(synthesizeParams)
    return buffer = await textToSpeech.repairWavHeaderStream(response.result)
}
