const talk= document.querySelector('.talk');
const voice2text=document.querySelector('.voice2text');

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder=new SpeechRecognition();

recorder.onstart=()=>{
  console.log('voice is activated,you can talk');
};


function botVoice(message){
    const speech=new SpeechSynthesisUtterance();
    speech.text="this is my default response";
    if(message.includes('how are you')){
        speech.text='i am fine,thanks.how are you?';
    }if(message.includes('thank you')){
        speech.text='welcome'; 
    } if(message.includes('cheating')){
        speech.text='whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person,or to make, alter or destroy the whole or any part of a valuable security,or anything which is signed or sealed, and which is capable of being converted into a valuable security, shall be punished with imprisonment of either description for a term which may extend to seven years and shall also be liable to fine.';
    }   
    if(message.includes('hey macha')){
        speech.text='padi da mapla';
    }
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech)
}


recorder.onresult=(event)=>{
    console.log(event);
    const current=event.resultIndex;
    const transcript =event.results[current][0].transcript;
    voice2text.textContent=transcript;
    botVoice(transcript);
};

talk.addEventListener('click',()=>{
    recorder.start();
});



