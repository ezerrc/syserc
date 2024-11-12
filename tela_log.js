class Login{
    static logado=false;
    static matlogado=null;
    static nomelogado=null;
    static acessologado=null;
    static estilocss=null;
    static callback_ok=null;
    static callback_nok=null;
    static config={
        cor: null,
        img: null,
        endpoint: null,
    };
    

    //Recebe matricula e password e a configuração da pagina, 
    //a qual se não vier fica null e usa a programação já feita aqui.
    static login=(callback_ok,callback_nok,config)=>{
        this.config=config;
        this.callback_ok=()=>{callback_ok()};
        this.callback_nok=()=>{callback_nok()};

        this.estilocss=
        ".fundologin{display: flex;justify-content: center;align-items: center;width: 100%; height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.7);box-sizing: border-box;}"+
        ".baselogin{display: flex;justify-content: center;align-items: stretch;width: 50%; box-sizing: inherit;}"+
        ".elementoslogin{display: flex;justify-content: center;align-items: flex-start;width: 50%; background-color: #eee;flex-direction: column;padding: 10px;border-radius: 10px 0px 0px 10px;box-sizing: inherit;}"+
        ".logologin{display: flex;justify-content: flex-start;align-items: center;width: 50%; background-color: #bbb;padding: 10px;border-radius: 0px 10px 10px 0px;box-sizing: inherit;}"+
        ".logologin img{ width: 100%;}"+
        ".campologin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit;margin-bottom: 10px;}"+
        ".campologin label{font-size: 18px;}"+
        ".campologin input{font-size: 18px;width: 200px;background: #fff;padding: 5px;border-radius: 5px;}"+
        ".botoeslogin{display: flex;justify-content: space-around;align-items: center;width: 100%;box-sizing: inherit;}"+
        `.botoeslogin button{cursor: pointer;background-color: ${this.config.cor};color: #fff;border-radius: 5px;padding: 10px;width: 80px;box-sizing: inherit;}`

        const styleestilo=document.createElement("style");
        styleestilo.setAttribute("id","id_estilologin");
        styleestilo.setAttribute("rel","stylesheet");
        styleestilo.setAttribute("type","text/css");
        styleestilo.innerHTML=this.estilocss;
        document.head.appendChild(styleestilo);

        const fundologin=document.createElement("div");
        fundologin.setAttribute("id","fundologin");
        fundologin.setAttribute("class","fundologin");
        document.body.prepend(fundologin);
        
        const baselogin=document.createElement("div");
        baselogin.setAttribute("id","baselogin");
        baselogin.setAttribute("class","baselogin");
        fundologin.prepend(baselogin);

        const elementoslogin=document.createElement("div");
        elementoslogin.setAttribute("id","elementoslogin");
        elementoslogin.setAttribute("class","elementoslogin");
        baselogin.prepend(elementoslogin);

        const campologin=document.createElement("div");
        campologin.setAttribute("class","campologin");
        elementoslogin.prepend(campologin);

        const labelUserName=document.createElement("label");
        labelUserName.innerHTML="UserName";
        campologin.prepend(labelUserName);

        const inputUserName=document.createElement("input");
        inputUserName.type="text";
        inputUserName.name="f_username"
        inputUserName.id="f_username"
        inputUserName.title="Username"
        campologin.appendChild(inputUserName);

        const campologin2=document.createElement("div");
        campologin2.setAttribute("class","campologin");
        elementoslogin.appendChild(campologin2);

        const labelSenha=document.createElement("label");
        labelSenha.innerHTML="Senha";
        campologin2.appendChild(labelSenha);

        const inputiPassword=document.createElement("input");
        inputiPassword.type="password";
        inputiPassword.name="f_senha"
        inputiPassword.id="f_senha";
        inputiPassword.title="Senha";
        campologin2.appendChild(inputiPassword);

        const botoeslogin=document.createElement("div");
        botoeslogin.setAttribute("class","botoeslogin");
        elementoslogin.appendChild(botoeslogin);
        
        const btn_login=document.createElement("button");
        btn_login.setAttribute("id","btn_login");
        btn_login.innerHTML="Login";
        botoeslogin.prepend(btn_login);
        btn_login.addEventListener("click",(evt)=>{
            this.verificaLog();
        });

        const btn_cancelar=document.createElement("button");
        btn_cancelar.setAttribute("id","btn_cancelar");
        btn_cancelar.innerHTML="Cancelar";
        botoeslogin.appendChild(btn_cancelar)
        btn_cancelar.addEventListener("click",(evt)=>{
            this.fechar();
        });

        const logologin=document.createElement("div");
        logologin.setAttribute("class","logologin");
        logologin.title="SysErc";
        baselogin.appendChild(logologin);

        const imagemlogo=document.createElement("img");
        imagemlogo.setAttribute("src","logo.jpg");
        imagemlogo.setAttribute("title","logo");
        logologin.prepend(imagemlogo);
    }

    static verificaLog=()=>{
        const mat =document.getElementById("f_username").value;
        const pas =document.getElementById("f_senha").value;
        const endpoint = `${this.config.endpoint}/?matricula=${mat}&senha=${pas}`;
        fetch(endpoint)
            .then(res=>res.json())
            .then(res=>{
                if(res!=null){
                    sessionStorage.setItem("logado","true");
                    sessionStorage.setItem("matlogado",mat);
                    sessionStorage.setItem("nomelogado",res.nome);
                    sessionStorage.setItem("acessologado",res.acesso);
                    this.callback_ok();
                    this.fechar();
                    return true;
                }else{
                    sessionStorage.setItem("logado","false");
                    sessionStorage.setItem("matlogado","");
                    sessionStorage.setItem("nomelogado","");
                    sessionStorage.setItem("acessologado","");
                    this.callback_nok();
                    return false;    
                }     
        })
    }

    static fechar=()=>{
        const id_estilologin=document.getElementById("id_estilologin")
        id_estilologin.remove()
        const fundologin=document.getElementById("fundologin")
        fundologin.remove()
    }
 
}