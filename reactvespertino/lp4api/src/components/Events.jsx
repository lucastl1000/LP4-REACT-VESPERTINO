const Events = () => {

    const handleMyEvent = () =>{
        console.log("Eu sou um Evento!")
    };

    return(
        <div>
            <button onClick={handleMyEvent}>Clique Aqui!</button>
        </div>
    );
}

export default Events;