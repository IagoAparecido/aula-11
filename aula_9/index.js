$("#login").click(
    function(){

        $.ajax({
            type: 'GET',
            url: 'http://jsonplaceholder.typicode.com/posts',
            success:function(data){
                $.each(data, function(i, item){
                    document.getElementById('resultado').innerHTML =

                    document.getElementById('resultado').innerHTML + '<br>' + i + ' - ' + '<h3>'+ item.title; '</h3>';


                })
               console.log(data[0])

            },
            error:function(data){

            }

        })
    })



    
//     login = 
//     {
//         'usuario'   :    document.getElementById('email').value,
//         'senha' :   document.getElementById('senha').value,
//         'tipo_login' : 'site'
//     };

//     if(login.senha == '1234'){
//         document.getElementById('resultado').innerHTML= '<b>Bem Vindo!</b>'

//       }   else { 
//         document.getElementById('resultado').innerHTML= '<b>Errado!</b>'
//       }

    
//     console.log(login);

//     console.log(login.usuario);
//     console.log(login.senha);
//     console.log(login.tipo_login);
//     }

//    )