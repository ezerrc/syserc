class cxMsg{
    static titulo=null
    static texto=null
    static cor=null
    static destino=null
    static divmsg=null
    static tipo = null
    static textoBotao = []
    static comando_sn=null

    static mostrar=(config,titulo,texto)=>{
        this.destino=document.body
        this.cor = config.cor
        this.titulo=titulo
        this.texto=texto
        this.tipo=config.tipo
        this.textoBotao=config.textoBotao
        this.comando_sn=()=>{config.comando_sn()}
        this.divmsg=document.createElement("div")

        const estilo_divmsg=
        "display: flex;"+
        "justify-content: center;"+
        "align-items:center;"+
        "position: absolute;"+
        "top: 0px;"+
        "left: 0px;"+
        "width: 100%;"+
        "height: 100vh;"+
        "border-radius: 5px 5px 5px 5px"+
        "background-color: rgb(0,0,0,0.7);"+//Transparencia ultimos numeros
        "z-index:99999999999999999"
        this.divmsg.setAttribute("id","divmsg")
        this.divmsg.setAttribute("style",estilo_divmsg)
        this.destino.prepend(this.divmsg)

        const estilo_areaCxmsg=
        "display: flex;"+
        "justify-content: flex-start;"+
        "align-items:flex-start;"+
        "flex-direction: column;"+
        "width: 300px;"
        this.areaCxmsg=document.createElement("div")
        this.areaCxmsg.setAttribute("style",estilo_areaCxmsg)
        this.divmsg.appendChild(this.areaCxmsg)

        const estilo_titulo=
        "display: flex;"+
        "justify-content: flex-start;"+
        "align-items: center;"+
        "width: 100%;"+
        "background-color: " + this.cor;
        "color: #fff;"+
        "padding: 10px;"+
        "border-radius: 5px 5px 5px 5px"
        this.tituloCxmsg=document.createElement("div")
        this.tituloCxmsg.setAttribute("style",estilo_titulo)
        this.tituloCxmsg.innerHTML= this.titulo
        this.areaCxmsg.appendChild(this.tituloCxmsg)

        const estilo_corpo=
        "display: flex;"+
        "justify-content: flex-start;"+
        "align-items: center;"+
        "width: 100%;"+
        "background-color: #eee;"+
        "color: #000;"+
        "padding: 30px 0px;"
        this.corpoCxmsg=document.createElement("div")
        this.corpoCxmsg.setAttribute("style",estilo_corpo)
        this.corpoCxmsg.innerHTML= this.texto
        this.areaCxmsg.appendChild(this.corpoCxmsg)

        const estilo_rodape=
        "display: flex;"+
        "justify-content: space-around;"+
        "align-items: center;"+
        "width: 100%;"+
        "background-color: #ccc;"+
        "color: #000;"+
        "padding: 0px;"+
        "border-radius: 0px 0px 5px 5px"
        this.rodapeCxmsg=document.createElement("div")
        this.rodapeCxmsg.setAttribute("style",estilo_rodape)
        this.areaCxmsg.appendChild(this.rodapeCxmsg)

        const estilo_btn=
        "padding: 10px 50px;"+
        "background-color:  " + this.cor;
        "color: #fff;"+
        "cursor: pointer;"+
        "text-transform: uppercase;"+
        "border-radius: 5px"

        if(this.tipo=="ok"){
            this.btn_ok=document.createElement("button")
            this.btn_ok.setAttribute("style",estilo_btn)
            this.btn_ok.innerHTML="OK"
            this.btn_ok.addEventListener("click",(evt)=>{
                this.ocultar()
            })
            this.rodapeCxmsg.appendChild(this.btn_ok)
        }else if (this.tipo=="sn"){
            this.btn_sim=document.createElement("button")
            this.btn_sim.setAttribute("style",estilo_btn)
            this.btn_sim.innerHTML=this.textoBotao[0]
            this.btn_sim.addEventListener("click",(evt)=>{
                this.comando_sn()  
                this.ocultar()
            })
            this.btn_nao=document.createElement("button")
            this.btn_nao.setAttribute("style",estilo_btn)
            this.btn_nao.innerHTML=this.textoBotao[1]
            this.btn_nao.addEventListener("click",(evt)=>{
                this.ocultar()
            })
            //Add os botões no rodapé
            this.rodapeCxmsg.appendChild(this.btn_sim)
            this.rodapeCxmsg.appendChild(this.btn_nao)
        }
    }
    static ocultar=()=>{
        this.divmsg.remove()
    }
}
