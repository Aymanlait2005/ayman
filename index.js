const ilias=require('cors')
const badr=require('express')
const serv=badr()
serv.use(ilias({}))
serv.use(badr.static(__dirname+`/RAYAN-main`))
serv.get('/',(serv1,serv2)=>{
    serv2.sendFile(__dirname+`/RAYAN-main`+`/index.html`)
})
serv.listen(3000,()=>{
    console.log('conected')
})