
function EventsComponent() {

    const handleMyEventOnClick = (event) => {
        console.log(event);
    }

    const handleMyEventOnClick2 = () => {
        console.log('ok');
    }

    //Função de renderização
    //Nesse exemplo quero renderizar a função na criação do componente
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderização do if</h1>
        } else {
            return <h2>Renderização do else</h2>
        }
    }

    return (
      <>
        <div>
            <button onClick={handleMyEventOnClick}>Clique aqui</button>
        </div>
        <div>
            <button onClick={handleMyEventOnClick2}>Clique aqui!</button>
        </div>
        <div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
      </>
    )
  }
  
  export default EventsComponent