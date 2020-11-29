import react, {useState} from 'react';


const Channel = Props => 
{
 const [channelState, setChannelState] = useState({

    avatar: "closed.jpg",
    name: "Login",
    description: "Por favor faça o login.",
    ChannelId: 0
 });

 const changeChannel = () => {
     if(channelState.ChannelId === 0){
         setChannelState({
           avatar: "hook.png",
           name: "",  
           description: "Seja bem vindo!",
           ChannelId: 1
         })
     }else if (channelState.ChannelId === 1){
         setChannelState({
            avatar: "closed.jpg",
            name: "Login",
           description: "Por favor faça o login.",
            ChannelId: 0
         });
     }
    }
        const styleCard = {
        width: '100%',
    };

    return(
        <div className="card">
            <img src={channelState.avatar} alt={'Avatar do canal ${channelState.name'} styleCard/>
            <div className="container">
            
                <h1>{channelState.description}</h1>
            </div>
            <button type="button" onClick={changeChannel}>Login</button>
        </div>
    );

}     

export default Channel;

