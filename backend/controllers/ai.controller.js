const {main} = require('../src/ai.prompt')

module.exports.getresponse = async (req,res)=>{
        const prompt = req.body.code
        if(!prompt){
            return res.status.send("must have a prompt")
        }

        const response = await main(prompt)
        res.send(response.text)
}