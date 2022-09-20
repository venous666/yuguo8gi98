gengar = []


function calcular(){
    gabriela=document.getElementById("gayscombolsonaro")
    sofia=document.getElementById("homemdecalcinha")
    venus=document.getElementById("pedrotorquespelado")
    venus.value=parseFloat(gabriela.value)/parseFloat(sofia.value)
    daemon.value=parseFloat(venus.value)
    daemon.push(venus.value)
    gengar.push(venus.value)
      console.log(venus.value);

      if( localStorage.getItem('gengar') !== null){
        gengar = JSON.parse(localStorage.getItem('gengar'))
      }
      gengar.push(targaryen.value)
      localStorage.setItem('gengar', JSON.stringify(gengar))
      document.getElementById('daemon').value = gengar
}

function limpar(){
    gabriela=document.getElementById("gayscombolsonaro").value=""
    sofia=document.getElementById("homemdecalcinha").value=""
    venus=document.getElementById("pedrotorquespelado").value=""
}
