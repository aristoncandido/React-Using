    import pic from './imgs/myphoto pro.png';
    import './style_components/main.css';


    function main(){
        
        return(
            <main>
                
                <div className="Apresentacao">

                    <p>
                        <h1>Olá, Sou Ariston</h1>
                        <h2>
                            É um grande prazer lhe conhecer.
                        </h2>

                        <p>
                            Sou Desenvolvedor Web, Web Designer e Desenvolvedor de Games
                        </p>
                    </p>

                
                        <button className="btn btn-primary" value={"Mostrar Portifolio"}> Mostrar Portifólio</button>
            


                </div>

                <div className="foto">

                    <div className="minha_foto"> 
            
                            <img  src={pic} alt="minha_foto" />

                    </div>

                </div>
    
    
        




            </main>
        )
    }




    export default main;
