const TemplateExpressions = () =>{

    const nome = "Lucas";
    const dados = {
        idade:26,
        emprego:"Professor",
    };

    return(
        <div>
            <p>{4+4}</p>
            <h1>Olá {nome}, tudo bem?</h1>
            <p>{dados.emprego}</p>
            <p>{dados.idade}</p>
            <p>{console.log("Esse comentario aparece no console!")}</p>
            {/*Esse é um comentario */}
        </div>
    );
}

export default TemplateExpressions;