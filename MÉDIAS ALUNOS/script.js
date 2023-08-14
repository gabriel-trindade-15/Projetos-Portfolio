function calculateAverage() {
    const grade1 = Number(document.getElementById('grade1').value);
    const grade2 = Number(document.getElementById('grade2').value);
    const grade3 = Number(document.getElementById('grade3').value);
    const grade4 = Number(document.getElementById('grade4').value);



    const average = (grade1 + grade2 + grade3 + grade4) / 4;
    const averageRounded = average.toFixed(2);

    if(grade1,grade2,grade3, grade4 === 0) {
        alert('[ERRO] Preencha todos os campos');
    }else if(average < 5) {
        document.getElementById("averageResult").textContent = `Média: ${averageRounded} REPROVADO`;
    } else {
        document.getElementById("averageResult").textContent = `Média: ${averageRounded} APROVADO`;
    }
    
}