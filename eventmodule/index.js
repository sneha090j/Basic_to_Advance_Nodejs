const eventEmitter=require('events');
const event=new eventEmitter();
// event.on("say my name",()=>{
//     console.log("sneha ");
// })
// event.emit("say my name");

// The concept of event: Emitter objects emit named events that cause previously registeres listeners to be called. So,an emitter object basically has two main features:
// 1.Emitting name events.
// 2.Registering and unregistering listener functions.
event.on("checkpage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);

});
event.emit("checkpage",200,"ok");

