const InputPrompt = require('../models/input-prompt')
const openai = require('../config/openai')

module.exports = {
 async sendText(req, res){
  const oepnaiAPI = openai.configuration()
  const inputModel = new inputPrompt(req.body)

  try {
   const response = await openaiAPI.createCompletion(
    openai.textCompletion({prompt: req.body.prompt})
   )
   return res.status(200).json({
    sucess:true,
    data: response.data.choices[0].text
   })
  } catch (error) {
   return res.status(400).json({
    sucess:false,
    error: error.response ? error.response.data : 'Something went wrong'
   })
  }
 }
}