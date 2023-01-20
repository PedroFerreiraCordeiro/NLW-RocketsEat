import fastify from "fastify";

const app = fastify()

app.get('/', ()=>{
    return 'hellow world'
})

app.listen({
    port: 3333,
}).then(()=>{
    console.log('HTTP Server Running!')
})