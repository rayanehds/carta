

var text;
function soma(){

  var pacote = document.getElementsByName('q1');
  var i;
  for (var i = 0; i < pacote.length; i++){
    if ( pacote[i].checked ) {
        if(pacote[i].value == "1"){
            var i = " Olá Teatro <br> Como você está?";
        }else if (pacote[i].value == "2") {
            var i = " Ao Teatro do Futuro <br> Olá! Espero que ainda exista! <br> E que dentro desta existência esteja bem.";
        }else if (pacote[i].value == "3") {
            var i = " Prezade Teatro de Future, <br> Sim, eu estou tentando escrever como nossa discussão de gênero sugere atualmente buscando incluir todes (todos, todas e todes). Ainda não é algo adotado pela grande maioria, nem mesmo pela língua formal. Bem como você não era parte da vida desta grande maioria, num tempo recente (dois séculos). É isso mesmo, se você fizer correlação entre grandes maiorias deste tempo presente em que lhe escrevo, verá que as pessoas que compõe as minorias são aquelas que buscam inclusões, que estão nas artes, bem como no teatro.";

        }else if (pacote[i].value == "4") {
            var i = " Caríssimos protagonistas,";

        }
        else if (pacote[i].value == "5") {
            var i = ' Ao teatro do futuro ou a quem possa interessar';    
        }else if (pacote[i].value == "6") {
            var i = " Olá teatro <br> Como você está? Provavelmente deve estar que nem eu, inseguro e esperando os acontecimentos.";

        }
        
    }
    text = i;
}
//alert(text);
}

function rf(){

    var pacote = document.getElementsByName('q2');
    var i;
    for (var i = 0; i < pacote.length; i++){
        if ( pacote[i].checked ) {
            if(pacote[i].value == "1"){
                var i = "<br> Eu estou tentando escrever como nossa discussão de gênero sugere atualmente buscando incluir todes (todos, todas e todes). Ainda não é algo adotado pela grande maioria, nem mesmo pela língua formal. \nBem como você não era parte da vida desta grande maioria, num tempo recente (dois séculos). É isso mesmo, se você fizer correlação entre grandes maiorias deste tempo presente em que lhe escrevo, verá que as pessoas que compõe as minorias são aquelas que buscam inclusões, que estão nas artes, bem como no teatro. ";
            }else if (pacote[i].value == "2") {
                var i = "<br> Estou chegando de paraquedas nessa área e já me encontro em uma difícil resolução como espectadora, escrever sobre o Teatro do Futuro.";
            }else if (pacote[i].value == "3") {
                var i = "<br> Hoje, na presente data que lhe escrevo, passamos de 400 mil vidas perdidas nesse Brasil, não de meu deus deusa deuse! Dionisisticamente, por favor, salvo-me a cada dia. Vamos ver até quando resisto e não parto para o Orum. E antes, fico pensando em quantas montagens ainda teremos para lembrar deste holocausto bolsonarista e buscar compreender os meus contemporâneos.";
            }else if (pacote[i].value == "4") {
                var i = "<br> Escrevo para você no dia 27 de abril e 2021, informo-lhe que estamos em meio a uma pandemia, onde uma variação cruel e ainda desconhecida do Vírus  Corona, ceifa milhares de vidas em todo o mundo. \nEssa triste situação afetou drasticamente a relação social, devemos nos distanciar uns dos outros para nossa própria segurança.   Tivemos que nos readequar, construir novas relações, e praticas para nos manter vivos. Não foi fácil…mas ainda hoje me deu uma saudade de aglomerar…hummm… de sentir  a energia  envolvente do ritual, o calor dos aplausos, o nivelamento de cada um na celebração, onde dentro do envolvimento poder juntos sonhar, pensar em novas ideias e querer mudar o mundo. ";
            }
            else if (pacote[i].value == "5") {
                var i = "<br> O que dizer para aqueles que viverão após os mortos deste tempo? Sejam livres ou sejam vivos, sejam o que puderem ser, mas sejam. \n Como aquele poeta capital que tinha crises existenciais, de tempos em tempos, era no fundo um alarmante da morte.";

            }    
        }
        text = text + i;
    }
//alert(text);
}

function palavra(){

  var palavra = document.getElementsByName('q3');
  var i;
  for (var i = 0; i < palavra.length; i++){

    if ( palavra[i].checked ) {
        if(palavra[i].value == "1"){
            var i = "<br> Essa triste situação afetou drasticamente a relação social, devemos nos distanciar uns dos outros para nossa própria segurança.   Tivemos que nos readequar, construir novas relações, e praticas para nos manter vivos. Não foi fácil…mas ainda hoje me deu uma saudade de aglomerar…hummm… de sentir  a energia  envolvente do ritual, o calor dos aplausos, o nivelamento de cada um na celebração, onde dentro do envolvimento poder juntos sonhar, pensar em novas ideias e querer mudar o mundo.  ";
        }else if (palavra[i].value == "2") {
            var i = "<br> Quando as criaturas acreditam nas mentiras que inventam para sobreviverem, chega o momento de repensar a vida. <br> Quando não se acredita e nem suporta mais as verdades dos corações, chega o momento de renunciar a própria vida. De qual renúncia da verdade o futuro viverá?";
        } else if (palavra[i].value == "4") {
            var i = "<br> Chego, sento, assisto"; 
        }else if (palavra[i].value == "5") {
            var i = "<br> Você sabe que é sagrado para várias pessoas, incluindo atores, espectadores, palcos, espaços, tudo que gira em seu redor. És a casa de vários e a esperança de um mundo melhor, pois sempre digo e creio que a arte salva. "; 
        }
    }
    text = text + i;
}

    //alert(text);
}

function p(){

  var palavra = document.getElementsByName('q4');
  var i;
  for (var i = 0; i < palavra.length; i++){

    if ( palavra[i].checked ) {
        if(palavra[i].value == "1"){
            var i = "<br> Sinto muito a sua falta pois com você posso falar das minha inquietudes, alegrias, amores, das minhas dores, das minhas reflexões e sem pudor, sem medo de ser julgada.Eu me abro quase sempre...algumas coisas ficam ainda aqui agarradas mas sei que uma hora vão sair, é só ter aquela oportunidade que tudo flui.  <br> Já tive crises quanto a você e hoje te acho essencial. Nesta carta quero te pedir que não me abandones nunca, de jeito nenhum por favor. Não sei como será, mas estamos em transformação, mudança e claro, adaptação. \nHoje vejo outras possibilidades em te encontrar. Te reconheço no meu quarto, na minha sala, no escritório adaptado, você conseguiu entrar no meu território. Hoje posso te chamar de minha casa e estamos mais próximos apesar de...";
        }else if (palavra[i].value == "2") {
            var i = "<br> Acredito que você neste futuro… aliás nem imagino como você deve ter evoluído, se transformado…para onde foi, como existe e acontece?Você inevitavelmente deve ter mudado muito. Deve ter, obrigatoriamente, através da criatividade humana amadurecido, mas penso que de algum modo ainda se mantem caloroso e provocador, que os encontros não se perderam, pois por mais que as coisas mudem, você jamais esquecerá sua origem e seu verdadeiro objetivo: estimular emoções no publico através de sentimentos de alegria, tristeza, raiva, curiosidade, entre tantos outros. ";  
        }else if (palavra[i].value == "3") {
            var i = "<br> Para que interrogar o futuro se este vai interpelar a esperança? De que mundo somos feitos? Oras depois da esperança é melhor não esperar mais nada! É meio que o planeta está em expansão, se o limite é o sol não haverá espaço para caber um planeta expandido e morto!";
        }else if (palavra[i].value == "4") {
            var i = "<br> O que posso lhe dizer, é que sinto muita falta de você! Sim, não estou isenta de certo saudosismo. Confesso que esteve presente no meu passado, em vários momentos felizes. Basta contar que saia de casa para ir ao teatro só, sozinha. Mas em qualquer apresentação, encontrava conhecides, amigues, pessoas queridas. E caso não, você estava lá. Sempre lá para me dar a mão e convidar a seguir juntes.  ";
        }else if (palavra[i].value == "5") {
            var i = "<br> Mas o que sinto mais falta é da interação com o público, de ser uma espectadora que sempre estava na primeira fileira de boca aberta e admirada com tudo que via e escutava. \n Hoje infelizmente não temos noção de como são as reações , as respirações, as indignações, vibrações, tristezas e alegrias. Onde isso tudo vai parar? Mas me parece que é uma nova era, a virtual, onde temos o distanciamento como proteção mas também a proximidade com quem quer que seja. Estamos expostos, o mundo virou um reality show, onde o que quer mostrar que se mostre, mas o que quer privacidade está em seu cantinho do jeito que sempre quis, sem interação, só quando necessário. Podemos estar juntos sem um ver o outro, câmeras desligadas, áudios e internet 3G, que cai quando quer e quando queremos. "; 
        }
    }
    text = text + i;
}

// alert(text);
}

function a(){

  var palavra = document.getElementsByName('q5');
  var i;
  for (var i = 0; i < palavra.length; i++){

    if ( palavra[i].checked ) {
        if(palavra[i].value == "1"){
            var i = "<br> A cerimonia teatral, antes desta readequação, se fazia de modo presente, inteiro, o corpo deveria ser reconstruído a partir daquele encontro, do contato, e a partir dai poderia ser reinventado, e de algum modo  abria-se uma porta para uma outra relação com o tempo, sem se preocupar com a sua fruição. <br> Mas hoje esta bem diferente, o “lugar para contemplar” o Theatron não necessariamente é estático e em local único, pode estar em milhares de lugares ao mesmo tempo, e a catarse se multiplica através de recursos técnicos digitais que amplificam as expressões artísticas. ";
        }else if (palavra[i].value == "2") {
            var i = "<br> Esteja atento, haverá vida após a morte apenas para o planeta. Vai adaptar, com certeza. Enquanto isso, caríssimo futuro, viva e morra viva e morra Zeus é o limite. <br> A sua missão é matar os males deste mundo, extirpar a escravidão da ganância, romper desafetos do mundo, os de fora e os de dentro. Arrancar do peito o último fôlego da morte. Viverá o futuro, de quando as criaturas acreditarem nas mais puras verdades da alma, com certeza, vai adaptar.";
        }else if (palavra[i].value == "3") {
            var i = "<br> Eu ainda estou viva nesse futuro? Faço parte das mudanças que aconteceram ou simplesmente aceitei o que me ofereceram? Eu ainda me importo com a arte e com o que ela representa? \n Como você acontece agora? Ainda existem teatros onde as pessoas ocupam cadeiras e se sentam próximas aos atores ou todos os espetáculos acontecem de forma virtual agora? As peças são interpretadas por pessoas reais ou já fomos substituídos por hologramas e robôs sem entrega e paixão pelo que fazem? \n As pessoas ainda assistem teatro? As peças continuam se atualizando ou vocês se apegaram ao Teatro do passado? Shakespeare ainda é atemporal? Existem novos nomes na dramaturgia mundial? Ainda existem estilos teatrais como o infantil, o político, o de gênero e a comédia ou tudo virou uma grande massa embolada?";
        }else if (palavra[i].value == "4") {
            var i = "<br> Só sei que o meu coração pulsa por ti pessoalmente, pelo contato físico, pelo suor e respiração do meu parceiro ou parceira, ou trupe, ou 70 pessoas aglomeradas tentando uma vaga. \nSim, o ser...quero o ser. E você pra mim é isso, um ser que me acolheu sem preconceito nenhum. Você esta aqui dentro. Você me provoca e eu vou na sua. O frio na barriga, o transpirar, o atuar, estar no palco da vida, isso é essencial. ";
        }}
        text = text + i;
    }

  //  alert(text);
}

function j(){

  var palavra = document.getElementsByName('q6');
  var i;
  for (var i = 0; i < palavra.length; i++){

    if ( palavra[i].checked ) {
        if(palavra[i].value == "1"){
            var i = "<br> Que seja eterna a magica do encontro…";
        }else if (palavra[i].value == "2") {
            var i = "<br> 15 horas, lembrou-me o alarme. Agora preciso despachar esta missiva. Aguardo ansiosa pelo seu retorno. Espero podermos continuar nos trocando. Abraço grande, bjim e inté. ";
        }else if (palavra[i].value == "3") {
            var i = "<br>  Te peço  novamente que nunca nos deixe. O futuro é incerto, a morte é certa, mas enquanto estivermos vivos, que sempre viva em mim, em nós. Te amo teatro, pessoas do teatro, meus e seus personagens. A vida é essa, uma peça em movimento. O que quer que aconteça, quero que nos leve com você. Somos camaleões. \nObrigada por tudo que fez, faz e que fará por nós. <br> Atenciosamente; ";
        }else if (palavra[i].value == "4") {
            var i = "<br> Espero que no futuro possa saber, como espectadora, analisar também os esforços de construção."; }}
        text = text + i;
    }

}

function preparar() {
  // var prep = document.getElementById("preparo").value;
  // var paragrafo  = document.getElementById("paragrafo").innerHTML;
  // paragrafo = paragrafo +"<p>"+prep+"</p>";
  
  document.getElementById("paragrafo").innerHTML = text;
}