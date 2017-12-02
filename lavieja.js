var contador=5; //Esta variable sirva para saber cuando hay en empate en modo de 1 jugador
var contador2=9; //Esta variable sirva para saber cuando hay en empate en modo de 2 jugadores
var turno=true; //Esta variable te dice que jugador tiene el turno en modo de 2 jugadores

//Esta función sirve para saber si estás en modo de un jugador o dos jugadores
function players(p1,p2){
  const a = document.getElementById(p1);
  const b = document.getElementById(p2);
  a.classList.add('active');
  b.classList.remove('active');
};

//Esta función va a hacer que el juego se ponga en modo de 1 jugador
function unPlayer(){
  const sub1 = document.getElementById('subdomain1');
  const sub2 = document.getElementById('subdomain2');
  const sub3 = document.getElementById('subdomain3');
  const sub4 = document.getElementById('subdomain4');
  const sub5 = document.getElementById('subdomain5');
  const sub6 = document.getElementById('subdomain6');
  const sub7 = document.getElementById('subdomain7');
  const sub8 = document.getElementById('subdomain8');
  const sub9 = document.getElementById('subdomain9');
  sub1.removeAttribute('onclick', 'jugandoDos(1)');
  sub2.removeAttribute('onclick', 'jugandoDos(2)');
  sub3.removeAttribute('onclick', 'jugandoDos(3)');
  sub4.removeAttribute('onclick', 'jugandoDos(4)');
  sub5.removeAttribute('onclick', 'jugandoDos(5)');
  sub6.removeAttribute('onclick', 'jugandoDos(6)');
  sub7.removeAttribute('onclick', 'jugandoDos(7)');
  sub8.removeAttribute('onclick', 'jugandoDos(8)');
  sub9.removeAttribute('onclick', 'jugandoDos(9)');
  sub1.setAttribute('onclick', 'jugada(1)');
  sub2.setAttribute('onclick', 'jugada(2)');
  sub3.setAttribute('onclick', 'jugada(3)');
  sub4.setAttribute('onclick', 'jugada(4)');
  sub5.setAttribute('onclick', 'jugada(5)');
  sub6.setAttribute('onclick', 'jugada(6)');
  sub7.setAttribute('onclick', 'jugada(7)');
  sub8.setAttribute('onclick', 'jugada(8)');
  sub9.setAttribute('onclick', 'jugada(9)');
};

//Esta función va a hacer que el juego se ponga en modo de 2 jugadores
function dosPlayers(){
  const sub1 = document.getElementById('subdomain1');
  const sub2 = document.getElementById('subdomain2');
  const sub3 = document.getElementById('subdomain3');
  const sub4 = document.getElementById('subdomain4');
  const sub5 = document.getElementById('subdomain5');
  const sub6 = document.getElementById('subdomain6');
  const sub7 = document.getElementById('subdomain7');
  const sub8 = document.getElementById('subdomain8');
  const sub9 = document.getElementById('subdomain9');
  sub1.removeAttribute('onclick', 'jugada(1)');
  sub2.removeAttribute('onclick', 'jugada(2)');
  sub3.removeAttribute('onclick', 'jugada(3)');
  sub4.removeAttribute('onclick', 'jugada(4)');
  sub5.removeAttribute('onclick', 'jugada(5)');
  sub6.removeAttribute('onclick', 'jugada(6)');
  sub7.removeAttribute('onclick', 'jugada(7)');
  sub8.removeAttribute('onclick', 'jugada(8)');
  sub9.removeAttribute('onclick', 'jugada(9)');
  sub1.setAttribute('onclick', 'jugandoDos(1)');
  sub2.setAttribute('onclick', 'jugandoDos(2)');
  sub3.setAttribute('onclick', 'jugandoDos(3)');
  sub4.setAttribute('onclick', 'jugandoDos(4)');
  sub5.setAttribute('onclick', 'jugandoDos(5)');
  sub6.setAttribute('onclick', 'jugandoDos(6)');
  sub7.setAttribute('onclick', 'jugandoDos(7)');
  sub8.setAttribute('onclick', 'jugandoDos(8)');
  sub9.setAttribute('onclick', 'jugandoDos(9)');
 };

//Esta función se encarga de borrar el tablero cuando sea necesario
function borraTablero(){
  contador=5;
  contador2=9;
  turno=true;
  const c1=document.getElementById('1').innerHTML='';
  const c2=document.getElementById('2').innerHTML='';
  const c3=document.getElementById('3').innerHTML='';
  const c4=document.getElementById('4').innerHTML='';
  const c5=document.getElementById('5').innerHTML='';
  const c6=document.getElementById('6').innerHTML='';
  const c7=document.getElementById('7').innerHTML='';
  const c8=document.getElementById('8').innerHTML='';
  const c9=document.getElementById('9').innerHTML='';
};

//Esta función es solo para modo de 1 jugador, y sirve para que el jugador haga su jugada y luego llama la jugada de la pc
function jugada(player){
   const jugador=document.getElementById(player);
   if(jugador.innerHTML!='O' && jugador.innerHTML!='X'){
       contador--;
       jugador.innerHTML = 'X';
       setTimeout('jugadaPc()',20);
       setTimeout('reinicioUnPlayer()',200);
    };
   };

//Esta función es llamada por la función jugada(player) y realiza la jugada de la pc
function jugadaPc(){
      let cuadroPc=Math.round((Math.random()*(9-1))+1);
      let movPc=cuadroPc.toString();
      const maquina=document.getElementById(movPc);
      if(maquina.innerHTML!='O' && maquina.innerHTML!='X'){
        maquina.innerHTML = 'O';
        setTimeout('reinicioUnPlayer()',100);
      }else{
        jugadaPc();
        setTimeout('reinicioUnPlayer()',100);
      };
  };

//Esta función se ejecuta después de terminar cada turno y hace que la pc sepa si ganó el jugador o la pc, es una función que solo se utiliza en modo de 1 jugador
function reinicioUnPlayer(){
  const c1=document.getElementById('1');
  const c2=document.getElementById('2');
  const c3=document.getElementById('3');
  const c4=document.getElementById('4');
  const c5=document.getElementById('5');
  const c6=document.getElementById('6');
  const c7=document.getElementById('7');
  const c8=document.getElementById('8');
  const c9=document.getElementById('9');
  if(c1.innerHTML=='X' && c2.innerHTML=='X' && c3.innerHTML=='X'){
    swal({
      title: '¡Haz ganado!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(c4.innerHTML=='X' && c5.innerHTML=='X' && c6.innerHTML=='X'){
    swal({
      title: '¡Haz ganado!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(c7.innerHTML=='X' && c8.innerHTML=='X' && c9.innerHTML=='X'){
    swal({
      title: '¡Haz ganado!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(c1.innerHTML=='X' && c4.innerHTML=='X' && c7.innerHTML=='X'){
    swal({
      title: '¡Haz ganado!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(c2.innerHTML=='X' && c5.innerHTML=='X' && c8.innerHTML=='X'){
    swal({
      title: '¡Haz ganado!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(c3.innerHTML=='X' && c6.innerHTML=='X' && c9.innerHTML=='X'){
    swal({
      title: '¡Haz ganado!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(c1.innerHTML=='X' && c5.innerHTML=='X' && c9.innerHTML=='X'){
    swal({
      title: '¡Haz ganado!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(c7.innerHTML=='X' && c5.innerHTML=='X' && c3.innerHTML=='X'){
    swal({
      title: '¡Haz ganado!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(c1.innerHTML=='O' && c2.innerHTML=='O' && c3.innerHTML=='O'){
    swal({
      title: '¡Haz perdido!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(c4.innerHTML=='O' && c5.innerHTML=='O' && c6.innerHTML=='O'){
    swal({
      title: '¡Haz perdido!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(c7.innerHTML=='O' && c8.innerHTML=='O' && c9.innerHTML=='O'){
    swal({
      title: '¡Haz perdido!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(c1.innerHTML=='O' && c4.innerHTML=='O' && c7.innerHTML=='O'){
    swal({
      title: '¡Haz perdido!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(c2.innerHTML=='O' && c5.innerHTML=='O' && c8.innerHTML=='O'){
    swal({
      title: '¡Haz perdido!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(c3.innerHTML=='O' && c6.innerHTML=='O' && c9.innerHTML=='O'){
    swal({
      title: '¡Haz perdido!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(c1.innerHTML=='O' && c5.innerHTML=='O' && c9.innerHTML=='O'){
    swal({
      title: '¡Haz perdido!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(c7.innerHTML=='O' && c5.innerHTML=='O' && c3.innerHTML=='O'){
    swal({
      title: '¡Haz perdido!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(contador==0){
    swal({
      title: '¡Empate!',
      icon: 'success',
      text: '¿Deseas volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértete!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelve Pronto!'
        });
      }
    });
    borraTablero();
  }
};

//Esta función se ejecuta después de terminar cada turno y hace que la pc sepa si ganó el jugador 1 o el jugador 2, es una función que solo se utiliza en modo de 2 jugadores
function reinicioDosPlayers(){
  const c1=document.getElementById('1');
  const c2=document.getElementById('2');
  const c3=document.getElementById('3');
  const c4=document.getElementById('4');
  const c5=document.getElementById('5');
  const c6=document.getElementById('6');
  const c7=document.getElementById('7');
  const c8=document.getElementById('8');
  const c9=document.getElementById('9');
  if(c1.innerHTML=='X' && c2.innerHTML=='X' && c3.innerHTML=='X'){
    swal({
      title: '¡Ha ganado X!',
      icon: 'success',
      text: '¿Desean volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértanse!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelvan Pronto!'
        });
      }
    });
    borraTablero();
  }
  else if(c4.innerHTML=='X' && c5.innerHTML=='X' && c6.innerHTML=='X'){
    swal({
      title: '¡Ha ganado X!',
      icon: 'success',
      text: '¿Desean volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértanse!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelvan Pronto!'
        });
      }
    });
    borraTablero();
    }
  else if(c7.innerHTML=='X' && c8.innerHTML=='X' && c9.innerHTML=='X'){
    swal({
      title: '¡Ha ganado X!',
      icon: 'success',
      text: '¿Desean volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértanse!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelvan Pronto!'
        });
      }
    });
    borraTablero();
    }
  else if(c1.innerHTML=='X' && c4.innerHTML=='X' && c7.innerHTML=='X'){
    swal({
      title: '¡Ha ganado X!',
      icon: 'success',
      text: '¿Desean volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértanse!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelvan Pronto!'
        });
      }
    });
    borraTablero();
    }
  else if(c2.innerHTML=='X' && c5.innerHTML=='X' && c8.innerHTML=='X'){
    swal({
      title: '¡Ha ganado X!',
      icon: 'success',
      text: '¿Desean volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértanse!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelvan Pronto!'
        });
      }
    });
    borraTablero();
    }
  else if(c3.innerHTML=='X' && c6.innerHTML=='X' && c9.innerHTML=='X'){
    swal({
      title: '¡Ha ganado X!',
      icon: 'success',
      text: '¿Desean volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértanse!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelvan Pronto!'
        });
      }
    });
    borraTablero();
    }
  else if(c1.innerHTML=='X' && c5.innerHTML=='X' && c9.innerHTML=='X'){
    swal({
      title: '¡Ha ganado X!',
      icon: 'success',
      text: '¿Desean volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértanse!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelvan Pronto!'
        });
      }
    });
    borraTablero();
    }
  else if(c7.innerHTML=='X' && c5.innerHTML=='X' && c3.innerHTML=='X'){
    swal({
      title: '¡Ha ganado X!',
      icon: 'success',
      text: '¿Desean volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértanse!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelvan Pronto!'
        });
      }
    });
    borraTablero();
    }
  else if(c1.innerHTML=='O' && c2.innerHTML=='O' && c3.innerHTML=='O'){
    swal({
      title: '¡Ha ganado O!',
      icon: 'success',
      text: '¿Desean volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértanse!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelvan Pronto!'
        });
      }
    });
    borraTablero();
    }
  else if(c4.innerHTML=='O' && c5.innerHTML=='O' && c6.innerHTML=='O'){
    swal({
      title: '¡Ha ganado O!',
      icon: 'success',
      text: '¿Desean volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértanse!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelvan Pronto!'
        });
      }
    });
    borraTablero();
    }
  else if(c7.innerHTML=='O' && c8.innerHTML=='O' && c9.innerHTML=='O'){
    swal({
      title: '¡Ha ganado O!',
      icon: 'success',
      text: '¿Desean volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértanse!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelvan Pronto!'
        });
      }
    });
    borraTablero();
    }
  else if(c1.innerHTML=='O' && c4.innerHTML=='O' && c7.innerHTML=='O'){
    swal({
      title: '¡Ha ganado O!',
      icon: 'success',
      text: '¿Desean volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértanse!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelvan Pronto!'
        });
      }
    });
    borraTablero();
    }
  else if(c2.innerHTML=='O' && c5.innerHTML=='O' && c8.innerHTML=='O'){
    swal({
      title: '¡Ha ganado O!',
      icon: 'success',
      text: '¿Desean volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértanse!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelvan Pronto!'
        });
      }
    });
    borraTablero();
    }
  else if(c3.innerHTML=='O' && c6.innerHTML=='O' && c9.innerHTML=='O'){
    swal({
      title: '¡Ha ganado O!',
      icon: 'success',
      text: '¿Desean volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértanse!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelvan Pronto!'
        });
      }
    });
    borraTablero();
    }
  else if(c1.innerHTML=='O' && c5.innerHTML=='O' && c9.innerHTML=='O'){
    swal({
      title: '¡Ha ganado O!',
      icon: 'success',
      text: '¿Desean volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértanse!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelvan Pronto!'
        });
      }
    });
    borraTablero();
    }
  else if(c7.innerHTML=='O' && c5.innerHTML=='O' && c3.innerHTML=='O'){
    swal({
      title: '¡Ha ganado O!',
      icon: 'success',
      text: '¿Desean volver a jugar?',
      buttons: {
        cancel: "No",
        catch: {
          text: "Si",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
        swal({
          icon: 'success',
          title: '¡Diviértanse!',
        });
      break;
      default:
        swal({
          icon: 'error',
          title: '¡Vuelvan Pronto!'
        });
      }
    });
    borraTablero();
    }
  else if(contador2==0){
    alert("Empate");
    borraTablero();
  }
}

//Esta función se encarga de realizar las jugadas de ambos jugadores en el modo de 2 jugadores
function jugandoDos(player){
  const jugador=document.getElementById(player);
  if(turno==true){
    if(jugador.innerHTML!='O' && jugador.innerHTML!='X'){
     contador2--;
     jugador.innerHTML = 'X';
     turno=false;
     setTimeout('reinicioDosPlayers()',200);
    };
  }else{
    if(jugador.innerHTML!='O' && jugador.innerHTML!='X'){
    contador2--;
    jugador.innerHTML = 'O';
    turno=true;
    setTimeout('reinicioDosPlayers()',200);
    };
  };
};
